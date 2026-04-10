let currentUtterance = null;

function playTurkishAudio(text) {
    console.log("1. Chrome button clicked! Text:", text);

    if (!('speechSynthesis' in window)) {
        alert("Sorry, your browser does not support text-to-speech.");
        return;
    }

    // Chrome Bug Fix: Brutally clear any stuck audio in the background queue
    window.speechSynthesis.cancel();
    
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'tr-TR'; 
    currentUtterance.rate = 0.9; 
    
    // Find voices
    const voices = window.speechSynthesis.getVoices();
    
    // Chrome prioritizes its own "Google" voices. Let's look for that first.
    const googleVoice = voices.find(voice => voice.name === 'Google Türkçe' || voice.name.includes('Google') && voice.lang.includes('tr'));
    // Fallback to the Mac voice just in case
    const macVoice = voices.find(voice => voice.lang.includes('tr'));
    
    if (googleVoice) {
        console.log("2. Success: Using Google Türkçe voice.");
        currentUtterance.voice = googleVoice;
    } else if (macVoice) {
        console.log("2. Using Mac system Turkish voice.");
        currentUtterance.voice = macVoice;
    } else {
        console.warn("2. WARNING: Chrome cannot find any Turkish voice!");
    }
    
    currentUtterance.onerror = function(event) {
        console.error("3. CHROME PLAYBACK ERROR:", event.error);
    };

    currentUtterance.onstart = function() {
        console.log("3. Audio is playing...");
    };

    window.speechSynthesis.speak(currentUtterance);
}
