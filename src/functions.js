// window.addEventListener('DOMContentLoaded', function() {
//     const preloader = document.getElementById('preloader');
//     preloader.style.opacity = '0';
//     setTimeout(() => {
//         preloader.style.display = 'none';
//     }, 1000); // Zorgt ervoor dat het preloader-element volledig verdwijnt
// });


var activities = [];
const activities_moddels = [
    {
        title: "Bloemen Ontdekking",
        image_path: "Bloemen Ontdekking.jpg",
        months: [4, 5], 
        daysOfWeek: [1, 4], // Maandag (1), Donderdag (4)
        location: "België - Hallerbos",
        type: "Wandeling",
        duration: "3h",
        lunch: false,
        description: "Verken de prachtige bloemenpracht van het Hallerbos tijdens de lente. Deze wandeling is ongeveer 5 km lang en brengt je door kleurrijke bloemenvelden. Er zijn enkele kleine hellingen, dus zorg voor geschikte schoenen. Vergeet niet je eigen picknick mee te nemen, want lunch is niet inbegrepen."
    },
    {
        title: "Toppen Tocht",
        image_path: "tops.jpg",
        months: [4, 5, 6, 7, 8, 9, 10], 
        specificDays: [1, -1], // Eerste dag en laatste dag van de maand
        location: "Duitsland - Sächsische Schweiz Nationalpark",
        type: "Hiking",
        duration: "9h",
        lunch: true,
        description: "Een uitdagende tocht door de prachtige toppen van het Sächsische Schweiz Nationalpark. De route is ongeveer 20 km lang en voert langs spectaculaire kliffen en uitzichtpunten. Onderweg zul je flink wat hoogteverschil overbruggen, dus wees voorbereid op een intensieve dag. Neem voldoende water en een stevige lunch mee, want er zijn geen eetgelegenheden onderweg."
    },
    {
        title: "Verdon Wildwater Avontuur",
        image_path: "raft.jpg",
        months: [7, 8, 9], 
        specificDates: [2, 16], 
        location: "Frankrijk - Parc naturel régional du Verdon",
        type: "Rafting",
        duration: "6h",
        lunch: false,
        description: "Beleef de spanning van wildwaterraften op de Verdon rivier. Deze activiteit is ideaal voor avonturiers die niet bang zijn om nat te worden. De tocht beslaat een afstand van ongeveer 15 km en duurt de hele ochtend en een deel van de middag. Zorg dat je je eigen lunch meeneemt, aangezien er onderweg geen voorzieningen zijn."
    },
    {
        title: "Kajakken door de Kloof",
        image_path: "kayak_rocks.jpg",
        months: [6, 7, 8, 9], 
        specificDates: [4, 8, 20],
        location: "Frankrijk - Parc naturel régional du Verdon",
        type: "Kayak",
        duration: "9h",
        lunch: true,
        description: "Peddel door de adembenemende kloven van de Verdon en geniet van spectaculaire uitzichten. De route is ongeveer 25 km lang en je zult onderweg diverse rustplekken tegenkomen. Het water is kalm, maar een goede fysieke conditie is vereist. Vergeet niet om je eigen lunch en snacks mee te nemen, aangezien deze niet worden voorzien."
    },
    {
        title: "Verdon Waterwegen",
        image_path: "kayak_ways.jpg",
        months: [6, 7, 8, 9], 
        specificDays: [1, -1],
        specificDates: [12],
        location: "Frankrijk - Parc naturel régional du Verdon",
        type: "Kayak",
        duration: "4h",
        lunch: false,
        description: "Een ontspannen kajaktocht langs de rustige waterwegen van de Verdon. De tocht duurt ongeveer 4 uur en is geschikt voor zowel beginners als ervaren kajakkers. De totale afstand die je zult afleggen is ongeveer 10 km. Lunch is niet inbegrepen, dus breng je eigen eten en drinken mee."
    },
    {
        title: "Bos en Heideroute",
        image_path: "forest_heath.jpg",
        months: [4, 5, 9, 10], 
        daysOfWeek: [1, 3], // Maandag (1), Woensdag (3)
        location: "België - Hallerbos",
        type: "Wandeling",
        duration: "5h",
        lunch: true,
        description: "Verken de combinatie van bos en heide op deze prachtige wandelroute. De route beslaat een afstand van ongeveer 12 km en voert je door gevarieerde landschappen. Onderweg heb je kans om wilde dieren te spotten, dus houd je camera bij de hand. Vergeet niet om je eigen lunch en snacks mee te nemen, want er zijn geen eetgelegenheden onderweg."
    },
    {
        title: "Water en berg Wandeling",
        image_path: "coast_dunes.jpg",
        months: [6, 7, 8], 
        specificDays: [2, 4], // Tweede en vierde zaterdag van de maand
        location: "Frankrijk - Parc naturel régional du Verdon",
        type: "Wandeling",
        duration: "4h",
        lunch: false,
        description: "Een schilderachtige wandeling langs water en door bergen in het Verdon. De route is ongeveer 8 km lang en bevat zowel vlakke stukken als enkele uitdagende klimmetjes. De uitzichten onderweg zijn adembenemend en bieden tal van fotomomenten. Zorg ervoor dat je je eigen lunch meeneemt, aangezien er geen voorzieningen zijn."
    },
    {
        title: "Bergpanorama Trekking",
        image_path: "mountain_panorama.jpg",
        months: [6, 7, 8], 
        daysOfWeek: [2, 5], // Dinsdag (2), Vrijdag (5)
        location: "Duitsland - Sächsische Schweiz Nationalpark",
        type: "Wandeling",
        duration: "7h",
        lunch: true,
        description: "Geniet van adembenemende bergpanorama's tijdens deze trekking door het Sächsische Schweiz Nationalpark. De route is 18 km lang en biedt diverse uitzichten over de omringende bergen en valleien. De wandeling is geschikt voor ervaren wandelaars die houden van een uitdaging. Vergeet niet om je eigen lunch mee te nemen voor onderweg."
    },
    {
        title: "Woud der Legenden",
        image_path: "legendary_forest.jpg",
        months: [10, 11], 
        specificDays: [1, 15], // Eerste en vijftiende van de maand
        location: "België - Hallerbos",
        type: "Wandeling",
        duration: "3h",
        lunch: false,
        description: "Ontdek de mystieke verhalen en legendes van het Hallerbos tijdens deze begeleide wandeling. De route is ongeveer 5 km lang en voert je langs oude bomen en verborgen paden. De gids zal onderweg interessante verhalen delen over de lokale folklore. Lunch is niet inbegrepen, dus zorg ervoor dat je zelf eten meeneemt."
    },
    {
        title: "Rustige Rivierwandeling",
        image_path: "river_walk.jpg",
        months: [5, 6, 7], 
        daysOfWeek: [4, 7], // Donderdag (4), Zondag (7)
        location: "Frankrijk - Parc naturel régional du Verdon",
        type: "Wandeling",
        duration: "2h",
        lunch: false,
        description: "Een rustige wandeling langs de kalme oevers van de Verdon rivier. De totale afstand van deze wandeling is ongeveer 4 km, en het pad is vlak en gemakkelijk te bewandelen. Onderweg kun je genieten van de rustgevende geluiden van de natuur. Vergeet niet om je eigen lunch of snacks mee te nemen, want er zijn geen eetmogelijkheden."
    },
    {
        title: "Zomerse Bergenwandeling",
        image_path: "summer_mountain.jpg",
        months: [6, 7, 8 , 9], 
        specificDays: [10, 24], // Tiende en vierentwintigste van de maand
        location: "Duitsland - Sächsische Schweiz Nationalpark",
        type: "Wandeling",
        duration: "6h",
        lunch: true,
        description: "Verken de bergen in hun zomerse pracht tijdens deze wandeling. De route van 15 km voert je door bossen, over kliffen en langs prachtige uitzichtpunten. Onderweg krijg je de kans om de lokale flora en fauna te bewonderen. Lunch is niet inbegrepen, dus breng je eigen eten mee voor onderweg."
    },
    {
        title: "Avontuurlijke Bergwandeling",
        image_path: "adventure_mountain.jpg",
        months: [4, 5, 6, 9, 10], 
        specificDays: [3], // Derde vrijdag van de maand
        location: "Duitsland - Sächsische Schweiz Nationalpark",
        type: "Wandeling",
        duration: "8h",
        lunch: true,
        description: "Een avontuurlijke wandeling voor degenen die van een uitdaging houden. Deze intensieve tocht van 20 km voert je over ruige paden en steile hellingen. De beloning is een adembenemend uitzicht op de omliggende bergen en valleien. Vergeet niet om je eigen lunch en voldoende water mee te nemen voor deze inspannende dag."
    },
    {
        title: "Mystieke Avondwandeling",
        image_path: "mystical_evening.jpg",
        months: [10, 11], 
        specificDays: [7, 21], // Zevende en eenentwintigste van de maand
        location: "Frankrijk - Parc naturel régional du Verdon",
        type: "Wandeling",
        duration: "3h",
        lunch: false,
        description: "Ervaar de mystieke sfeer van de bossen bij zonsondergang. Deze wandeling van ongeveer 5 km laat je kennismaken met de geheimen van de nachtelijke natuur. Onder begeleiding van een gids ontdek je het bos in een heel nieuw licht. Lunch is niet inbegrepen, dus zorg ervoor dat je zelf iets meeneemt."
    },
    {
        title: "Heuvels en Valleien Fietstocht",
        image_path: "hills_valleys.jpg",
        months: [4, 5, 6, 7, 8, 9], 
        specificDays: [3], // Derde woensdag van de maand
        location: "België - Hallerbos",
        type: "Fietstocht",
        duration: "6h",
        lunch: true,
        description: "Een prachtige fietstocht door het gevarieerde landschap van heuvels en valleien. De tocht beslaat ongeveer 40 km en voert je langs schilderachtige dorpen en uitgestrekte velden. Onderweg zijn er verschillende plekken om even uit te rusten en van het uitzicht te genieten. Vergeet niet om je eigen lunch mee te nemen, want er zijn geen eetgelegenheden langs de route."
    },
    {
        title: "Wilde Bloemen Safari",
        image_path: "wild_flowers.jpg",
        months: [5, 6], 
        specificDays: [2, 4], // Tweede en vierde zaterdag van de maand
        location: "België - Hallerbos",
        type: "Wandeling",
        duration: "3h",
        lunch: false,
        description: "Een botanische ontdekkingstocht door de wilde bloemenweiden van het Hallerbos. Deze wandeling van 5 km is ideaal voor natuurliefhebbers die willen genieten van de inheemse flora. Onderweg geeft de gids uitleg over de verschillende soorten bloemen die je tegenkomt. Neem je eigen lunch of snacks mee, want er is geen catering beschikbaar."
    },
    {
        title: "Zonsondergang Mountainbike",
        image_path: "sunset_mtb.jpg",
        months: [7, 8, 9], 
        specificDates: [7, 21], 
        location: "Frankrijk - Parc naturel régional du Verdon",
        type: "Mountainbike",
        duration: "4h",
        lunch: false,
        description: "Geniet van de zonsondergang terwijl je over uitdagende mountainbike-paden rijdt. De route is ongeveer 25 km lang en bevat enkele technische secties die het avontuur compleet maken. De combinatie van inspanning en prachtige uitzichten zorgt voor een onvergetelijke ervaring. Lunch is niet inbegrepen, dus zorg ervoor dat je zelf eten meeneemt."
    },
    {
        title: "Kastelenroute Fietstocht",
        image_path: "castle_route.jpg",
        months: [4, 5, 6, 7, 8], 
        specificDays: [3], // Derde donderdag van de maand
        location: "Frankrijk - Parc naturel régional du Verdon",
        type: "Fietstocht",
        duration: "5h",
        lunch: true,
        description: "Fiets langs historische kastelen en geniet van de architectonische pracht van de regio. De route van 35 km voert je langs enkele van de mooiste kastelen van de streek. Onderweg zijn er tal van mogelijkheden om foto's te maken en meer te leren over de geschiedenis van deze gebouwen. Vergeet niet je eigen lunch mee te nemen, aangezien er geen picknickplaatsen voorzien zijn."
    },
    {
        title: "Ballon d'Alsace Panorama",
        image_path: "ballon_alsace.jpg",
        months: [5, 6, 7, 8, 9], 
        specificDays: [1, 3], // Eerste en derde zaterdag van de maand
        location: "Frankrijk - Parc naturel régional des Ballons des Vosges",
        type: "Wandeling",
        duration: "7h",
        lunch: true,
        description: "Een panoramische wandeling over de beroemde Ballon d'Alsace, een van de hoogste toppen in de Vogezen. De route van 20 km biedt spectaculaire uitzichten en voert door diverse landschappen, van dichte bossen tot open bergtoppen. Deze tocht is geschikt voor ervaren wandelaars die van een uitdaging houden. Lunch is niet inbegrepen, dus breng je eigen eten en drinken mee."
    },
    {
        title: "Boswandeling door de Vogezen",
        image_path: "voges_forest_walk.jpg",
        months: [2, 3, 4, 5, 6], 
        daysOfWeek: [2, 4], // Dinsdag (2), Donderdag (4)
        location: "Frankrijk - Parc naturel régional des Ballons des Vosges",
        type: "Wandeling",
        duration: "4h",
        lunch: false,
        description: "Ontdek de rustige bossen van de Vogezen tijdens deze begeleide wandeling. De route is 10 km lang en leidt je door dichte bossen en over stille bospaden. Deze wandeling is ideaal voor natuurliefhebbers die even willen ontsnappen aan de drukte van het dagelijks leven. Lunch is niet inbegrepen, dus vergeet niet om je eigen eten en drinken mee te nemen."
    },
    {
        title: "Meer van Gérardmer Trail",
        image_path: "gerardmer_trail.jpg",
        months: [6, 7, 8], 
        specificDays: [1, 15], // Eerste en vijftiende van de maand
        location: "Frankrijk - Parc naturel régional des Ballons des Vosges",
        type: "Wandeling",
        duration: "5h",
        lunch: true,
        description: "Een schilderachtige trail rond het Meer van Gérardmer, omgeven door bergen en bossen. De route is ongeveer 12 km lang en biedt een combinatie van natuurpracht en serene uitzichten over het meer. Dit is een perfecte wandeling voor wie op zoek is naar een mix van inspanning en ontspanning. Neem je eigen lunch mee, want er zijn geen voorzieningen onderweg."
    },
    {
        title: "Bergen en Meren Tocht",
        image_path: "mountains_lakes_hike.jpg",
        months: [6, 7, 8, 9], 
        daysOfWeek: [6, 7], // Zaterdag (6), Zondag (7)
        location: "Frankrijk - Parc naturel régional des Ballons des Vosges",
        type: "Wandeling",
        duration: "8h",
        lunch: true,
        description: "Een uitgebreide tocht door de bergen en meren van de Ballons des Vosges. Deze wandeling van 18 km biedt een uitdagende mix van stijgende en dalende paden, met onderweg adembenemende uitzichten. Deze tocht is geschikt voor ervaren wandelaars die van een dag vol avontuur houden. Vergeet niet om je eigen lunch en voldoende water mee te nemen."
    },
    {
        title: "Historische Vogezen Route",
        image_path: "historical_vosges.jpg",
        months: [5, 6, 9, 10], 
        specificDays: [7, 21], // Zevende en eenentwintigste van de maand
        location: "Frankrijk - Parc naturel régional des Ballons des Vosges",
        type: "Wandeling",
        duration: "6h",
        lunch: true,
        description: "Verken de rijke geschiedenis van de Vogezen tijdens deze wandeltocht. De route van 15 km voert je langs historische bezienswaardigheden en door pittoreske dorpjes. Onderweg krijg je de kans om meer te leren over de cultuur en tradities van de regio. Lunch is niet inbegrepen, dus neem je eigen eten en drinken mee voor onderweg."
    },
    {
        title: "Schwarzwald Panorama Tour",
        image_path: "schwarzwald_panorama.jpg",
        months: [5, 6, 7, 8, 9],
        specificDays: [2, 3], // Tweede en derde zaterdag van de maand
        location: "Duitsland - Naturpark Südschwarzwald",
        type: "Wandeling",
        duration: "6h",
        lunch: true,
        description: "Geniet van de panoramische uitzichten van het Schwarzwald tijdens deze tour. De wandelroute is ongeveer 14 km lang en voert je langs schilderachtige paden en door dichte bossen. De gids zal onderweg wijzen op bijzondere flora en fauna die je tegenkomt. Zorg ervoor dat je je eigen lunch meeneemt, want er zijn geen eetgelegenheden onderweg."
    },
    {
        title: "Rondwandeling door de Wouden",
        image_path: "forest_loop.jpg",
        months: [2, 3, 4, 10, 11],
        daysOfWeek: [1, 4], // Maandag (1), Donderdag (4)
        location: "Duitsland - Naturpark Südschwarzwald",
        type: "Wandeling",
        duration: "3h",
        lunch: false,
        description: "Een rustige rondwandeling door de dichte wouden van het Schwarzwald. Deze tocht van 7 km is perfect voor wie op zoek is naar een ontspannende natuurervaring. Het pad is goed begaanbaar en geschikt voor alle niveaus. Lunch is niet inbegrepen, dus breng je eigen snacks of maaltijd mee voor onderweg."
    },
];

function generateActivityDates(startDate) {
    const activitiesWithDates = [];
    const endDate = new Date(startDate);
    endDate.setFullYear(startDate.getFullYear() + 1);
    
    startDate.setHours(0, 0, 0, 0);

    
    
    activities_moddels.forEach(activity => {
        const { title, image_path, months, daysOfWeek, specificDays, specificDates, location, type, duration, lunch, description } = activity;
        
        let currentDate = new Date(startDate);
        
        while (currentDate < endDate) {
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();

            const daysInMonth = new Date(year, month, 0).getDate();
            
            if (months.includes(month)) {
                if (daysOfWeek) {
                    for (let day = 1; day <= daysInMonth; day++) {
                        const date = new Date(year, month - 1, day);
                        const dayOfWeek = date.getDay(); 
                        
                        if (daysOfWeek.includes(dayOfWeek)) {
                            if (date >= startDate) { 
                                activitiesWithDates.push({
                                    title,
                                    image_path,
                                    date,
                                    location,
                                    type,
                                    duration,
                                    lunch,
                                    description
                                });
                            }
                        }
                    }
                }

                if (specificDays) {
                    specificDays.forEach(dayIndex => {
                        let day;
                        if (dayIndex > 0) {
                            day = new Date(year, month - 1, (dayIndex - 1) * 7 + 1).getDay() === 3
                                ? (dayIndex - 1) * 7 + 1
                                : (dayIndex - 1) * 7 + 1 + ((3 - new Date(year, month - 1, (dayIndex - 1) * 7 + 1).getDay() + 7) % 7);
                        } else {
                            day = new Date(year, month, 0).getDate() - ((new Date(year, month - 1, daysInMonth).getDay() - 3 + 7) % 7);
                        }

                        const specificDate = new Date(year, month - 1, day);

                        if (specificDate >= startDate) { 
                            activitiesWithDates.push({
                                title,
                                image_path,
                                date: specificDate,
                                location,
                                type,
                                duration,
                                lunch,
                                description
                            });
                        }
                    });
                }

                if (specificDates) {
                    specificDates.forEach(day => {
                        if (day <= daysInMonth) {
                            const specificDate = new Date(year, month - 1, day);

                            if (specificDate >= startDate) {
                                activitiesWithDates.push({
                                    title,
                                    image_path,
                                    date: specificDate,
                                    location,
                                    type,
                                    duration,
                                    lunch,
                                    description
                                });
                            }
                        }
                    });
                }
            }          
            currentDate.setMonth(currentDate.getMonth() + 1);
        }
    });

    activitiesWithDates.sort((a, b) => a.date - b.date);

    activities = activitiesWithDates;
}

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            header.style.transform = 'translatey(-100%)'; 
        } else {
            header.style.transform = '';
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    });
    header.style.transform = '';
});


function shownav() {
    document.querySelector("header nav").classList = "show"
}
function hidenav() {
    document.querySelector("header nav").classList = ""
}