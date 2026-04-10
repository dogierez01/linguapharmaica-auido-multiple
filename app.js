// ==========================================
// 3. CORE LOGIC
// ==========================================

// Smarter, Mac-friendly audio function
function playTurkishAudio(text) {
    // 1. Check if the browser even supports it
    if (!('speechSynthesis' in window)) {
        alert("Sorry, your browser does not support text-to-speech.");
        return;
    }

    // 2. Clear any "stuck" audio in the browser's background
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tr-TR'; 
    utterance.rate = 0.9; 
    
    // 3. Explicitly find and attach the Turkish voice (helps on Mac/Safari)
    const voices = window.speechSynthesis.getVoices();
    const turkishVoice = voices.find(voice => voice.lang.includes('tr'));
    if (turkishVoice) {
        utterance.voice = turkishVoice;
    }
    
    // 4. Play the audio
    window.speechSynthesis.speak(utterance);
}

function initLesson() {
    const selectedLessonId = lessonSelect.value;
    currentLesson = lessonsData[selectedLessonId];
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = score;
    
    quizArea.classList.remove('hidden');
    completionArea.classList.add('hidden');
    
    loadQuestion();
}

function loadQuestion() {
    const question = currentLesson[currentQuestionIndex];
    questionCounter.innerText = `Question ${currentQuestionIndex + 1} of ${currentLesson.length}`;
    
    // Setup Audio Button
    playAudioBtn.onclick = () => playTurkishAudio(question.tr);
    
    // Prepare options
    const allOptions = [question.correct, ...question.fakes];
    shuffleArray(allOptions);
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    nextBtn.classList.add('hidden');
    
    // Create new option buttons
    allOptions.forEach(optionText => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = optionText;
        
        btn.onclick = () => checkAnswer(btn, optionText === question.correct, question.correct);
        optionsContainer.appendChild(btn);
    });
    
    // REMOVED the auto-play line here so the browser doesn't block the engine!
}

function checkAnswer(selectedBtn, isCorrect, correctText) {
    const allButtons = document.querySelectorAll('.option-btn');
    
    allButtons.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
        scoreDisplay.innerText = score;
    } else {
        selectedBtn.classList.add('incorrect');
        allButtons.forEach(btn => {
            if (btn.innerText === correctText) {
                btn.classList.add('correct');
            }
        });
    }
    
    nextBtn.classList.remove('hidden');
}

function handleNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentLesson.length) {
        loadQuestion();
        // It is usually safe to auto-play AFTER the user has clicked "Next"
        playTurkishAudio(currentLesson[currentQuestionIndex].tr);
    } else {
        showCompletion();
    }
}

function showCompletion() {
    quizArea.classList.add('hidden');
    completionArea.classList.remove('hidden');
    finalScoreDisplay.innerText = `${score} / ${currentLesson.length}`;
}

// Utility Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
