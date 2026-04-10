// Add this at the top of your Core Logic section to prevent Safari from deleting the audio
let currentUtterance = null; 

function playTurkishAudio(text) {
    console.log("1. Button clicked! Attempting to say:", text);

    if (!('speechSynthesis' in window)) {
        console.error("Error: Browser does not support Speech Synthesis.");
        alert("Sorry, your browser does not support text-to-speech.");
        return;
    }

    // Clear any stuck background audio
    window.speechSynthesis.cancel();
    
    // Create the new audio and lock it in the global variable
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'tr-TR'; 
    currentUtterance.rate = 0.9; 
    
    // Search for the Turkish voice
    const voices = window.speechSynthesis.getVoices();
    const turkishVoice = voices.find(voice => voice.lang.includes('tr'));
    
    if (turkishVoice) {
        console.log("2. Found Turkish voice:", turkishVoice.name);
        currentUtterance.voice = turkishVoice;
    } else {
        console.warn("2. WARNING: No Turkish voice found. Using default.");
    }
    
    // Track any errors that happen during playback
    currentUtterance.onerror = function(event) {
        console.error("3. PLAYBACK ERROR:", event.error);
    };

    currentUtterance.onstart = function() {
        console.log("3. Audio has started playing successfully.");
    };

    // Send the command to play
    window.speechSynthesis.speak(currentUtterance);
    console.log("Command sent to the browser.");
}
