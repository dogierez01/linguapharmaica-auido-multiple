// ==========================================
// 1. LESSON DATA (All 20 Lessons)
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
    ],
    lesson10b: [
        { tr: "Yumurta sevmiyorum.", correct: "I don't like eggs.", fakes: ["I doesn't like eggs.", "I aren't like eggs."] },
        { tr: "Köpeğimi gezdiriyorum.", correct: "I am walking my dog.", fakes: ["I am walking my dog. isn't it?", "I am walking my dog."] },
        { tr: "Doktor kan testini inceliyor.", correct: "The doctor is examining the blood test.", fakes: ["The doctor are examining the blood test.", "The doctor examining the blood test."] },
        { tr: "Bankalar eski para kabul etmiyor.", correct: "Banks don't accept old money.", fakes: ["Banks aren't accept old money.", "Banks doesn't accept old money."] },
        { tr: "Şoför arabayı yıkıyor.", correct: "The driver is washing the car.", fakes: ["The driver washing the car.", "The driver are washing the car."] },
        { tr: "Modemi açmıyorsunuz. (Assuming typo for \"Modeme\")", correct: "You aren't turning on the modem.", fakes: ["You aren't turning on a modem.", "You aren't turning on the modem. isn't it?"] },
        { tr: "Devlet interneti kontrol ediyor.", correct: "The government controls the internet.", fakes: ["The government controls a internet.", "The government controls the internet. isn't it?"] },
        { tr: "Burada mı yaşıyorsunuz?", correct: "Do you live here?", fakes: ["Are you live here?", "Does you live here?"] },
        { tr: "Doktorlar kan almıyor.", correct: "Doctors don't take blood.", fakes: ["Doctors doesn't take blood.", "Doctors aren't take blood."] },
        { tr: "Pilot uçağı kontrol ediyor mu?", correct: "Is the pilot checking the plane?", fakes: ["Is the pilot checking the plane isn't it?", "Is a pilot checking a plane?"] },
        { tr: "Bu oteli tercih etmiyoruz.", correct: "We don't prefer this hotel.", fakes: ["We doesn't prefer this hotel.", "We aren't prefer this hotel."] },
        { tr: "Partiye geliyorlar mı?", correct: "Are they coming to the party?", fakes: ["Are they coming to a party?", "Are they coming to the party isn't it?"] },
        { tr: "Öğretmen projektörü hazırlıyor.", correct: "The teacher is preparing the projector.", fakes: ["The teacher are preparing the projector.", "The teacher preparing the projector."] },
        { tr: "Evde balık pişirmiyorlar.", correct: "They don't cook fish at home.", fakes: ["They doesn't cook fish at home.", "They aren't cook fish at home."] }
    ],
    lesson11: [
        { tr: "Bankacı parayı saymıştı.", correct: "The banker had counted the money.", fakes: ["The banker have counted the money.", "The banker was counted the money."] },
        { tr: "Şoför arabayı park ediyordu.", correct: "The driver was parking the car.", fakes: ["The driver is parking the car.", "The driver were parking the car."] },
        { tr: "Hemşire odayı temizlemişti.", correct: "The nurse had cleaned the room.", fakes: ["The nurse have cleaned the room.", "The nurse was cleaned the room."] },
        { tr: "Öğrenci kitap aldı.", correct: "The student bought a book.", fakes: ["The student bought a book. isn't it?", "The student bought a book."] },
        { tr: "Doktor hastayı arardı.", correct: "The doctor used to call the patient.", fakes: ["The doctor was used to call the patient.", "The doctor use to call the patient."] },
        { tr: "Pilot uçağı kontrol etti.", correct: "The pilot checked the plane.", fakes: ["The pilot checked the plane. isn't it?", "The pilot checked a plane."] },
        { tr: "Öğretmenler sınavı hazırlıyordu.", correct: "The teachers were preparing the exam.", fakes: ["The teachers are preparing the exam.", "The teachers was preparing the exam."] },
        { tr: "Polis trafiği durdurmuştu.", correct: "The police had stopped the traffic.", fakes: ["The police have stopped the traffic.", "The police was stopped the traffic."] },
        { tr: "Hemşire kan aldı.", correct: "The nurse took blood.", fakes: ["The nurse took blood. isn't it?", "The nurse took blood."] },
        { tr: "Öğrenciler defter getirirdi.", correct: "The students used to bring notebooks.", fakes: ["The students use to bring notebooks.", "The students was used to bring notebooks."] },
        { tr: "Pilot motoru kontrol ediyordu.", correct: "The pilot was checking the engine.", fakes: ["The pilot were checking the engine.", "The pilot is checking the engine."] },
        { tr: "Teknisyen modemi tamir etmişti.", correct: "The technician had repaired the modem.", fakes: ["The technician was repaired the modem.", "The technician have repaired the modem."] },
        { tr: "Biz bu oteli tercih ederdik.", correct: "We used to prefer this hotel.", fakes: ["We was used to prefer this hotel.", "We use to prefer this hotel."] },
        { tr: "Şoför arabayı yıkadı.", correct: "The driver washed the car.", fakes: ["The driver washed a car.", "The driver washed the car. isn't it?"] },
        { tr: "Marketler eski para kabul ederdi.", correct: "Supermarkets used to accept old money.", fakes: ["Supermarkets was used to accept old money.", "Supermarkets use to accept old money."] },
        { tr: "Öğrenciler öğretmeni dinliyordu.", correct: "The students were listening to the teacher.", fakes: ["The students are listening to the teacher.", "The students was listening to the teacher."] },
        { tr: "Sistem şifreyi değiştirmişti.", correct: "The system had changed the password.", fakes: ["The system have changed the password.", "The system was changed the password."] },
        { tr: "Doktorlar kan testini inceledi.", correct: "The doctors examined the blood test.", fakes: ["The doctors examined a blood test.", "The doctors examined the blood test. isn't it?"] },
        { tr: "Hemşire kapıyı kilitliyordu.", correct: "The nurse was locking the door.", fakes: ["The nurse is locking the door.", "The nurse were locking the door."] },
        { tr: "Öğretmen kitabı okumuştu.", correct: "The teacher had read the book.", fakes: ["The teacher have read the book.", "The teacher was read the book."] }
    ],
    lesson12: [
        { tr: "Öğrenciler çalışmadıklarından dolayı sınavı bitiremediler.", correct: "The students couldn't finish the exam because they didn't study.", fakes: ["The students couldn't finish the exam because they wasn't study.", "The students couldn't finish the exam because they doesn't study."] },
        { tr: "Her yerde buz olmasına rağmen pilot uçağı indirebildi.", correct: "The pilot could land the plane although there was ice everywhere.", fakes: ["The pilot could land the plane although there were ice everywhere.", "The pilot could to land the plane although there was ice everywhere."] },
        { tr: "Hemşireyi aramadan önce doktor hastayı muayene etmişti.", correct: "The doctor had examined the patient before he called the nurse.", fakes: ["The doctor was examined the patient before he called the nurse.", "The doctor have examined the patient before he called the nurse."] },
        { tr: "Öğrenciler kitapları aldıktan sonra öğretmen parayı saydı.", correct: "The teacher counted the money after the students bought the books.", fakes: ["The teacher counted the money after the students bought the books. isn't it?", "The teacher counted a money after a students bought a books."] },
        { tr: "Doktor geldiğinde hemşire odayı temizliyordu.", correct: "The nurse was cleaning the room when the doctor came.", fakes: ["The nurse were cleaning the room when the doctor came.", "The nurse is cleaning the room when the doctor came."] },
        { tr: "Ambulans beklerken polis trafiği durduruyordu.", correct: "The police were stopping the traffic while the ambulance was waiting.", fakes: ["The police were stopping the traffic while the ambulance is waiting.", "The police was stopping the traffic while the ambulance was waiting."] },
        { tr: "Çok yorgun olduklarından dolayı doktorlar dinlenmek zorundalar.", correct: "The doctors have to rest because they are very tired.", fakes: ["The doctors having to rest because they are very tired.", "The doctors have to rest because they is very tired."] },
        { tr: "Zengin olmasına rağmen bankacı arabayı satmıştı.", correct: "The banker had sold the car although he was rich.", fakes: ["The banker have sold the car although he was rich.", "The banker had sold the car although he were rich."] },
        { tr: "Derse girmeden önce öğrenciler beklemek zorundaydı.", correct: "The students had to wait before they entered the lesson.", fakes: ["The students musted to wait before they entered the lesson.", "The students has to wait before they entered the lesson."] },
        { tr: "Uçuş bittikten sonra pilot uçağı park etti.", correct: "The pilot parked the plane after the flight finished.", fakes: ["The pilot parked a plane after a flight finished.", "The pilot parked the plane after the flight finished. isn't it?"] },
        { tr: "Öğrenciler defterleri getirmediğinde öğretmen kızgındı.", correct: "The teacher was angry when the students did not bring the notebooks.", fakes: ["The teacher were angry when the students did not bring the notebooks.", "The teacher is angry when the students did not bring the notebooks."] },
        { tr: "Öğretmen sınavı hazırlarken öğrenci kitap okuyordu.", correct: "The student was reading a book while the teacher was preparing the exam.", fakes: ["The student were reading a book while the teacher were preparing the exam.", "The student is reading a book while the teacher is preparing the exam."] },
        { tr: "İnternet kötü olduğundan dolayı modemi tamir etmek zorundaydım.", correct: "I had to repair the modem because the internet was bad.", fakes: ["I had to repair the modem because the internet is bad.", "I has to repair the modem because the internet was bad."] },
        { tr: "Yağmur yağmasına rağmen şoför arabayı yıkadı.", correct: "The driver washed the car although it was raining.", fakes: ["The driver washed the car although it were raining.", "The driver washed the car although it is raining."] },
        { tr: "Doktor gelmeden önce hemşireler ilacı vermişti.", correct: "The nurses had given the medicine before the doctor arrived.", fakes: ["The nurses have given the medicine before the doctor arrived.", "The nurses was given the medicine before the doctor arrived."] },
        { tr: "Sistem bozulduktan sonra şifreyi değiştirdik.", correct: "We changed the password after the system broke.", fakes: ["We changed the password after the system broke. isn't it?", "We changed a password after a system broke."] },
        { tr: "Doktor onları aradığında hastalar bekliyordu.", correct: "The patients were waiting when the doctor called them.", fakes: ["The patients are waiting when the doctor called them.", "The patients was waiting when the doctor called them."] },
        { tr: "Doktorlar çalışırken polis hastaneyi aramalı.", correct: "The police should call the hospital while the doctors are working.", fakes: ["The police should call the hospital while the doctors are working. isn't it?", "The police should call the hospital while the doctors is working."] },
        { tr: "Hasta olduklarından dolayı soğuk su içmemeliler.", correct: "They should not drink cold water because they are sick.", fakes: ["They should not drink cold water because they are sick. isn't it?", "They should not drink cold water because they is sick."] },
        { tr: "Geç kalmasına rağmen pilot motoru kontrol etmişti.", correct: "The pilot had checked the engine although he was late.", fakes: ["The pilot have checked the engine although he was late.", "The pilot was checked the engine although he was late."] }
    ],
    lesson13: [
        { tr: "Geçen yıldan beri pilot uçağı kontrol etmemişti.", correct: "The pilot hadn't checked the plane since last year.", fakes: ["The pilot hadn't checked a plane since last year.", "The pilot hadn't checked the plane since last year. isn't it?"] },
        { tr: "Yoğun kanamaya rağmen doktor hastayı kurtarabildi.", correct: "The doctor could save the patient despite the heavy bleeding.", fakes: ["The doctor could to save the patient despite the heavy bleeding.", "The doctor can save the patient despite the heavy bleeding."] },
        { tr: "Kitabı okurken öğrenci hatayı bulabildi.", correct: "The student could find the mistake while reading the book.", fakes: ["The student can find the mistake while reading the book.", "The student could to find the mistake while reading the book."] },
        { tr: "Gece yarısında hemşire kapıyı kilitliyordu.", correct: "The nurse was locking the door at midnight.", fakes: ["The nurse is locking the door at midnight.", "The nurse were locking the door at midnight."] },
        { tr: "Toplantıdan sonra avukat parayı saydı.", correct: "The lawyer counted the money after the meeting.", fakes: ["The lawyer counted the money after the meeting. isn't it?", "The lawyer counted a money after a meeting."] },
        { tr: "Kötü internetten dolayı modemi tamir etmiştik.", correct: "We'd repaired the modem due to the bad internet.", fakes: ["We'd repaired a modem due to a bad internet.", "We'd repaired the modem due to the bad internet. isn't it?"] },
        { tr: "Dersten önce öğrenciler koridorda beklemek zorundaydı.", correct: "The students had to wait in the corridor before the lesson.", fakes: ["The students musted to wait in the corridor before the lesson.", "The students have to wait in the corridor before the lesson."] },
        { tr: "On Beş Mayıs'ta polis şifreyi değiştirmişti.", correct: "The police had changed the password on May 15th.", fakes: ["The police was changed the password on May 15th.", "The police have changed the password on May 15th."] },
        { tr: "Akşama kadar doktorlar hasta muayene ederdi.", correct: "The doctors used to examine patients until evening.", fakes: ["The doctors was used to examine patients until evening.", "The doctors use to examine patients until evening."] },
        { tr: "Kışın bankacı arabayı satmadı.", correct: "The banker didn't sell the car in winter.", fakes: ["The banker wasn't sell the car in winter.", "The banker didn't selled the car in winter."] },
        { tr: "Trafiğe rağmen şoför dikkatli olmalıydı.", correct: "The driver should've been careful despite the traffic.", fakes: ["The driver should've been careful despite a traffic.", "The driver should've been careful despite the traffic. isn't it?"] },
        { tr: "Arabayı park ederken şoför radyoyu kapattı.", correct: "The driver turned off the radio while parking the car.", fakes: ["The driver turned off a radio while parking a car.", "The driver turned off the radio while parking the car. isn't it?"] },
        { tr: "Fırtınadan dolayı pilotlar uçuşu iptal etmek zorunda kaldı.", correct: "The pilots had to cancel the flight due to the storm.", fakes: ["The pilots musted to cancel the flight due to the storm.", "The pilots has to cancel the flight due to the storm."] },
        { tr: "Pazartesi günü doktorlar çalışmak zorundaydı.", correct: "The doctors had to work on Monday.", fakes: ["The doctors musted to work on Monday.", "The doctors have to work on Monday."] },
        { tr: "Ameliyattan sonra hemşire odayı temizlemişti.", correct: "The nurse had cleaned the room after the surgery.", fakes: ["The nurse have cleaned the room after the surgery.", "The nurse was cleaned the room after the surgery."] },
        { tr: "Cuma gününe kadar polis hastanede beklemişti.", correct: "The police had waited in the hospital until Friday.", fakes: ["The police was waited in the hospital until Friday.", "The police have waited in the hospital until Friday."] },
        { tr: "Saat beşte öğretmen ödev verdi.", correct: "The teacher gave homework at five o'clock.", fakes: ["The teacher gave homework at five o'clock.", "The teacher gave homework at five o'clock. isn't it?"] },
        { tr: "İki bin yirmi yılında bankalar eski para kabul etmeliydi.", correct: "The banks should've accepted old money in 2020.", fakes: ["The banks should've accepted old money in 2020.", "The banks should've accepted old money in 2020. isn't it?"] },
        { tr: "Sabah saatlerinden beri öğretmen sınavları hazırlamıştı.", correct: "The teacher had prepared the exams since morning.", fakes: ["The teacher have prepared the exams since morning.", "The teacher was prepared the exams since morning."] }
    ],
    lesson14: [
        { tr: "Şoför arabayı hızlı bir şekilde park etti.", correct: "The driver parked the car in a fast way.", fakes: ["The driver parked a car in a fast way.", "The driver parked the car in a fast way. isn't it?"] },
        { tr: "Doktor kanı durdurarak hastayı kurtardı.", correct: "The doctor saved the patient by stopping the blood.", fakes: ["The doctor saved the patient by stopping the blood. isn't it?", "The doctor saved a patient by stopping a blood."] },
        { tr: "Hemşire hastayla dostane bir şekilde konuştu.", correct: "The nurse talked to the patient in a friendly way.", fakes: ["The nurse talked to the patient in a friendly way. isn't it?", "The nurse talked to a patient in a friendly way."] },
        { tr: "Öğretmen kitabı okuyarak hatayı buldu.", correct: "The teacher found the mistake by reading the book.", fakes: ["The teacher found the mistake by reading the book. isn't it?", "The teacher found a mistake by reading a book."] },
        { tr: "Öğrenciler sorulara aptalca bir şekilde cevap verdi.", correct: "The students answered the questions in a silly way.", fakes: ["The students answered a questions in a silly way.", "The students answered the questions in a silly way. isn't it?"] },
        { tr: "Anahtarı kullanarak kapıyı açabilirsin.", correct: "You can open the door by using the key.", fakes: ["You can to open the door by using the key.", "You is can open the door by using the key."] },
        { tr: "Öğretmen öğrencilere sert bir şekilde baktı.", correct: "The teacher looked at the students in a hard way.", fakes: ["The teacher looked at a students in a hard way.", "The teacher looked at the students in a hard way. isn't it?"] },
        { tr: "Bankacı parayı sessiz bir şekilde saydı.", correct: "The banker counted the money in a quiet way.", fakes: ["The banker counted the money in a quiet way. isn't it?", "The banker counted a money in a quiet way."] },
        { tr: "Bankacı müşteriyi arayarak problemi çözdü.", correct: "The banker solved the problem by calling the customer.", fakes: ["The banker solved a problem by calling a customer.", "The banker solved the problem by calling the customer. isn't it?"] },
        { tr: "Pilot motoru dikkatli bir şekilde kontrol etti.", correct: "The pilot checked the engine in a careful way.", fakes: ["The pilot checked the engine in a careful way. isn't it?", "The pilot checked a engine in a careful way."] },
        { tr: "Hemşire ilacı vererek hastaya yardım etti.", correct: "The nurse helped the patient by giving the medicine.", fakes: ["The nurse helped a patient by giving a medicine.", "The nurse helped the patient by giving the medicine. isn't it?"] },
        { tr: "Polis trafiği ani bir şekilde durdurdu.", correct: "The police stopped the traffic in a sudden way.", fakes: ["The police stopped the traffic in a sudden way. isn't it?", "The police stopped a traffic in a sudden way."] },
        { tr: "Pilot radarı kontrol ederek uçağı indirdi.", correct: "The pilot landed the plane by checking the radar.", fakes: ["The pilot landed a plane by checking a radar.", "The pilot landed the plane by checking the radar. isn't it?"] },
        { tr: "Doktor test sonuçlarını basit bir şekilde açıkladı.", correct: "The doctor explained the test results in a simple way.", fakes: ["The doctor explained the test results in a simple way. isn't it?", "The doctor explained a test results in a simple way."] },
        { tr: "Polis arabada bekleyerek hırsızı yakaladı.", correct: "The police caught the thief by waiting in the car.", fakes: ["The police caught a thief by waiting in a car.", "The police caught the thief by waiting in the car. isn't it?"] },
        { tr: "Avukat arabayı zekice bir şekilde sattı.", correct: "The lawyer sold the car in a clever way.", fakes: ["The lawyer sold a car in a clever way.", "The lawyer sold the car in a clever way. isn't it?"] },
        { tr: "Şoför soğuk su kullanarak arabayı yıkadı.", correct: "The driver washed the car by using cold water.", fakes: ["The driver washed a car by using cold water.", "The driver washed the car by using cold water. isn't it?"] },
        { tr: "Öğrenci kapıyı yavaş bir şekilde kapattı.", correct: "The student closed the door in a slow way.", fakes: ["The student closed the door in a slow way. isn't it?", "The student closed a door in a slow way."] },
        { tr: "Sistemi yeniden başlatarak şifreyi değiştirdik.", correct: "We changed the password by restarting the system.", fakes: ["We changed a password by restarting a system.", "We changed the password by restarting the system. isn't it?"] }
    ],
    lesson15: [
        { tr: "Sen interneti kullanabilesin diye şifreyi paylaşıyorum.", correct: "I am sharing the password so that you can use the internet.", fakes: ["I am sharing the password so that you can to use the internet.", "I am sharing the password so that you is can use the internet."] },
        { tr: "Öğrenciler sınava çalışmak için kitap aldı.", correct: "The students bought books in order to study for the exam.", fakes: ["The students bought books in order to study for the exam. isn't it?", "The students bought books in order to study for a exam."] },
        { tr: "Doktor kan testini inceleyebilsin diye hemşire masayı temizledi.", correct: "The nurse cleaned the table so that the doctor could examine the blood test.", fakes: ["The nurse cleaned the table so that the doctor could to examine the blood test.", "The nurse cleaned the table so that the doctor can examine the blood test."] },
        { tr: "Şoför arabayı satmak için yıkadı.", correct: "The driver washed the car in order to sell it.", fakes: ["The driver washed a car in order to sell it.", "The driver washed the car in order to sell it. isn't it?"] },
        { tr: "Öğrenci kitabı okuyabilsin diye öğretmen kitabı verdi.", correct: "The teacher gave the book so that the student could read it.", fakes: ["The teacher gave the book so that the student could to read it.", "The teacher gave the book so that the student can read it."] },
        { tr: "Polis ambulansa yardım etmek için trafiği durdurdu.", correct: "The police stopped the traffic in order to help the ambulance.", fakes: ["The police stopped the traffic in order to help the ambulance. isn't it?", "The police stopped a traffic in order to help a ambulance."] },
        { tr: "Biz kapıyı açabilelim diye şoför anahtarları getirdi.", correct: "The driver brought the keys so that we could open the door.", fakes: ["The driver brought the keys so that we could to open the door.", "The driver brought the keys so that we can open the door."] },
        { tr: "Bankacı parayı saymak için işte kaldı.", correct: "The banker stayed at work in order to count the money.", fakes: ["The banker stayed at work in order to count a money.", "The banker stayed at work in order to count the money. isn't it?"] },
        { tr: "Ambulans hızlı varabilsin diye devlet trafiği kontrol ediyor.", correct: "The government controls the traffic so that the ambulance can arrive fast.", fakes: ["The government controls the traffic so that the ambulance can to arrive fast.", "The government controls the traffic so that the ambulance is can arrive fast."] },
        { tr: "Pilot uçağı güvenli uçurmak için motoru kontrol etti.", correct: "The pilot checked the engine in order to fly the plane safely.", fakes: ["The pilot checked a engine in order to fly a plane safely.", "The pilot checked the engine in order to fly the plane safely. isn't it?"] },
        { tr: "Avukat evi alabilsin diye bankacı parayı gönderecek.", correct: "The banker will send the money so that the lawyer can buy the house.", fakes: ["The banker will send the money so that the lawyer is can buy the house.", "The banker will sending the money so that the lawyer can buy the house."] },
        { tr: "Doktor hemşireyle konuşmak için hastaneyi aradı.", correct: "The doctor called the hospital in order to talk to the nurse.", fakes: ["The doctor called a hospital in order to talk to a nurse.", "The doctor called the hospital in order to talk to the nurse. isn't it?"] },
        { tr: "Öğretmen sınava başlayabilsin diye öğrenciler bekliyor.", correct: "The students are waiting so that the teacher can start the exam.", fakes: ["The students are waiting so that the teacher is can start the exam.", "The students are waiting so that the teacher can to start the exam."] },
        { tr: "Avukat şifreyi değiştirmek için bilgisayarı kullandı.", correct: "The lawyer used the computer in order to change the password.", fakes: ["The lawyer used the computer in order to change the password. isn't it?", "The lawyer used a computer in order to change a password."] },
        { tr: "Teknisyen motoru tamir edebilsin diye pilot problemi açıkladı.", correct: "The pilot explained the problem so that the technician could fix the engine.", fakes: ["The pilot explained the problem so that the technician can fix the engine.", "The pilot explained the problem so that the technician could to fix the engine."] },
        { tr: "İnterneti kullanmak için modemi tamir ettik.", correct: "We repaired the modem in order to use the internet.", fakes: ["We repaired a modem in order to use a internet.", "We repaired the modem in order to use the internet. isn't it?"] },
        { tr: "Hasta iyileşebilsin diye doktor ilaç yazdı.", correct: "The doctor prescribed medicine so that the patient could get well.", fakes: ["The doctor prescribed medicine so that the patient could to get well.", "The doctor prescribed medicine so that the patient can get well."] },
        { tr: "Öğretmen dersi hazırlamak için kitabı okudu.", correct: "The teacher read the book in order to prepare the lesson.", fakes: ["The teacher read a book in order to prepare a lesson.", "The teacher read the book in order to prepare the lesson. isn't it?"] },
        { tr: "Şoför arabayı park edebilsin diye polis yolu açtı.", correct: "The police opened the road so that the driver could park the car.", fakes: ["The police opened the road so that the driver could to park the car.", "The police opened the road so that the driver can park the car."] },
        { tr: "Hemşire odayı temizlemek için kapıyı kilitledi.", correct: "The nurse locked the door in order to clean the room.", fakes: ["The nurse locked a door in order to clean a room.", "The nurse locked the door in order to clean the room. isn't it?"] }
    ],
    lesson16: [
        { tr: "Çok çalıştığından dolayı hemşire yoruluyor.", correct: "The nurse is getting tired because she works a lot.", fakes: ["The nurse getting tired because she works a lot.", "The nurse are getting tired because she works a lot."] },
        { tr: "Parayı kaybettiğinde avukat üzüldü.", correct: "The lawyer got sad when he lost the money.", fakes: ["The lawyer got sad when he lost a money.", "The lawyer got sad when he lost the money. isn't it?"] },
        { tr: "Arabayı sattıktan sonra bankacı zenginleşti.", correct: "The banker got rich after he sold the car.", fakes: ["The banker got rich after he sold a car.", "The banker got rich after he sold the car. isn't it?"] },
        { tr: "Hava soğuyor, bu yüzden pilot ceket giyiyor.", correct: "The weather is getting cold, so the pilot is wearing a jacket.", fakes: ["The weather getting cold, so the pilot wearing a jacket.", "The weather are getting cold, so the pilot are wearing a jacket."] },
        { tr: "Öğrenciler çalışmadığı için öğretmen sinirlendi.", correct: "The teacher got angry because the students didn't study.", fakes: ["The teacher got angry because the students doesn't study.", "The teacher got angry because the students wasn't study."] },
        { tr: "Bütün gün araba sürdüğünde şoför acıkır.", correct: "The driver gets hungry when he drives all day.", fakes: ["The driver gets hungry when he drives all day. isn't it?", "The driver gets hungry when he drives all day."] },
        { tr: "Hastane soğuk olduğu için doktor hastalandı.", correct: "The doctor got sick because the hospital was cold.", fakes: ["The doctor got sick because the hospital were cold.", "The doctor got sick because the hospital is cold."] },
        { tr: "Çok fazla yediğinden dolayı köpek şişmanlıyor.", correct: "The dog is getting fat because it eats too much.", fakes: ["The dog are getting fat because it eats too much.", "The dog getting fat because it eats too much."] },
        { tr: "Sistem bozulduğunda patron epey çılgınlaştı.", correct: "The boss got quite crazy when the system broke.", fakes: ["The boss got quite crazy when a system broke.", "The boss got quite crazy when the system broke. isn't it?"] },
        { tr: "Beklerken polis susadı.", correct: "The police got thirsty while they were waiting.", fakes: ["The police got thirsty while they are waiting.", "The police got thirsty while they was waiting."] },
        { tr: "Ders uzun olduğu için öğrenciler sıkılıyor.", correct: "The students are getting bored because the lesson is long.", fakes: ["The students are getting bored because the lesson are long.", "The students is getting bored because the lesson is long."] },
        { tr: "Hemşire ilacı verdikten sonra hasta iyileşti.", correct: "The patient got better after the nurse gave the medicine.", fakes: ["The patient got better after a nurse gave a medicine.", "The patient got better after the nurse gave the medicine. isn't it?"] },
        { tr: "Geç kalıyoruz, bu yüzden şoför hızlı sürüyor.", correct: "We are getting late, so the driver is driving fast.", fakes: ["We are getting late, so the driver driving fast.", "We is getting late, so the driver is driving fast."] },
        { tr: "Yağmur yağdığında araba kirlenir.", correct: "The car gets dirty when it rains.", fakes: ["The car gets dirty when it rains. isn't it?", "The car gets dirty when it rains."] },
        { tr: "Kumar oynadığı için adam fakirleşiyor.", correct: "The man is getting poor because he gambles.", fakes: ["The man are getting poor because he gambles.", "The man getting poor because he gambles."] },
        { tr: "Sınava girmeden önce öğrenciler heyecanlanır.", correct: "The students get nervous before they take the exam.", fakes: ["The students get nervous before they take the exam. isn't it?", "The students get nervous before they take a exam."] },
        { tr: "Ders başlamadan önce öğretmen hazırlandı.", correct: "The teacher got ready before the lesson started.", fakes: ["The teacher got ready before a lesson started.", "The teacher got ready before the lesson started. isn't it?"] },
        { tr: "Hava kararıyor, bu yüzden pilot radarı kontrol ediyor.", correct: "It is getting dark, so the pilot is checking the radar.", fakes: ["It are getting dark, so the pilot are checking the radar.", "It getting dark, so the pilot checking the radar."] },
        { tr: "İnternet kötüleşiyor, bu yüzden modemi tamir etmeliyiz.", correct: "The internet is getting bad, so we must repair the modem.", fakes: ["The internet are getting bad, so we must repair the modem.", "The internet getting bad, so we must repair the modem."] },
        { tr: "Yıllarca çalıştıktan sonra doktor yaşlandı.", correct: "The doctor got old after he worked for many years.", fakes: ["The doctor got old after he worked for many years.", "The doctor got old after he worked for many years. isn't it?"] }
    ],
    lesson17: [
        { tr: "Kimse avukatın arabayı neden sattığını anlayamadı.", correct: "Nobody could understand why the lawyer sold the car.", fakes: ["Nobody can understand why the lawyer sold the car.", "Nobody could to understand why the lawyer sold the car."] },
        { tr: "Onların partiye gelip gelmeyeceğini bilmiyorum.", correct: "I don't know if they will come to the party.", fakes: ["I don't know if they are going come to the party.", "I don't know if they will coming to the party."] },
        { tr: "Onun arabasını değiştirdiğini öğrendik.", correct: "We learned that she changed her car.", fakes: ["We learned that she changed her car. isn't it?", "We learned that she changed her car."] },
        { tr: "Modemi nasıl açtıklarını öğreneceğiz.", correct: "We will learn how they open the modem.", fakes: ["We will to learn how they open the modem.", "We are going learn how they open the modem."] },
        { tr: "Hemşire, hastanın su isteyip istemediğini kontrol etti.", correct: "The nurse checked if the patient wanted water.", fakes: ["The nurse checked if a patient wanted water.", "The nurse checked if the patient wanted water. isn't it?"] },
        { tr: "Bankacının parayı nereye sakladığını bilmiyoruz.", correct: "We don't know where the banker hid the money.", fakes: ["We doesn't know where the banker hid the money.", "We aren't know where the banker hid the money."] },
        { tr: "Öğrenciler sınavın ne zaman başlayacağını sordu.", correct: "The students asked when the exam would start.", fakes: ["The students asked when the exam would start. isn't it?", "The students asked when a exam would start."] },
        { tr: "Teknisyenin modemi tamir edip edemeyeceğini göreceğiz.", correct: "We will see if the technician can repair the modem.", fakes: ["We will see if the technician can to repair the modem.", "We will seing if the technician can repair the modem."] },
        { tr: "Patron, şifreyi kimin değiştirdiğini öğrenmek istiyor.", correct: "The boss wants to learn who changed the password.", fakes: ["The boss wants to learn who changed the password. isn't it?", "The boss wants to learn who changed a password."] },
        { tr: "Pilotun uçağı indirip indiremeyeceğini merak ediyoruz.", correct: "We wonder if the pilot can land the plane.", fakes: ["We wonder if the pilot can to land the plane.", "We wonder if the pilot is can land the plane."] },
        { tr: "Hemşirenin hastaya ne verdiğini gördüm.", correct: "I saw what the nurse gave to the patient.", fakes: ["I saw what a nurse gave to a patient.", "I saw what the nurse gave to the patient. isn't it?"] },
        { tr: "Şoför, arabayı yıkayıp yıkamadığını hatırlamıyor.", correct: "The driver doesn't remember if he washed the car.", fakes: ["The driver doesn't remember if he washed the car. isn't it?", "The driver doesn't remember if he washed a car."] },
        { tr: "Öğretmen, öğrencilerin çalışmadığını biliyordu.", correct: "The teacher knew that the students didn't study.", fakes: ["The teacher knew that the students doesn't study.", "The teacher knew that the students wasn't study."] },
        { tr: "Polis, şoförün kapıyı nasıl açtığını buldu.", correct: "The police found out how the driver opened the door.", fakes: ["The police found out how a driver opened a door.", "The police found out how the driver opened the door. isn't it?"] },
        { tr: "Doktor, hastanın ateşi olup olmadığını sordu.", correct: "The doctor asked if the patient had a fever.", fakes: ["The doctor asked if the patient was a fever.", "The doctor asked if the patient have a fever."] },
        { tr: "Onlar, öğretmenin ne soracağını tartışıyor.", correct: "They are discussing what the teacher will ask.", fakes: ["They are discussing what the teacher will to ask.", "They are discussing what the teacher will asking."] },
        { tr: "Bankaların eski para kabul edip etmediğinden emin değilim.", correct: "I'm not sure if the banks accept old money.", fakes: ["I'm not sure if a banks accept old money.", "I'm not sure if the banks accept old money. isn't it?"] },
        { tr: "Yumurta neden sevmediğini açıklayamadı.", correct: "She couldn't explain why she didn't like eggs.", fakes: ["She couldn't explain why she didn't liked eggs.", "She couldn't explain why she wasn't like eggs."] },
        { tr: "Öğrenciler öğretmenin ödev verip vermeyeceğini merak ediyor.", correct: "The students wonder if the teacher will give homework.", fakes: ["The students wonder if the teacher are going give homework.", "The students wonder if the teacher will to give homework."] },
        { tr: "Polis, patronun epey çılgın olduğunu gördü.", correct: "The police saw that the boss was quite crazy.", fakes: ["The police saw that the boss were quite crazy.", "The police saw that the boss is quite crazy."] }
    ],
    lesson18: [
        { tr: "Polis bankadan çalınan parayı buldu.", correct: "The police found the money stolen from the bank.", fakes: ["The police found a money stolen from a bank.", "The police found the money stolen from the bank. isn't it?"] },
        { tr: "Şoför uyuyan köpeği görmedi.", correct: "The driver didn't see the sleeping dog.", fakes: ["The driver didn't seed the sleeping dog.", "The driver doesn't see the sleeping dog."] },
        { tr: "Patron şoför tarafından yıkanan arabayı beğendi.", correct: "The boss liked the car washed by the driver.", fakes: ["The boss liked the car washed by the driver. isn't it?", "The boss liked a car washed by a driver."] },
        { tr: "Ağlayan öğrenci öğretmeni aradı.", correct: "The crying student called the teacher.", fakes: ["The crying student called the teacher. isn't it?", "The crying student called a teacher."] },
        { tr: "Hastanede bekleyen hastalar epey çılgınlaştı.", correct: "The patients waiting in the hospital got quite crazy.", fakes: ["The patients waiting in a hospital got quite crazy.", "The patients waiting in the hospital got quite crazy. isn't it?"] },
        { tr: "Biz tamir edilen modemi kullanacağız.", correct: "We will use the repaired modem.", fakes: ["We are going use the repaired modem.", "We will using the repaired modem."] },
        { tr: "Doktor hemşire tarafından kilitlenen kapıyı açamadı.", correct: "The doctor couldn't open the door locked by the nurse.", fakes: ["The doctor couldn't open the door locked by the nurse. isn't it?", "The doctor couldn't open a door locked by a nurse."] },
        { tr: "Muayene eden doktor bir soru sordu.", correct: "The examining doctor asked a question.", fakes: ["The examining doctor asked a question.", "The examining doctor asked a question. isn't it?"] },
        { tr: "Bankacı avukat tarafından satılan arabayı aldı.", correct: "The banker bought the car sold by the lawyer.", fakes: ["The banker bought a car sold by a lawyer.", "The banker bought the car sold by the lawyer. isn't it?"] },
        { tr: "Bekleyen hastalar sinirlendi.", correct: "The waiting patients got angry.", fakes: ["The waiting patients got angry. isn't it?", "The waiting patients got angry."] },
        { tr: "Polis çalınan parayı buldu.", correct: "The police found the stolen money.", fakes: ["The police found the stolen money. isn't it?", "The police found a stolen money."] },
        { tr: "Koridorda ağlayan öğrenci öğretmeni aradı.", correct: "The student crying in the corridor called the teacher.", fakes: ["The student crying in a corridor called a teacher.", "The student crying in the corridor called the teacher. isn't it?"] },
        { tr: "Patron yıkanan arabayı beğendi.", correct: "The boss liked the washed car.", fakes: ["The boss liked the washed car. isn't it?", "The boss liked a washed car."] },
        { tr: "Şoför yolda uyuyan köpeği görmedi.", correct: "The driver didn't see the dog sleeping on the road.", fakes: ["The driver didn't seed the dog sleeping on the road.", "The driver wasn't see the dog sleeping on the road."] },
        { tr: "Hemşire kilitli kapıyı açamadı.", correct: "The nurse couldn't open the locked door.", fakes: ["The nurse couldn't open a locked door.", "The nurse couldn't open the locked door. isn't it?"] },
        { tr: "Odada çalışan doktorlar telefona cevap vermedi.", correct: "The doctors working in the room didn't answer the phone.", fakes: ["The doctors working in the room wasn't answer the phone.", "The doctors working in the room doesn't answer the phone."] },
        { tr: "Avukat satılan arabayı sürdü.", correct: "The lawyer drove the sold car.", fakes: ["The lawyer drove a sold car.", "The lawyer drove the sold car. isn't it?"] },
        { tr: "Kan testini inceleyen doktor bir soru sordu.", correct: "The doctor examining the blood test asked a question.", fakes: ["The doctor examining the blood test asked a question. isn't it?", "The doctor examining a blood test asked a question."] },
        { tr: "Biz teknisyen tarafından tamir edilen modemi kullanacağız.", correct: "We will use the modem repaired by the technician.", fakes: ["We will to use the modem repaired by the technician.", "We will using the modem repaired by the technician."] },
        { tr: "Çalışan doktorlar telefona cevap vermedi.", correct: "The working doctors didn't answer the phone.", fakes: ["The working doctors didn't answered the phone.", "The working doctors doesn't answer the phone."] }
    ],
    lesson19: [
        { tr: "Doktor sabahtan beri kan testini inceliyor.", correct: "The doctor has been examining the blood test since morning.", fakes: ["The doctor has been examining the blood test since morning. isn't it?", "The doctor has been examining a blood test since morning."] },
        { tr: "Şoförün arabayı buraya park etmesi yasak.", correct: "The driver isn't allowed to park the car here.", fakes: ["The driver isn't allowed to park a car here.", "The driver isn't allowed to park the car here. isn't it?"] },
        { tr: "Polis saatlerdir trafiği durduruyor mu?", correct: "Have the police been stopping the traffic for hours?", fakes: ["Have a police been stopping a traffic for hours?", "Have the police been stopping the traffic for hours isn't it?"] },
        { tr: "Hemşirenin erken çıkması serbestti.", correct: "The nurse was allowed to leave early.", fakes: ["The nurse is allowed to leave early.", "The nurse were allowed to leave early."] },
        { tr: "Bankacı haftalardır para saymıyor.", correct: "The banker hasn't been counting money for weeks.", fakes: ["The banker hasn't been counting money for weeks.", "The banker hasn't been counting money for weeks. isn't it?"] },
        { tr: "Pilotun o havada uçağı uçurması yasaktı.", correct: "The pilot wasn't allowed to fly the plane in that weather.", fakes: ["The pilot wasn't allowed to fly a plane in that weather.", "The pilot wasn't allowed to fly the plane in that weather. isn't it?"] },
        { tr: "Teknisyen dünden beri modemi tamir ediyor mu?", correct: "Has the technician been repairing the modem since yesterday?", fakes: ["Has a technician been repairing a modem since yesterday?", "Has the technician been repairing the modem since yesterday isn't it?"] },
        { tr: "Doktorun hastayı muayene etmesi serbest olacak.", correct: "The doctor will be allowed to examine the patient.", fakes: ["The doctor will to be allowed to examine the patient.", "The doctor are going be allowed to examine the patient."] },
        { tr: "Öğrenciler aylardır kitap okumuyor.", correct: "The students haven't been reading books for months.", fakes: ["The students haven't been reading books for months.", "The students haven't been reading books for months. isn't it?"] },
        { tr: "Bankacının o parayı alması yasak olacak.", correct: "The banker won't be allowed to take that money.", fakes: ["The banker don't be allowed to take that money.", "The banker willn't be allowed to take that money."] },
        { tr: "Hemşire iki saattir odayı temizliyor.", correct: "The nurse has been cleaning the room for two hours.", fakes: ["The nurse has been cleaning the room for two hours. isn't it?", "The nurse has been cleaning a room for two hours."] },
        { tr: "Öğrencilerin koridorda beklemesi serbest.", correct: "The students are allowed to wait in the corridor.", fakes: ["The students are allowed to wait in the corridor. isn't it?", "The students is allowed to wait in the corridor."] },
        { tr: "Avukat günlerdir arabasını satmaya çalışıyor mu?", correct: "Has the lawyer been trying to sell his car for days?", fakes: ["Has the lawyer been trying to sell his car for days isn't it?", "Has a lawyer been trying to sell his car for days?"] },
        { tr: "Köpeğin hastaneye girmesi yasak.", correct: "The dog isn't allowed to enter the hospital.", fakes: ["The dog isn't allowed to enter a hospital.", "The dog isn't allowed to enter the hospital. isn't it?"] },
        { tr: "Patron saatlerdir epey çılgın davranıyor.", correct: "The boss has been acting quite crazy for hours.", fakes: ["The boss has been acting quite crazy for hours. isn't it?", "The boss has been acting quite crazy for hours."] },
        { tr: "Polisin hastaneyi araması serbest miydi?", correct: "Were the police allowed to call the hospital?", fakes: ["Were a police allowed to call a hospital?", "Were the police allowed to call the hospital isn't it?"] },
        { tr: "Şoför günlerdir arabayı yıkamıyor.", correct: "The driver hasn't been washing the car for days.", fakes: ["The driver hasn't been washing a car for days.", "The driver hasn't been washing the car for days. isn't it?"] },
        { tr: "Avukatın şifreyi değiştirmesi serbest olacak mı?", correct: "Will the lawyer be allowed to change the password?", fakes: ["Do the lawyer be allowed to change the password?", "Are the lawyer be allowed to change the password?"] },
        { tr: "Pilot sabahtan beri uçağı kontrol ediyor.", correct: "The pilot has been checking the plane since morning.", fakes: ["The pilot has been checking a plane since morning.", "The pilot has been checking the plane since morning. isn't it?"] },
        { tr: "Öğretmenin o kitabı okuması serbestti.", correct: "The teacher was allowed to read that book.", fakes: ["The teacher is allowed to read that book.", "The teacher were allowed to read that book."] }
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
    
    // Properly format strings like "lesson10b" to "Lesson 10B"
    option.textContent = key.replace('lesson', 'Lesson ').replace('a', 'A').replace('b', 'B');
    lessonSelect.appendChild(option);
});

// ==========================================
// 3. CORE LOGIC (Ghost Audio Fetch & Randomization)
// ==========================================

const audioPlayer = new Audio();

// Use an async fetch function to completely hide the request origin from Google
async function playTurkishAudio(text) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    
    try {
        const encodedText = encodeURIComponent(text);
        const googleUrl = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=tr&q=${encodedText}`;
        
        // This is the magic key: 'no-referrer' forces Google to accept the request
        const response = await fetch(googleUrl, { referrerPolicy: 'no-referrer' });
        
        if (!response.ok) throw new Error("Google blocked the stealth request.");
        
        // Convert the clean response into a playable audio file
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        audioPlayer.src = audioUrl;
        await audioPlayer.play();
        
    } catch (error) {
        console.warn("Ghost Audio Failed, using Fallback System:", error);
        playFallbackAudio(text);
    }
}

// Fallback System just in case
function playFallbackAudio(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tr-TR'; 
    utterance.rate = 0.85; // Slowed down slightly to make it clearer
    window.speechSynthesis.speak(utterance);
}

function initLesson() {
    const selectedLessonId = lessonSelect.value;
    
    // Create a fresh copy of the lesson data
    currentLesson = [...lessonsData[selectedLessonId]];
    
    // SHUFFLE the questions instantly every time the lesson loads
    shuffleArray(currentLesson);
    
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
    shuffleArray(allOptions); // Shuffles the multiple-choice buttons
    
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

// Utility Function to randomize arrays (used for both questions and buttons)
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
