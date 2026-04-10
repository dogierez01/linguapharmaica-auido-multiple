// ==========================================
// 1. YOUR LESSON DATA (The source of truth)
// ==========================================
const lessonsData = {
    "lesson1": ["Taksi çağırdılar.", "Modemi tamir edecek misin?", "Kapıyı kapatmadı.", "Pizza yemem.", "Parayı sayar mısın?", "Telefonu tamir edecek mi?", "Anahtarları unuttular mı?", "Kilidi açmayacak.", "Araba satmayacağız.", "Yemek getirmeyeceksin.", "Belgeleri inceledik.", "Öğrencileri sayarsın.", "Kahvaltı hazırlayacak mı?", "Müşteri gömleği geri verdi.", "Pilot uçağı kontrol edecek.", "Hemşire kan almadı.", "Müdür hataları saydı.", "Polis arabaları durduracak.", "Modemi kontrol ederler.", "Şifreyi değiştirecek miyiz?"],
    "lesson2": ["Pilot uçağı ne zaman kontrol etti?", "Ne kadar para harcayacaksın?", "Anahtarı nerede tutarsın?", "Arabasını neden sattı?", "Kimin teknesini kiralayacaklar?", "Kaç hata buldun?", "Doktor neyi kontrol etti?", "Arabasını nereye park etti?", "Neyi unuttun?", "Bugün kaç müşteri aradı?", "Polis arabaları neden durdurur?", "Ne kadar kahve içersin?", "Ne kadar şeker koydu?", "Şifreyi neden değiştireceksin?", "Kimin şifresini kullanırsın?"],
    "lesson3": ["Hiç süt yok.", "Hiç paramız yok.", "Zamanı olmayacak.", "Bir kaza oldu.", "Hiç ışık yoktu.", "Bir toplantı olacak.", "Paraları vardı.", "Hiç kahve var mı?", "Hiç çay var mıydı?", "Bir toplantı olacak mı?", "Müşterilerimiz var.", "Arabası vardı.", "Hiç zamanın olmayacak.", "Hiç kahven yoktu.", "Bir sorunumuz vardı.", "Arabalar olacak.", "Araban var mı?", "Evi yoktu."],
    "lesson4": ["Biri ambulansı aradı mı?", "Her şeyi yemeyiz.", "Toplantıda hiç kimse yoktu.", "Ofiste biri var mı?", "New York'ta hiç kimsemiz yok.", "Her şeyi öğrendi.", "Hiçbir yerde parti yok.", "Sırtında bir şey vardı.", "Herkes numarayı öğrenecek.", "Hiç kimseye güvenmem.", "Biri kilidi değiştirecek.", "Belgede bir şey vardı.", "Herkesin bir şifresi olacak.", "Bir şey yedin mi?", "Hiç kimse öğrencileri uyarmadı.", "Arabayı bir yere park ettik.", "Hiç kimseyi aramadı.", "Aklında bir şey var mı?", "Herkesi aramadık.", "Hiç kimse modemi açmayacak."],
    "lesson5": ["Öğrenci parayı sayabilir mi?", "Biri kapıyı açabilir mi?", "Hemşire makineyi tamir edemez.", "Herkes bilet alabilecek mi?", "Hiç kimse arabayı satamaz.", "Polis birini gönderebilir mi?", "Pilot uçağı uçuramadı.", "Öğretmen her şeyi öğretebilecek mi?", "Hiçbir şeye dokunmadık.", "Bir şey alabilir miyim?", "Öğrenci kitabı bitirebilecek mi?", "Biri parayı sayabildi mi?", "Hiç kimse kutuyu açamayacak.", "Hemşire kan alabilir mi?", "Polis trafiği durdurabildi mi?", "Herkes mesaj gönderebilir.", "Pilot kapıyı kapatamadı.", "Öğretmen bir şey alacak mı?", "Hiç kimse bilgisayara dokunamaz.", "Öğrenci ödevi verebilecek mi?"],
    "lesson6": ["Öğrenciler parayı saymak zorunda mı?", "Biri kapıyı açmak zorunda kaldı mı?", "Hemşireler makineyi tamir etmek zorunda değil.", "Herkes bilet almak zorunda kalacak mı?", "Hiç kimse arabayı satmak zorunda kalmadı.", "Polis birini göndermek zorunda kaldı mı?", "Pilotlar uçağı uçurmak zorunda kalmadı.", "Öğretmenler her şeyi öğretmek zorunda kalacak mı?", "Hiçbir şeye dokunmak zorunda kalmadık.", "Bir şey almak zorunda mıyım?", "Öğrenciler kitabı bitirmek zorunda kalacak mı?", "Biri parayı saymak zorunda kaldı mı?", "Hiç kimse kutuyu açmak zorunda kalmayacak.", "Hemşireler kan almak zorunda kaldı mı?", "Polis trafiği durdurmak zorunda kaldı mı?", "Herkes mesaj göndermek zorunda kalacak.", "Pilotlar kapıyı kapatmak zorunda değildi.", "Öğretmenler bir şey satın almak zorunda kalacak mı?", "Hiç kimse bilgisayara dokunmak zorunda kalmadı.", "Öğrenciler ödevi vermek zorunda mı?"],
    "lesson7": ["Parası yoktu ama çantayı aldı.", "Yolda buz vardı, bu yüzden arabalar durmak zorunda kaldı.", "Öğrenciler çalışmadı, bu yüzden sınavı bitiremediler.", "Kapıyı açmak zorundasın, yoksa giremeyiz.", "Pilot motoru kontrol etti ve uçağı uçurdu.", "Arabayı satacak mısın yoksa tamir edecek misin?", "Kimse kazayı görmedi ama herkes sesi duydu.", "Anahtarım yoktu, bu yüzden kapıyı açamadım.", "Doktorlar gelmek zorunda, yoksa hasta ölecek.", "Önce parayı sayarsın, sonra bileti verirsin.", "Hemşireler meşguldü ama kan alabildiler.", "Bir şey yemedik ve kimse su içmedi.", "Polis trafiği durdurdu, sonra ambulansı aradı.", "Öğrenciler dinlemek zorunda, yoksa öğrenemeler.", "Modemi tamir edebiliriz veya yenisini alabiliriz.", "Toplantıda kimse yoktu, bu yüzden beklemek zorunda kaldık.", "Öğretmen kitabı okudu ve soruyu sordu.", "Herkes gelmek zorunda mı, yoksa evde kalabilirler mi?", "Işık yoktu, bu yüzden bir şey göremedim.", "Şifreyi değiştirecekler ama bize söylemeyecekler."],
    "lesson8": ["Çantayı almalısın.", "Arabalar durmalıydı.", "Öğrenciler çalışmalı.", "Kapıyı açmamalısın.", "Pilot motoru kontrol etmeliydi.", "Arabayı tamir etmeli miyim?", "Herkes sesi duymalıydı.", "Anahtarı almalıydın.", "Doktor gelmeli.", "Parayı saymamalıydın.", "Hemşire kan almalı.", "Su içmeli miyiz?", "Polis ambulansı aramalıydı.", "Öğrenciler dinlemeli.", "Modemi değiştirmeliyiz.", "Toplantıda beklemeli miydik?", "Öğretmen kitabı okumalı.", "Kahvaltıyı iptal etmeli miyiz?", "Şifreyi söylememeliydin.", "Işığı görmelisin."],
    "lesson9": ["O güzel.", "Biz zengindik.", "Onlar aç olacaklar.", "Ben yorgunum.", "O hazır değil.", "Sen mutlu musun?", "Hava soğuktu.", "Onlar evde değildi.", "O hasta mıydı?", "Sen ünlü olacaksın.", "O geç kalmayacak.", "Yemek sıcak olacak mı?", "Araba hızlıdır.", "Arkadaşlarım meşgul değil.", "Bu zor mu?", "Film sıkıcıydı.", "Biz kızgın değildik.", "Sorular kolay mıydı?", "Hava güzel olacak.", "Yarın müsait olacak mısın?"],
    "lesson10a": ["Bu kutu diğerinden daha büyük.", "Bu, evdeki en küçük oda.", "Kırmızı araba mavi arabadan daha pahalı.", "O, sınıftaki en çalışkan öğrenci.", "Ali, Ahmet kadar yaşlı.", "Çay çok sıcak.", "Çorba aşırı tuzlu.", "Film bayağı ilginçti.", "Uçak trenden daha hızlıdır.", "Çita en hızlı hayvandır.", "Sağlık paradan daha önemlidir.", "Bu en tehilekeli yol.", "Buz kar kadar soğuktur.", "Gitmek için çok geç.", "Bugün çok yorgunum.", "Odan oldukça temiz.", "Yaz kıştan daha sıcaktır.", "Bu koltuk daha rahat.", "O kasabadaki en zengin adam.", "Bu soru benim için fazla zor."],
    "lesson10b": ["Yumurta sevmiyorum.", "Köpeğimi gezdiriyorum.", "Doktor kan testini inceliyor.", "Bankalar eski para kabul etmiyor.", "Şoför arabayı yıkıyor.", "Modemi açmıyorsunuz.", "Devlet interneti kontrol ediyor.", "Burada mı yaşıyorsunuz?", "Doktorlar kan almıyor.", "Pilot uçağı kontrol ediyor mu?", "Bu oteli tercih etmiyoruz.", "Partiye geliyorlar mı?", "Öğretmen projektörü hazırlıyor.", "Evde balık pişirmiyorlar."],
    "lesson11": ["Bankacı parayı saymıştı.", "Şoför arabayı park ediyordu.", "Hemşire odayı temizlemişti.", "Öğrenci kitap aldı.", "Doktor hastayı arardı.", "Pilot uçağı kontrol etti.", "Öğretmenler sınavı hazırlıyordu.", "Polis trafiği durdurmuştu.", "Hemşire kan aldı.", "Öğrenciler defter getirirdi.", "Pilot motoru kontrol ediyordu.", "Teknisyen modemi tamir etmişti.", "Biz bu oteli tercih ederdik.", "Şoför arabayı yıkadı.", "Marketler eski para kabul ederdi.", "Öğrenciler öğretmeni dinliyordu.", "Sistem şifreyi değiştirmişti.", "Doktorlar kan testini inceledi.", "Hemşire kapıyı kilitliyordu.", "Öğretmen kitabı okumuştu."],
    "lesson12": ["Öğrenciler çalışmadıklarından dolayı sınavı bitiremediler.", "Her yerde buz olmasına rağmen pilot uçağı indirebildi.", "Hemşireyi aramadan önce doktor hastayı muayene etmişti.", "Öğrenciler kitapları aldıktan sonra öğretmen parayı saydı.", "Doktor geldiğinde hemşire odayı temizliyordu.", "Ambulans beklerken polis trafiği durduruyordu.", "Çok yorgun olduklarından dolayı doktorlar dinlenmek zorundalar.", "Zengin olmasına rağmen bankacı arabayı satmıştı.", "Derse girmeden önce öğrenciler beklemek zorundaydı.", "Uçuş bittikten sonra pilot uçağı park etti.", "Öğrenciler defterleri getirmediğinde öğretmen kızgındı.", "Öğretmen sınavı hazırlarken öğrenci kitap okuyordu.", "İnternet kötü olduğundan dolayı modemi tamir etmek zorundaydım.", "Yağmur yağmasına rağmen şoför arabayı yıkadı.", "Doktor gelmeden önce hemşireler ilacı vermişti.", "Sistem bozulduktan sonra şifreyi değiştirdik.", "Doktor onları aradığında hastalar bekliyordu.", "Doktorlar çalışırken polis hastaneyi aramalı.", "Hasta olduklarından dolayı soğuk su içmemeliler.", "Geç kalmasına rağmen pilot motoru kontrol etmişti."],
    "lesson13": ["Geçen yıldan beri pilot uçağı kontrol etmemişti.", "Yoğun kanamaya rağmen doktor hastayı kurtarabildi.", "Kitabı okurken öğrenci hatayı bulabildi.", "Gece yarısında hemşire kapıyı kilitliyordu.", "Toplantıdan sonra avukat parayı saydı.", "Kötü internetten dolayı modemi tamir etmiştik.", "Dersten önce öğrenciler koridorda beklemek zorundaydı.", "On Beş Mayıs'ta polis şifreyi değiştirmişti.", "Akşama kadar doktorlar hasta muayene ederdi.", "Kışın bankacı arabayı satmadı.", "Trafiğe rağmen şoför dikkatli olmalıydı.", "Arabayı park ederken şoför radyoyu kapattı.", "Fırtınadan dolayı pilotlar uçuşu iptal etmek zorunda kaldı.", "Pazartesi günü doktorlar çalışmak zorundaydı.", "Ameliyattan sonra hemşire odayı temizlemişti.", "Cuma gününe kadar polis hastanede beklemişti.", "Saat beşte öğretmen ödev verdi.", "İki bin yirmi yılında bankalar eski para kabul etmeliydi.", "Sabah saatlerinden beri öğretmen sınavları hazırlamıştı."],
    "lesson14": ["Şoför arabayı hızlı bir şekilde park etti.", "Doktor kanı durdurarak hastayı kurtardı.", "Hemşire hastayla dostane bir şekilde konuştu.", "Öğretmen kitabı okuyarak hatayı buldu.", "Öğrenciler sorulara aptalca bir şekilde cevap verdi.", "Anahtarı kullanarak kapıyı açabilirsin.", "Öğretmen öğrencilere sert bir şekilde baktı.", "Bankacı parayı sessiz bir şekilde saydı.", "Bankacı müşteriyi arayarak problemi çözdü.", "Pilot motoru dikkatli bir şekilde kontrol etti.", "Hemşire ilacı vererek hastaya yardım etti.", "Polis trafiği ani bir şekilde durdurdu.", "Pilot radarı kontrol ederek uçağı indirdi.", "Doktor test sonuçlarını basit bir şekilde açıkladı.", "Polis arabada bekleyerek hırsızı yakaladı.", "Avukat arabayı zekice bir şekilde sattı.", "Şoför soğuk su kullanarak arabayı yıkadı.", "Öğrenci kapıyı yavaş bir şekilde kapattı.", "Sistemi yeniden başlatarak şifreyi değiştirdik."],
    "lesson15": ["Sen interneti kullanabilesin diye şifreyi paylaşıyorum.", "Öğrenciler sınava çalışmak için kitap aldı.", "Doktor kan testini inceleyebilsin diye hemşire masayı temizledi.", "Şoför arabayı satmak için yıkadı.", "Öğrenci kitabı okuyabilsin diye öğretmen kitabı verdi.", "Polis ambulansa yardım etmek için trafiği durdurdu.", "Biz kapıyı açabilelim diye şoför anahtarları getirdi.", "Bankacı parayı saymak için işte kaldı.", "Ambulans hızlı varabilsin diye devlet trafiği kontrol ediyor.", "Pilot uçağı güvenli uçurmak için motoru kontrol etti.", "Avukat evi alabilsin diye bankacı parayı gönderecek.", "Doktor hemşireyle konuşmak için hastaneyi aradı.", "Öğretmen sınava başlayabilsin diye öğrenciler bekliyor.", "Avukat şifreyi değiştirmek için bilgisayarı kullandı.", "Teknisyen motoru tamir edebilsin diye pilot problemi açıkladı.", "İnterneti kullanmak için modemi tamir ettik.", "Hasta iyileşebilsin diye doktor ilaç yazdı.", "Öğretmen dersi hazırlamak için kitabı okudu.", "Şoför arabayı park edebilsin diye polis yolu açtı.", "Hemşire odayı temizlemek için kapıyı kilitledi."],
    "lesson16": ["Çok çalıştığından dolayı hemşire yoruluyor.", "Parayı kaybettiğinde avukat üzüldü.", "Arabayı sattıktan sonra bankacı zenginleşti.", "Hava soğuyor, bu yüzden pilot ceket giyiyor.", "Öğrenciler çalışmadığı için öğretmen sinirlendi.", "Bütün gün araba sürdüğünde şoför acıkır.", "Hastane soğuk olduğu için doktor hastalandı.", "Çok fazla yediğinden dolayı köpek şişmanlıyor.", "Sistem bozulduğunda patron epey çılgınlaştı.", "Beklerken polis susadı.", "Ders uzun olduğu için öğrenciler sıkılıyor.", "Hemşire ilacı verdikten sonra hasta iyileşti.", "Geç kalıyoruz, bu yüzden şoför hızlı sürüyor.", "Yağmur yağduğunda araba kirlenir.", "Kumar oynadığı için adam fakirleşiyor.", "Sınava girmeden önce öğrenciler heyecanlanır.", "Ders başlamadan önce öğretmen hazırlandı.", "Hava kararıyor, bu yüzden pilot radarı kontrol ediyor.", "İnternet kötüleşiyor, bu yüzden modemi tamir etmeliyiz.", "Yıllarca çalıştıktan sonra doktor yaşlandı."],
    "lesson17": ["Kimse avukatın arabayı neden sattığını anlayamadı.", "Onların partiye gelip gelmeyeceğini bilmiyorum.", "Onun arabasını değiştirdiğini öğrendik.", "Modemi nasıl açtıklarını öğreneceğiz.", "Hemşire, hastanın su isteyip istemediğini kontrol etti.", "Bankacının parayı nereye sakladığını bilmiyoruz.", "Öğrenciler sınavın ne zaman başlayacağını sordu.", "Teknisyenin modemi tamir edip edemeyeceğini göreceğiz.", "Patron, şifreyi kimin değiştirdiğini öğrenmek istiyor.", "Pilotun uçağı indirip indiremeyeceğini merak ediyoruz.", "Hemşirenin hastaya ne verdiğini gördüm.", "Şoför, arabayı yıkayıp yıkamadığını hatırlamıyor.", "Öğretmen, öğrencilerin çalışmadığını biliyordu.", "Polis, şoförün kapıyı nasıl açtığını buldu.", "Doktor, hastanın ateşi olup olmadığını sordu.", "Onlar, öğretmenin ne soracağını tartışıyor.", "Bankaların eski para kabul edip etmediğinden emin değilim.", "Yumurta neden sevmediğini açıklayamadı.", "Öğrenciler öğretmenin ödev verip vermeyeceğini merak ediyor.", "Polis, patronun epey çılgın olduğunu gördü."],
    "lesson18": ["Polis bankadan çalınan parayı buldu.", "Şoför uyuyan köpeği görmedi.", "Patron şoför tarafından yıkanan arabayı beğendi.", "Ağlayan öğrenci öğretmeni aradı.", "Hastanede bekleyen hastalar epey çılgınlaştı.", "Biz tamir edilen modemi kullanacağız.", "Doktor hemşire tarafından kilitlenen kapıyı açamadı.", "Muayene eden doktor bir soru sordu.", "Bankacı avukat tarafından satılan arabayı aldı.", "Bekleyen hastalar sinirlendi.", "Polis çalınan parayı buldu.", "Koridorda ağlayan öğrenci öğretmeni aradı.", "Patron yıkanan arabayı beğendi.", "Şoför yolda uyuyan köpeği görmedi.", "Hemşire kilitli kapıyı açamadı.", "Odada çalışan doktorlar telefona cevap vermedi.", "Avukat satılan arabayı sürdü.", "Kan testini inceleyen doktor bir soru sordu.", "Biz teknisyen tarafından tamir edilen modemi kullanacağız.", "Çalışan doktorlar telefona cevap vermedi."],
    "lesson19": ["Doktor sabahtan beri kan testini inceliyor.", "Şoförün arabayı buraya park etmesi yasak.", "Polis saatlerdir trafiği durduruyor mu?", "Hemşirenin erken çıkması serbestti.", "Bankacı haftalardır para saymıyor.", "Pilotun o havada uçağı uçurması yasaktı.", "Teknisyen dünden beri modemi tamir ediyor mu?", "Doktorun hastayı muayene etmesi serbest olacak.", "Öğrenciler aylardır kitap okumuyor.", "Bankacının o parayı alması yasak olacak.", "Hemşire iki saattir odayı temizliyor.", "Öğrencilerin koridorda beklemesi serbest.", "Avukat günlerdir arabasını satmaya çalışıyor mu?", "Köpeğin hastaneye girmesi yasak.", "Patron saatlerdir epey çılgın davranıyor.", "Polisin hastaneyi araması serbest miydi?", "Şoför günlerdir arabayı yıkamıyor.", "Avukatın şifreyi değiştirmesi serbest olacak mı?", "Pilot sabahtan beri uçağı kontrol ediyor.", "Öğretmenin o kitabı okuması serbestti."]
};

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let currentLesson = "lesson1";
let currentQuestionIndex = 0;
let score = 0;

// ==========================================
// 3. UI ELEMENTS
// ==========================================
const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const audioPlayer = document.getElementById('audio-player');
const lessonSelector = document.getElementById('lesson-selector');

// ==========================================
// 4. CORE FUNCTIONS
// ==========================================

// Initialize the App
function init() {
    // Populate lesson selector
    for (let key in lessonsData) {
        let option = document.createElement('option');
        option.value = key;
        option.textContent = key.replace('lesson', 'Lesson ');
        lessonSelector.appendChild(option);
    }
    loadQuestion();
}

// Load a Question
function loadQuestion() {
    const questions = lessonsData[currentLesson];
    questionText.textContent = `Question ${currentQuestionIndex + 1}: Translate the sentence.`;
    answerInput.value = '';
    feedback.textContent = '';
    
    // Auto-play audio if desired
    playAudio();
}

// Play Audio (The magic link to your ElevenLabs files)
function playAudio() {
    // Filename logic: e.g., audio/lesson1_0.mp3
    audioPlayer.src = `audio/${currentLesson}_${currentQuestionIndex}.mp3`;
    audioPlayer.play().catch(e => console.log("Audio play blocked or file missing."));
}

// Check the Answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = lessonsData[currentLesson][currentQuestionIndex].toLowerCase();
    
    // Simple comparison (ignoring trailing punctuation for student friendliness)
    const cleanUser = userAnswer.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
    const cleanCorrect = correctAnswer.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");

    if (cleanUser === cleanCorrect) {
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "green";
        score++;
        scoreDisplay.textContent = score;
        
        // Move to next question after short delay
        setTimeout(nextQuestion, 1500);
    } else {
        feedback.textContent = "❌ Not quite. Listen again and try.";
        feedback.style.color = "red";
    }
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= lessonsData[currentLesson].length) {
        alert("🎉 Lesson Complete! Great job.");
        currentQuestionIndex = 0;
    }
    loadQuestion();
}

// Change Lesson
function changeLesson() {
    currentLesson = lessonSelector.value;
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    loadQuestion();
}

// Start the app
init();
