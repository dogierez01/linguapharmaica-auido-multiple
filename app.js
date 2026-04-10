// ==========================================
// 1. LESSON DATA (All 10 Lessons)
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
        { tr: "Modemi kontrol ederler.", correct: "They control the modem", fakes: ["They are control the modem", "They controls the modem"] },
        { tr: "Şifreyi değiştirecek miyiz?", correct: "Will we change the password?", fakes: ["Do we change the password?", "Are we change the password?"] }
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
        { tr: "Ne kadar kahve içersin?", correct: "How much coffee do you drink?", fakes: ["How much coffee are you drink?", "How much coffee did you drink?"] },
        { tr: "Ne kadar şeker koydu?", correct: "How much sugar did she put?", fakes: ["How much sugar does she put?", "How much sugar was she put?"] },
        { tr: "Şifreyi neden değiştireceksin?", correct: "Why will you change the password?", fakes: ["Why do you change the password?", "Why are you change the password?"] },
        { tr: "Kimin şifresini kullanırsın?", correct: "Whose password do you use?", fakes: ["Whose password are you use?", "Whose password does you use?"] }
    ],
    lesson3: [
        { tr: "Hiç süt yok.", correct: "There isn't milk", fakes: ["It isn't milk", "They isn't milk"] },
        { tr: "Hiç paramız yok.", correct: "We don't have money", fakes: ["We aren't have money", "We doesn't have money"] },
        { tr: "Zamanı olmayacak.", correct: "She won't have time", fakes: ["She don't have time", "She hasn't time"] },
        { tr: "Bir kaza oldu.", correct: "There was (an) accident", fakes: ["It was an accident", "They had an accident"] },
        { tr: "Hiç ışık yoktu.", correct: "There wasn't light", fakes: ["It wasn't light", "There didn't light"] },
        { tr: "Bir toplantı olacak.", correct: "There will be (a) meeting", fakes: ["It will be a meeting", "They will have meeting"] },
        { tr: "Paraları vardı.", correct: "They had money", fakes: ["They have money", "They was have money"] },
        { tr: "Hiç kahve var mı?", correct: "Is there coffee?", fakes: ["Is it coffee?", "Are there coffee?"] },
        { tr: "Hiç çay var mıydı?", correct: "Was there tea?", fakes: ["Was it tea?", "Were there tea?"] },
        { tr: "Bir toplantı olacak mı?", correct: "Will there be (a) meeting?", fakes: ["Will it be a meeting?", "Do there be a meeting?"] },
        { tr: "Müşterilerimiz var.", correct: "We have customers", fakes: ["We having customers", "We are have customers"] },
        { tr: "Arabası vardı.", correct: "She had (a) car", fakes: ["She has a car", "She did had a car"] },
        { tr: "Hiç zamanın olmayacak.", correct: "You won't have time", fakes: ["You don't have time", "You aren't have time"] },
        { tr: "Hiç kahven yoktu.", correct: "You didn't have coffee", fakes: ["You don't have coffee", "You wasn't have coffee"] },
        { tr: "Bir sorunumuz vardı.", correct: "We had (a) problem", fakes: ["We have a problem", "We did had a problem"] },
        { tr: "Arabalar olacak.", correct: "There will be cars", fakes: ["It will be cars", "There are will be cars"] },
        { tr: "Araban var mı?", correct: "Do you have (a) car?", fakes: ["Are you have a car?", "Have you a car?"] },
        { tr: "Evi yoktu.", correct: "She didn't have (a) house", fakes: ["She doesn't have a house", "She wasn't have a house"] }
    ],
    lesson4: [
        { tr: "Biri ambulansı aradı mı?", correct: "Did somebody call the ambulance?", fakes: ["Was somebody call the ambulance?", "Did anybody call the ambulance?"] },
        { tr: "Her şeyi yemeyiz.", correct: "We don't eat everything", fakes: ["We aren't eat everything", "We doesn't eat everything"] },
        { tr: "Toplantıda hiç kimse yoktu.", correct: "There was nobody in the meeting", fakes: ["There was anybody in the meeting", "There wasn't nobody in the meeting"] },
        { tr: "Ofiste biri var mı?", correct: "Is there somebody in the office?", fakes: ["Are there somebody in the office?", "Is it somebody in the office?"] },
        { tr: "New York'ta hiç kimsemiz yok.", correct: "We have nobody in New York", fakes: ["We don't have nobody in New York", "We having nobody in New York"] },
        { tr: "Her şeyi öğrendi.", correct: "She learned everything", fakes: ["She learn everything", "She was learn everything"] },
        { tr: "Hiçbir yerde parti yok.", correct: "There isn't (a) party anywhere", fakes: ["There isn't a party somewhere", "It isn't a party anywhere"] },
        { tr: "Sırtında bir şey vardı.", correct: "She had something in her back", fakes: ["She has something in her back", "She did had something in her back"] },
        { tr: "Herkes numarayı öğrenecek.", correct: "Everybody will learn the number", fakes: ["All body will learn the number", "Everybody are learn the number"] },
        { tr: "Hiç kimseye güvenmem.", correct: "I trust nobody", fakes: ["I don't trust nobody", "I am trust nobody"] },
        { tr: "Biri kilidi değiştirecek.", correct: "Somebody will change the lock", fakes: ["Anybody will change the lock", "Somebody are change the lock"] },
        { tr: "Belgede bir şey vardı.", correct: "There was something in the document", fakes: ["It was something in the document", "There had something in the document"] },
        { tr: "Herkesin bir şifresi olacak.", correct: "Everybody will have (a) password", fakes: ["Everybody are have a password", "Everybody will having a password"] },
        { tr: "Bir şey yedin mi?", correct: "Did you eat something?", fakes: ["Did you ate something?", "Was you eat something?"] },
        { tr: "Hiç kimse öğrencileri uyarmadı.", correct: "Nobody warned the students", fakes: ["Anybody warned the students", "Nobody didn't warn the students"] },
        { tr: "Arabayı bir yere park ettik.", correct: "We parked the car somewhere", fakes: ["We park the car somewhere", "We parked the car anywhere"] },
        { tr: "Hiç kimseyi aramadı.", correct: "She called nobody", fakes: ["She didn't call nobody", "She call nobody"] },
        { tr: "Aklında bir şey var mı?", correct: "Do you have something in your mind?", fakes: ["Are you have something in your mind?", "Have you something in your mind?"] },
        { tr: "Herkesi aramadık.", correct: "We didn't call everybody", fakes: ["We wasn't call everybody", "We don't call everybody"] },
        { tr: "Hiç kimse modemi açmayacak.", correct: "Nobody will open the modem", fakes: ["Anybody will open the modem", "Nobody don't open the modem"] }
    ],
    lesson5: [
        { tr: "Öğrenci parayı sayabilir mi?", correct: "Can the student count the money?", fakes: ["Do the student count the money?", "Is the student count the money?"] },
        { tr: "Biri kapıyı açabilir mi?", correct: "Could somebody open the door?", fakes: ["Can somebody opened the door?", "Could to somebody open the door?"] },
        { tr: "Hemşire makineyi tamir edemez.", correct: "The nurse can't repair the machine.", fakes: ["The nurse don't can repair the machine.", "The nurse couldn't repair the machine."] },
        { tr: "Herkes bilet alabilecek mi?", correct: "Will everybody be able to buy tickets?", fakes: ["Will everybody can to buy tickets?", "Do everybody be able to buy tickets?"] },
        { tr: "Hiç kimse arabayı satamaz.", correct: "Nobody can sell the car.", fakes: ["Anybody can sell the car.", "Nobody don't can sell the car."] },
        { tr: "Polis birini gönderebilir mi?", correct: "Could the police send somebody?", fakes: ["Can the police sended somebody?", "Could the police to send somebody?"] },
        { tr: "Pilot uçağı uçuramadı.", correct: "The pilot couldn't fly the plane.", fakes: ["The pilot didn't could fly the plane.", "The pilot wasn't fly the plane."] },
        { tr: "Öğretmen her şeyi öğretebilecek mi?", correct: "Will the teacher be able to teach everything?", fakes: ["Does the teacher be able to teach everything?", "Will the teacher can to teach everything?"] },
        { tr: "Hiçbir şeye dokunmadık.", correct: "We didn't touch anything.", fakes: ["We didn't touched anything.", "We wasn't touch anything."] },
        { tr: "Bir şey alabilir miyim?", correct: "Can I take something?", fakes: ["Do I take something?", "Can to I take something?"] },
        { tr: "Öğrenci kitabı bitirebilecek mi?", correct: "Will the student be able to finish the book?", fakes: ["Do the student be able to finish the book?", "Will the student can finish the book?"] },
        { tr: "Biri parayı sayabildi mi?", correct: "Could somebody count the money?", fakes: ["Can somebody counted the money?", "Could to somebody count the money?"] },
        { tr: "Hiç kimse kutuyu açamayacak.", correct: "Nobody will be able to open the box.", fakes: ["Anybody will be able to open the box.", "Nobody don't be able to open the box."] },
        { tr: "Hemşire kan alabilir mi?", correct: "Can the nurse take blood?", fakes: ["Do the nurse take blood?", "Is the nurse take blood?"] },
        { tr: "Polis trafiği durdurabildi mi?", correct: "Could the police stop the traffic?", fakes: ["Can the police stopped the traffic?", "Could the police to stop the traffic?"] },
        { tr: "Herkes mesaj gönderebilir.", correct: "Everybody can send a message.", fakes: ["Everybody can to send a message.", "All body can send a message."] },
        { tr: "Pilot kapıyı kapatamadı.", correct: "The pilot couldn't close the door.", fakes: ["The pilot didn't could close the door.", "The pilot wasn't close the door."] },
        { tr: "Öğretmen bir şey alacak mı?", correct: "Will the teacher buy something?", fakes: ["Do the teacher buy something?", "Is the teacher buy something?"] },
        { tr: "Hiç kimse bilgisayara dokunamaz.", correct: "Nobody can touch the computer.", fakes: ["Anybody can touch the computer.", "Nobody don't can touch the computer."] },
        { tr: "Öğrenci ödevi verebilecek mi?", correct: "Will the student be able to give the homework?", fakes: ["Do the student be able to give the homework?", "Will the student can to give the homework?"] }
    ],
    lesson6: [
        { tr: "Öğrenciler parayı saymak zorunda mı?", correct: "Do the students have to count the money?", fakes: ["Are the students have to count the money?", "Does the students have to count the money?"] },
        { tr: "Biri kapıyı açmak zorunda kaldı mı?", correct: "Did somebody have to open the door?", fakes: ["Was somebody have to open the door?", "Did anybody have to open the door?"] },
        { tr: "Hemşireler makineyi tamir etmek zorunda değil.", correct: "The nurses don't have to repair the machine.", fakes: ["The nurses haven't to repair the machine.", "The nurses aren't have to repair the machine."] },
        { tr: "Herkes bilet almak zorunda kalacak mı?", correct: "Will everybody have to buy tickets?", fakes: ["Do everybody have to buy tickets?", "Are everybody have to buy tickets?"] },
        { tr: "Hiç kimse arabayı satmak zorunda kalmadı.", correct: "Nobody had to sell the car.", fakes: ["Anybody had to sell the car.", "Nobody didn't have to sell the car."] },
        { tr: "Polis birini göndermek zorunda kaldı mı?", correct: "Did the police have to send somebody?", fakes: ["Was the police have to send somebody?", "Did the police had to send somebody?"] },
        { tr: "Pilotlar uçağı uçurmak zorunda kalmadı.", correct: "The pilots didn't have to fly the plane.", fakes: ["The pilots hadn't to fly the plane.", "The pilots wasn't have to fly the plane."] },
        { tr: "Öğretmenler her şeyi öğretmek zorunda kalacak mı?", correct: "Will the teachers have to teach everything?", fakes: ["Do the teachers have to teach everything?", "Are the teachers have to teach everything?"] },
        { tr: "Hiçbir şeye dokunmak zorunda kalmadık.", correct: "We didn't have to touch anything.", fakes: ["We hadn't to touch anything.", "We wasn't have to touch anything."] },
        { tr: "Bir şey almak zorunda mıyım?", correct: "Do I have to take something?", fakes: ["Am I have to take something?", "Have I to take something?"] },
        { tr: "Öğrenciler kitabı bitirmek zorunda kalacak mı?", correct: "Will the students have to finish the book?", fakes: ["Do the students have to finish the book?", "Are the students have to finish the book?"] },
        { tr: "Biri parayı saymak zorunda kaldı mı?", correct: "Did somebody have to count the money?", fakes: ["Was somebody have to count the money?", "Did anybody have to count the money?"] },
        { tr: "Hiç kimse kutuyu açmak zorunda kalmayacak.", correct: "Nobody will have to open the box.", fakes: ["Anybody will have to open the box.", "Nobody won't have to open the box."] },
        { tr: "Hemşireler kan almak zorunda kaldı mı?", correct: "Did the nurses have to take blood?", fakes: ["Was the nurses have to take blood?", "Did the nurses had to take blood?"] },
        { tr: "Polis trafiği durdurmak zorunda kaldı mı?", correct: "Did the police have to stop the traffic?", fakes: ["Was the police have to stop the traffic?", "Did the police had to stop the traffic?"] },
        { tr: "Herkes mesaj göndermek zorunda kalacak.", correct: "Everybody will have to send a message.", fakes: ["All body will have to send a message.", "Everybody are have to send a message."] },
        { tr: "Pilotlar kapıyı kapatmak zorunda değildi.", correct: "The pilots didn't have to close the door.", fakes: ["The pilots hadn't to close the door.", "The pilots wasn't have to close the door."] },
        { tr: "Öğretmenler bir şey satın almak zorunda kalacak mı?", correct: "Will the teachers have to buy something?", fakes: ["Do the teachers have to buy something?", "Are the teachers have to buy something?"] },
        { tr: "Hiç kimse bilgisayara dokunmak zorunda kalmadı.", correct: "Nobody had to touch the computer.", fakes: ["Anybody had to touch the computer.", "Nobody didn't have to touch the computer."] },
        { tr: "Öğrenciler ödevi vermek zorunda mı?", correct: "Do the students have to give the homework?", fakes: ["Are the students have to give the homework?", "Does the students have to give the homework?"] }
    ],
    lesson7: [
        { tr: "Parası yoktu ama çantayı aldı.", correct: "She had no money, but she bought the bag.", fakes: ["She didn't had money, but she bought the bag.", "She has no money, but she bought the bag."] },
        { tr: "Yolda buz vardı, bu yüzden arabalar durmak zorunda kaldı.", correct: "There was ice on the road, so the cars had to stop.", fakes: ["It was ice on the road, so the cars had to stop.", "There was ice on the road, because the cars had to stop."] },
        { tr: "Öğrenciler çalışmadı, bu yüzden sınavı bitiremediler.", correct: "The students didn't study, so they finished nothing.", fakes: ["The students wasn't study, so they finished nothing.", "The students didn't studied, so they finished nothing."] },
        { tr: "Kapıyı açmak zorundasın, yoksa giremeyiz.", correct: "You have to open the door, otherwise we can enter nowhere.", fakes: ["You having to open the door, otherwise we can enter nowhere.", "You must to open the door, otherwise we can enter nowhere."] },
        { tr: "Pilot motoru kontrol etti ve uçağı uçurdu.", correct: "The pilot checked the engine and he flew the plane.", fakes: ["The pilot checking the engine and he flew the plane.", "The pilot check the engine and he flew the plane."] },
        { tr: "Arabayı satacak mısın yoksa tamir edecek misin?", correct: "Will you sell the car, or will you repair it?", fakes: ["Are you sell the car, or will you repair it?", "Do you sell the car, or will you repair it?"] },
        { tr: "Kimse kazayı görmedi ama herkes sesi duydu.", correct: "Nobody saw the accident, but everybody heard the noise.", fakes: ["Anybody saw the accident, but everybody heard the noise.", "Nobody didn't see the accident, but everybody heard the noise."] },
        { tr: "Anahtarım yoktu, bu yüzden kapıyı açamadım.", correct: "I had no key, so I could open nothing.", fakes: ["I didn't had key, so I could open nothing.", "I have no key, so I could open nothing."] },
        { tr: "Doktorlar gelmek zorunda, yoksa hasta ölecek.", correct: "The doctors have to come, otherwise the patient will die.", fakes: ["The doctors has to come, otherwise the patient will die.", "The doctors having to come, otherwise the patient will die."] },
        { tr: "Önce parayı sayarsın, sonra bileti verirsin.", correct: "First you count the money, then you give the ticket.", fakes: ["First you are count the money, then you give the ticket.", "First you counted the money, then you give the ticket."] },
        { tr: "Hemşireler meşguldü ama kan alabildiler.", correct: "The nurses were busy, but they could take blood.", fakes: ["The nurses was busy, but they could take blood.", "The nurses were busy, but they can to take blood."] },
        { tr: "Bir şey yemedik ve kimse su içmedi.", correct: "We ate nothing, and nobody drank water.", fakes: ["We didn't eat nothing, and nobody drank water.", "We ate anything, and nobody drank water."] },
        { tr: "Polis trafiği durdurdu, sonra ambulansı aradı.", correct: "The police stopped the traffic, then called the ambulance.", fakes: ["The police stopping the traffic, then called the ambulance.", "The police stop the traffic, then called the ambulance."] },
        { tr: "Öğrenciler dinlemek zorunda, yoksa öğrenemezler.", correct: "The students have to listen, otherwise they learn nothing.", fakes: ["The students has to listen, otherwise they learn nothing.", "The students having to listen, otherwise they learn nothing."] },
        { tr: "Modemi tamir edebiliriz veya yenisini alabiliriz.", correct: "We can repair the modem, or we can buy a new one.", fakes: ["We could to repair the modem, or we can buy a new one.", "We can repairing the modem, or we can buy a new one."] },
        { tr: "Toplantıda kimse yoktu, bu yüzden beklemek zorunda kaldık.", correct: "There was nobody in the meeting, so we had to wait.", fakes: ["There was anybody in the meeting, so we had to wait.", "It was nobody in the meeting, so we had to wait."] },
        { tr: "Öğretmen kitabı okudu ve soruyu sordu.", correct: "The teacher read the book and asked the question.", fakes: ["The teacher reading the book and asked the question.", "The teacher was read the book and asked the question."] },
        { tr: "Herkes gelmek zorunda mı, yoksa evde kalabilirler mi?", correct: "Will everybody have to come, or can they stay at home?", fakes: ["Do everybody have to come, or can they stay at home?", "Are everybody have to come, or can they stay at home?"] },
        { tr: "Işık yoktu, bu yüzden bir şey göremedim.", correct: "There was no light, so I saw nothing.", fakes: ["It was no light, so I saw nothing.", "There was not light, so I saw nothing."] },
        { tr: "Şifreyi değiştirecekler ama bize söylemeyecekler.", correct: "They will change the password, but they will tell us nothing.", fakes: ["They are change the password, but they will tell us nothing.", "They do change the password, but they will tell us nothing."] }
    ],
    lesson8: [
        { tr: "Çantayı almalısın.", correct: "You should buy the bag.", fakes: ["You should to buy the bag.", "You must to buy the bag."] },
        { tr: "Arabalar durmalıydı.", correct: "The cars should have stopped.", fakes: ["The cars should had stopped.", "The cars should to have stopped."] },
        { tr: "Öğrenciler çalışmalı.", correct: "The students should study.", fakes: ["The students should to study.", "The students must to study."] },
        { tr: "Kapıyı açmamalısın.", correct: "You shouldn't open the door.", fakes: ["You don't should open the door.", "You shouldn't to open the door."] },
        { tr: "Pilot motoru kontrol etmeliydi.", correct: "The pilot should have checked the engine.", fakes: ["The pilot should had checked the engine.", "The pilot should to have checked the engine."] },
        { tr: "Arabayı tamir etmeli miyim?", correct: "Should I repair the car?", fakes: ["Do I should repair the car?", "Am I should repair the car?"] },
        { tr: "Herkes sesi duymalıydı.", correct: "Everybody should have heard the noise.", fakes: ["Everybody should had heard the noise.", "Everybody should to have heard the noise."] },
        { tr: "Anahtarı almalıydın.", correct: "You should have taken the key.", fakes: ["You should had taken the key.", "You should to have taken the key."] },
        { tr: "Doktor gelmeli.", correct: "The doctor should come.", fakes: ["The doctor should to come.", "The doctor must to come."] },
        { tr: "Parayı saymamalıydın.", correct: "You shouldn't have counted the money.", fakes: ["You shouldn't had counted the money.", "You shouldn't to have counted the money."] },
        { tr: "Hemşire kan almalı.", correct: "The nurse should take blood.", fakes: ["The nurse should to take blood.", "The nurse must to take blood."] },
        { tr: "Su içmeli miyiz?", correct: "Should we drink water?", fakes: ["Do we should drink water?", "Are we should drink water?"] },
        { tr: "Polis ambulansı aramalıydı.", correct: "The police should have called the ambulance.", fakes: ["The police should had called the ambulance.", "The police should to have called the ambulance."] },
        { tr: "Öğrenciler dinlemeli.", correct: "The students should listen.", fakes: ["The students should to listen.", "The students must to listen."] },
        { tr: "Modemi değiştirmeliyiz.", correct: "We should change the modem.", fakes: ["We should to change the modem.", "We must to change the modem."] },
        { tr: "Toplantıda beklemeli miydik?", correct: "Should we have waited in the meeting?", fakes: ["Did we should have waited in the meeting?", "Were we should have waited in the meeting?"] },
        { tr: "Öğretmen kitabı okumalı.", correct: "The teacher should read the book.", fakes: ["The teacher should to read the book.", "The teacher must to read the book."] },
        { tr: "Kahvaltıyı iptal etmeli miyiz?", correct: "Should we cancel the breakfast?", fakes: ["Do we should cancel the breakfast?", "Are we should cancel the breakfast?"] },
        { tr: "Şifreyi söylememeliydin.", correct: "You shouldn't have told the password.", fakes: ["You shouldn't had told the password.", "You shouldn't to have told the password."] },
        { tr: "Işığı görmelisin.", correct: "You should see the light.", fakes: ["You should to see the light.", "You must to see the light."] }
    ],
    lesson9: [
        { tr: "O güzel. (Şu an)", correct: "She is beautiful.", fakes: ["She beautiful.", "She are beautiful."] },
        { tr: "Biz zengindik.", correct: "We were rich.", fakes: ["We was rich.", "We are rich."] },
        { tr: "Onlar aç olacaklar.", correct: "They will be hungry.", fakes: ["They are be hungry.", "They will hungry."] },
        { tr: "Ben yorgunum.", correct: "I am tired.", fakes: ["I is tired.", "I tired."] },
        { tr: "O hazır değil.", correct: "He is not ready.", fakes: ["He don't ready.", "He not ready."] },
        { tr: "Sen mutlu musun?", correct: "Are you happy?", fakes: ["Do you happy?", "You are happy?"] },
        { tr: "Hava soğuktu.", correct: "It was cold.", fakes: ["It were cold.", "It cold."] },
        { tr: "Onlar evde değildi.", correct: "They were not at home.", fakes: ["They was not at home.", "They didn't at home."] },
        { tr: "O hasta mıydı?", correct: "Was she sick?", fakes: ["Did she sick?", "Were she sick?"] },
        { tr: "Sen ünlü olacaksın.", correct: "You will be famous.", fakes: ["You are be famous.", "You will famous."] },
        { tr: "O geç kalmayacak. (O geç olmayacak)", correct: "He won't be late.", fakes: ["He don't be late.", "He isn't be late."] },
        { tr: "Yemek sıcak olacak mı?", correct: "Will the food be hot?", fakes: ["Does the food be hot?", "Is the food be hot?"] },
        { tr: "Araba hızlıdır.", correct: "The car is fast.", fakes: ["The car are fast.", "The car fast."] },
        { tr: "Arkadaşlarım meşgul değil.", correct: "My friends aren't busy.", fakes: ["My friends isn't busy.", "My friends don't busy."] },
        { tr: "Bu zor mu?", correct: "Is this difficult?", fakes: ["Does this difficult?", "Are this difficult?"] },
        { tr: "Film sıkıcıydı.", correct: "The movie was boring.", fakes: ["The movie were boring.", "The movie did boring."] },
        { tr: "Biz kızgın değildik.", correct: "We weren't angry.", fakes: ["We wasn't angry.", "We didn't angry."] },
        { tr: "Sorular kolay mıydı?", correct: "Were the questions easy?", fakes: ["Was the questions easy?", "Did the questions easy?"] },
        { tr: "Hava güzel olacak.", correct: "The weather will be nice.", fakes: ["The weather is be nice.", "The weather will nice."] },
        { tr: "Yarın müsait olacak mısın?", correct: "Will you be free tomorrow?", fakes: ["Do you be free tomorrow?", "Are you be free tomorrow?"] }
    ],
    lesson10a: [
        { tr: "Bu kutu diğerinden daha büyük.", correct: "This box is bigger than the other one.", fakes: ["This box bigger than the other one.", "This box are bigger than the other one."] },
        { tr: "Bu, evdeki en küçük oda.", correct: "This is the smallest room in the house.", fakes: ["This the smallest room in the house.", "This are the smallest room in the house."] },
        { tr: "Kırmızı araba mavi arabadan daha pahalı.", correct: "The red car is more expensive than the blue car.", fakes: ["The red car are more expensive than the blue car.", "The red car more expensive than the blue car."] },
        { tr: "O, sınıftaki en çalışkan öğrenci.", correct: "She is the most hardworking student in the class.", fakes: ["She the most hardworking student in the class.", "She are the most hardworking student in the class."] },
        { tr: "Ali, Ahmet kadar yaşlı.", correct: "Ali is as old as Ahmet.", fakes: ["Ali as old as Ahmet.", "Ali are as old as Ahmet."] },
        { tr: "Çay çok sıcak.", correct: "The tea is very hot.", fakes: ["The tea are very hot.", "The tea very hot."] },
        { tr: "Çorba aşırı tuzlu (içilemeyecek kadar).", correct: "The soup is too salty.", fakes: ["The soup too salty.", "The soup are too salty."] },
        { tr: "Film bayağı ilginçti.", correct: "The movie was quite interesting.", fakes: ["The movie were quite interesting.", "The movie is quite interesting."] },
        { tr: "Uçak trenden daha hızlıdır.", correct: "A plane is faster than a train.", fakes: ["A plane faster than a train.", "A plane are faster than a train."] },
        { tr: "Çita en hızlı hayvandır.", correct: "The cheetah is the fastest animal.", fakes: ["The cheetah the fastest animal.", "The cheetah are the fastest animal."] },
        { tr: "Sağlık paradan daha önemlidir.", correct: "Health is more important than money.", fakes: ["Health are more important than money.", "Health more important than money."] },
        { tr: "Bu en tehlikeli yol.", correct: "This is the most dangerous road.", fakes: ["This the most dangerous road.", "This are the most dangerous road."] },
        { tr: "Buz kar kadar soğuktur.", correct: "Ice is as cold as snow.", fakes: ["Ice as cold as snow.", "Ice are as cold as snow."] },
        { tr: "Gitmek için çok geç (aşırı geç).", correct: "It is too late to go.", fakes: ["It are too late to go.", "It too late to go."] },
        { tr: "Bugün çok yorgunum.", correct: "I am very tired today.", fakes: ["I am very tired today. isn't it?", "I am very tired today."] },
        { tr: "Odan oldukça temiz.", correct: "Your room is quite clean.", fakes: ["Your room quite clean.", "Your room are quite clean."] },
        { tr: "Yaz kıştan daha sıcaktır.", correct: "Summer is hotter than winter.", fakes: ["Summer hotter than winter.", "Summer are hotter than winter."] },
        { tr: "Bu koltuk daha rahat.", correct: "This sofa is more comfortable.", fakes: ["This sofa more comfortable.", "This sofa are more comfortable."] },
        { tr: "O kasabadaki en zengin adam.", correct: "He is the richest man in town.", fakes: ["He are the richest man in town.", "He the richest man in town."] },
        { tr: "Bu soru benim için fazla (aşırı) zor.", correct: "This question is too hard for me.", fakes: ["This question are too hard for me.", "This question too hard for me."] }
    ]
};

// ==========================================
// 2. APPLICATION STATE & DOM SETUP
// ==========================================
let currentLesson = [];
let currentQuestionIndex = 0;
let score = 0;

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

lessonSelect.innerHTML = '';
Object.keys(lessonsData).forEach(key => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = key.replace('lesson', 'Lesson ').replace('a', 'A');
    lessonSelect.appendChild(option);
});

// ==========================================
// 3. CORE LOGIC (Fixed Audio Engine with Failsafe)
// ==========================================

const audioPlayer = new Audio();

function playTurkishAudio(text) {
    // 1. Reset any playing audio
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    
    // 2. Use the "gtx" developer endpoint to bypass browser blocks
    const encodedText = encodeURIComponent(text);
    const googleTranslateUrl = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=tr&q=${encodedText}`;
    
    audioPlayer.src = googleTranslateUrl;
    
    // 3. Play the audio, but catch ANY errors (like Chrome blocking it)
    audioPlayer.play().catch(error => {
        console.warn("Google Audio Blocked, using Fallback System:", error);
        playFallbackAudio(text);
    });
}

// 4. The Safety Net: If the network audio fails, play the built-in system voice immediately
function playFallbackAudio(text) {
    if (!('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel(); // Clear any invisible jams
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tr-TR'; 
    utterance.rate = 0.9;
    
    const voices = window.speechSynthesis.getVoices();
    const turkishVoice = voices.find(voice => voice.lang.includes('tr'));
    if (turkishVoice) {
        utterance.voice = turkishVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// Load voices into memory just in case the fallback is needed
window.speechSynthesis.onvoiceschanged = function() {
    window.speechSynthesis.getVoices();
};

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
    
    playAudioBtn.onclick = () => playTurkishAudio(question.tr);
    
    const allOptions = [question.correct, ...question.fakes];
    shuffleArray(allOptions);
    
    optionsContainer.innerHTML = '';
    nextBtn.classList.add('hidden');
    
    allOptions.forEach(optionText => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = optionText;
        
        btn.onclick = () => checkAnswer(btn, optionText === question.correct, question.correct);
        optionsContainer.appendChild(btn);
    });
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
    } else {
        showCompletion();
    }
}

function showCompletion() {
    quizArea.classList.add('hidden');
    completionArea.classList.remove('hidden');
    finalScoreDisplay.innerText = `${score} / ${currentLesson.length}`;
}

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
