// ==========================================
// 1. LESSON DATA
// ==========================================
const lessonsData = {
    lesson1: [
        { tr: "Taksi çağırdılar.", correct: "They called a taxi", fakes: ["They call a taxi", "They are call a taxi"] },
        { tr: "Modemi tamir edecek misin?", correct: "Will you repair the modem?", fakes: ["Do you repair the modem?", "Are you repair the modem?"] },
        { tr: "Kapıyı kapatmadı.", correct: "She didn't close the door", fakes: ["She didn't closed the door", "She doesn't close the door"] },
        { tr: "Pizza yemem.", correct: "I don't eat pizza", fakes: ["I doesn't eat pizza", "I am not eat pizza"] },
        { tr: "Parayı sayar mısın?", correct: "Do you count the money?", fakes: ["Are you count the money?", "Does you count the money?"] },
        { tr: "Telefonu tamir edecek mi?", correct: "Will she repair the telephone?", fakes: ["Do she repair the telephone?", "Does she repair the telephone?"] },
        { tr: "Anahtarları unuttular mı?", correct: "Did they forget the keys?", fakes: ["Did they forgot the keys?", "Were they forget the keys?"] },
        { tr: "Kilidi açmayacak.", correct: "She won't open the lock", fakes: ["She doesn't open the lock", "She not open the lock"] },
        { tr: "Araba satmayacağız.", correct: "We won't sell cars", fakes: ["We aren't sell cars", "We don't sell cars"] },
        { tr: "Yemek getirmeyeceksin.", correct: "You won't bring food", fakes: ["You don't bring food", "You aren't bring food"] },
        { tr: "Belgeleri inceledik.", correct: "We examined the documents", fakes: ["We examine the documents", "We are examine the documents"] },
        { tr: "Öğrencileri sayarsın.", correct: "You count the students", fakes: ["You are count the students", "You counting the students"] },
        { tr: "Kahvaltı hazırlayacak mı?", correct: "Will she prepare breakfast?", fakes: ["Do she prepare breakfast?", "Is she prepare breakfast?"] },
        { tr: "Müşteri gömleği geri verdi.", correct: "The customer returned the shirt", fakes: ["The customer return the shirt", "The customer was return the shirt"] },
        { tr: "Pilot uçağı kontrol edecek.", correct: "The pilot will check the plane", fakes: ["The pilot checking the plane", "The pilot is check the plane"] },
        { tr: "Hemşire kan almadı.", correct: "The nurse didn't take blood", fakes: ["The nurse didn't took blood", "The nurse don't take blood"] },
        { tr: "Müdür hataları saydı.", correct: "The manager counted the mistakes", fakes: ["The manager count the mistakes", "The manager was count the mistakes"] },
        { tr: "Polis arabaları durduracak.", correct: "The police will stop the cars", fakes: ["The police stopping the cars", "The police is stop the cars"] },
        { tr: "Modemi kontrol ederler.", correct: "They control the modem", fakes: ["They are control the modem", "They controls the modem"] }
    ],
    lesson2: [
        { tr: "Pilot uçağı ne zaman kontrol etti?", correct: "When did the pilot check the plane?", fakes: ["When does the pilot check the plane?", "When did the pilot checked the plane?"] },
        { tr: "Ne kadar para harcayacaksın?", correct: "How much money will you spend?", fakes: ["How much money do you spend?", "How much money are you spend?"] },
        { tr: "Anahtarı nerede tutarsın?", correct: "Where do you keep the key?", fakes: ["Where are you keep the key?", "Where does you keep the key?"] },
        { tr: "Arabasını neden sattı?", correct: "Why did she sell her car?", fakes: ["Why did she sold her car?", "Why does she sell her car?"] },
        { tr: "Kimin teknesini kiralayacaklar?", correct: "Whose boat will they rent?", fakes: ["Whose boat do they rent?", "Whose boat are they rent?"] },
        { tr: "Kaç hata buldun?", correct: "How many mistakes did you find?", fakes: ["How many mistakes did you found?", "How many mistakes were you find?"] },
        { tr: "Doktor neyi kontrol etti?", correct: "What did the doctor control?", fakes: ["What did the doctor controlled?", "What does the doctor control?"] },
        { tr: "Arabasını nereye park etti?", correct: "Where did she park her car?", fakes: ["Where did she parked her car?", "Where was she park her car?"] },
        { tr: "Neyi unuttun?", correct: "What did you forget?", fakes: ["What did you forgot?", "What were you forget?"] },
        { tr: "Bugün kaç müşteri aradı?", correct: "How many customers called today?", fakes: ["How many customers call today?", "How many customers did called today?"] },
        { tr: "Polis arabaları neden durdurur?", correct: "Why do the police stop the cars?", fakes: ["Why are the police stop the cars?", "Why does the police stop the cars?"] },
        { tr: "Ne kadar kahve içersin?", correct: "How much coffee do you drink?", fakes: ["How much coffee are you drink?", "How much coffee did you drink?"] }
    ]
};

// ==========================================
// 2. APPLICATION STATE
// ==========================================
let currentLesson = [];
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const lessonSelect = document.getElementById('lesson-select');
const scoreDisplay = document.getElementById('score');
const questionCounter = document.getElementById('question-counter');
const playAudioBtn = document.getElementById('play-audio-btn');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const quizArea = document.getElementById('quiz-area');
const completionArea = document.getElementById('completion-area');
const finalScoreDisplay = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

// ==========================================
// 3. CORE LOGIC
// ==========================================

// Function to play Turkish Audio using the browser's built-in engine
function playTurkishAudio(text) {
    // Cancel any currently playing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tr-TR'; // Sets the language to Turkish
    utterance.rate = 0.9; // Slightly slower for language learners
    
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
    
    // Automatically play the audio when the question loads
    playTurkishAudio(question.tr);
}

function checkAnswer(selectedBtn, isCorrect, correctText) {
    const allButtons = document.querySelectorAll('.option-btn');
    
    // Disable all buttons after a choice is made
    allButtons.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
        scoreDisplay.innerText = score;
    } else {
        selectedBtn.classList.add('incorrect');
        // Find and highlight the correct answer
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

// ==========================================
// 4. EVENT LISTENERS
// ==========================================
lessonSelect.addEventListener('change', initLesson);
nextBtn.addEventListener('click', handleNext);
restartBtn.addEventListener('click', initLesson);

// Start the app!
initLesson();
