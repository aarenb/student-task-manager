# Reflektioner om clean code

## Kapitel 2 (Namngivning)
Detta kapitlet har påverkat min kod väldigt mycket, framförallt regeln “use intention-revealing names”. Det har för det mesta gjort att mina namn har generellt blivit längre än de brukade vara, eftersom de innehåller mer information nu. Men även om namnen är längre så blir koden helt klart enklare att förstå. Ibland är det dock svårt att komma på ett bra namn, framförallt till metoder som innehåller utbruten kod som tidigare var en del av en annan metod. 

Bildexempel från min modul på ett metod namn jag fortfarande inte är nöjd med:  
<img width="296" alt="image" src="https://github.com/aarenb/student-task-manager/assets/112412681/cd0940d7-686f-4485-9371-a831d55c4129">


## Kapitel 3 (Funktioner)
“Do one thing” och “small” reglerna från clean code betyder att man måste bryta ut väldigt mycket saker i sina metoder. Det är något jag har försökt följa så mycket jag kan i denna uppgift, där jag verkligen har fått väldigt många små metoder. Detta syns absolut mest i min app, framförallt i task-item klassen som har fått väldigt många metoder efter att jag har brutit ut allt. Jag använder mig fortfarande av switch statements i min kod, trots att fast clean code inte tycker att detta är bra, då jag anser att det i vissa fall inte finns något bra alternativ. Dock så har jag försökt korta ner de switch statements som jag hade i min modul kod, vilket gör dem lite bättre eftersom det största problemet med dem enligt clean code är att de är långa.

Bildexempel från task-item med små metoder:  
<img width="221" alt="image" src="https://github.com/aarenb/student-task-manager/assets/112412681/16239e55-e12b-4072-b4d1-f53033decfbf">

## Kapitel 4 (Kommentarer)
I clean code står det att “mandated comments” är dåliga, och tar som exempel upp att det är dåligt att ha ett krav om att varje funktion måste ha en javadoc. Jag har i detta projektet valt att använda samma kodstandard som vi har lärt oss i tidigare javascript kurser, och som verkar vara linneuniversitetets kodstandard för just javascript, men den har just denna regeln om att alla publika funktioner ska ha en jsdoc kommentar. Jag brukar ofta upptäcka hur dåliga dessa kan bli, då de i vissa fall bara upprepar vad som koden redan berättar, framförallt om funktionen inte tar några argument eller returnerar något. Om funktionen nu tar argument eller returnerar något så tillägger den iallafall vilken typ dessa är, vilket annars kanske inte hade framkommit av enbart javascript koden. 

Bildexempel från min app på en dålig, påtvingad jsdoc kommentar:  
<img width="190" alt="image" src="https://github.com/aarenb/student-task-manager/assets/112412681/544138ad-6bf8-4564-979a-d8a1dc1f9c5c">

## Kapitel 5 (Formatering)
Jag tycker att reglerna om den vertikala distansen säger emot varandra lite ibland. Om man ska följa “the newspaper metaphor" så kommer först alla publika, hög abstraktion metoder och sen de privata med låg abstraktion. Men sen så står det också i clean code att man ska ha metoder som anropas av en annan metod direkt under den som anropar. Jag har mest följt regeln om att metoder som anropar varandra ska vara nära varandra, då jag anser att det är viktigare för läsbarheten. Om en metod anropas av flera metoder har jag även valt att sätta den efter den sista metoden som anropar den, så att man aldrig behöver skrolla tillbaka för att hitta information om en metod som anropas.

Bildexempel från min modul på hur jag har lagt en metod som anropas av en annan efter anroparen:  
<img width="274" alt="image" src="https://github.com/aarenb/student-task-manager/assets/112412681/d23ba9d0-7d20-414b-9f5a-39631d738cd4">


## Kapitel 6 (Objekt och datastrukturer)
Det som jag mest har tagit med mig från detta kapitlet är att man borde undvika train wrecks. Jag har flera gånger kommit på mig själv med att skriva ett trainwreck, men sedan skrivit om det för att undvika detta. Detta är ett exempel där jag har skrivit det första anropet som en variabel, för att sedan kunna anropa en metod på den skapade variabeln för att undvika ett trainwreck. Det gör koden lite längre, eftersom det delas upp på två olika rader, men det ser mindre “sloppy” ut. 

Bildexempel från min app där jag undvikit train wrecks:   
<img width="286" alt="image" src="https://github.com/aarenb/student-task-manager/assets/112412681/eda3ad73-4714-4ca7-974c-0d74793d4c8f">

## Kapitel 7 (Felhantering)
Att använda exceptions istället för att till exempel returnera en kod är något jag redan brukar använda mig av när jag skriver kod. Det är något jag lärde mig om redan i tidigare kurser. Dock så har det förekommit tillfällen då jag har returnerat null, för att sedan någon annanstans i koden kontrollerat om det är null. Detta är inget jag har använt mig av i denna uppgift, men något jag definitivt även kommer att tänka på i min framtida kod.

Ett exempel på felhantering i min modul:  
<img width="254" alt="image" src="https://github.com/aarenb/student-task-manager/assets/112412681/03931d92-2037-44ba-a681-d2f5fb303602">


## Kapitel 8 (“Boundaries”)
Detta kapitlet tar mest upp saker om att använda tredje part kod som någon annan har skrivit och som man måste lära sig om. Ett sätt att lära sig om den på ett bra sätt är t.ex. att skriva “learning tests”. Dock så har jag i denna uppgift enbart använt mig av en modul som jag själv har skapat och jag är därför redan medveten om hur den fungerar.  Det står även om hur man ska undvika att för mycket av koden använder sig av tredje part koden, vilket jag har uppnått i min app där modulen enbart används på ett ställe i koden.

Bildexempel från min app där jag använder mig av modulen:  
<img width="299" alt="image" src="https://github.com/aarenb/student-task-manager/assets/112412681/cba2dd2e-c4bf-401b-b6c3-97b54e75a853">


## Kapitel 9 (Enhetstester)
Enligt clean code ska man skriva enhetstester och kod tillsammans. Då skriver man ett test, sedan kod som gör att detta testet uppfylls, och sen skriver man ett till test. Sen så fortsätter man så. När jag skrev mina enhetstester i denna uppgift så skrev jag dem efter att det mesta av min kod redan var färdig, vilket alltså inte är så bra gjort. Mina enhetstester kanske inte är de tydligaste heller, men det är inte något jag direkt har skapat innan och därför inte är så bra på. Jag lär mig och ska i framtiden försöka i alla fall skriva några tester innan jag skriver koden som uppfyller testerna.

Exempelbild på enhetstester från min modul:  
<img width="299" alt="image" src="https://github.com/aarenb/student-task-manager/assets/112412681/5680b8e6-db45-463b-b99c-7875198180b8">

## Kapitel 10 (Klasser)
Sammanhållning är en viktig sak som nämns i clean code när det gäller klasser. Varje klass bör ha ett lågt antal instansvariabler, och sedan bör varje metod i klassen använda sig av åtminstone en instansvariabel. Dock så tycker jag att det blir väldigt svårt, framförallt om man ska följa reglerna om små funktioner, då man måste bryta ut så mycket och varje liten del då kanske inte behöver använda sig av någon instansvariabel. Det hade kanske varit möjligt att bryta ut vissa av dessa saker i sina egna små klasser, men då hade det blivit väldigt många klasser.

Bildexempel från min modul på en metod som är utbruten och därför inte använder instansvariabler:   
<img width="178" alt="image" src="https://github.com/aarenb/student-task-manager/assets/112412681/943968d9-fd43-4504-a77a-de3dd923d5d1">

## Kapitel 11 (System)
Jag har i min modul valt att inte använda dependency injection när det gäller exceptionHandler klassen, en klass som både Time och Class använder sig av. Istället så skapas en exceptionHandler inuti deras constructor, istället för att skickas in som ett argument. Detta är enligt boken dåligt att göra, men i detta fallet hade det gjort användar upplevelsen värre om den som använder modulen själv måste skapa en exceptionHandler och skicka in den. Det hade dock möjligjort för att skicka in en annan slags exception handler vid testfall, om den nu hade varit depencency injectat.

Bildexempel på hur exceptionHandler skapas i Date's constructor:  
<img width="205" alt="image" src="https://github.com/aarenb/student-task-manager/assets/112412681/c67f4f91-8df4-4e72-9f98-7a8389b362ae">

