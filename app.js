function playAudio(lessonId, index) {
    const audioPlayer = document.getElementById('audio-player');
    // This matches the filenames: lesson1_0.mp3, etc.
    audioPlayer.src = `audio/${lessonId}_${index}.mp3`;
    audioPlayer.play();
}
