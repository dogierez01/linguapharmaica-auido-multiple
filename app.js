// ==========================================
// 3. CORE LOGIC
// ==========================================

// Global variable to lock in the Turkish voice
let turkishVoice = null;

// Function to force the browser to find the Turkish voice
function preloadTurkishVoice() {
    const voices = window.speechSynthesis.getVoices();
    // Look for any voice where the language code contains 'tr' (like tr-TR)
    turkishVoice = voices.find(voice => voice.lang.includes('tr'));
}

// Browsers load voices asynchronously. This event listener catches them when they are ready.
window.speechSynthesis.onvoiceschanged = preloadTurkishVoice;

// Run it once immediately just in case they are already loaded
preloadTurkishVoice();

function playTurkishAudio(text) {
    if (!('speechSynthesis' in window)) {
        alert("Sorry, your browser does not support text-to-speech.");
        return;
    }

    // Cancel any stuck audio
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Explicitly set the language tag
    utterance.lang = 'tr-TR'; 
    utterance.rate = 0.9; 
    
    // Attach the actual Turkish voice object if we found it
    if (turkishVoice) {
        utterance.voice = turkishVoice;
    } else {
        // Fallback: try one last time to find it right before speaking
        const voices = window.speechSynthesis.getVoices();
        const lastSecondVoice = voices.find(voice => voice.lang.includes('tr'));
        if (lastSecondVoice) {
            utterance.voice = lastSecondVoice;
        }
    }
    
    window.speechSynthesis.speak(utterance);
}

// ... keep your initLesson, loadQuestion, checkAnswer, etc. exactly the same below this line ...
