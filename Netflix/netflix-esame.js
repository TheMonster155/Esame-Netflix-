const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: "auto"
        }
    }
});

const hideSection = document.querySelector(".hide-section");

let lastKnownScrollPosition = 0;
 
// funzione per mostrare la sezione  e togiere lultimo  swiper dopo lo scrool 
const showSection = (actualScrollPosition) => {
    if (actualScrollPosition > 100) {
        console.log("funzione eseguita");
        hideSection.classList.remove("hide-section")
    } else {
        (actualScrollPosition <100)
        hideSection.classList.add("hide-section")
    }

}


document.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition);
    showSection(lastKnownScrollPosition)
})

// per la icona cosi mosta un serach con un click

const searchContainer = document.getElementById("containerSearch");
const navigationLink = document.getElementById("navigation");


const handleInputToggle = () => {
    
    let existingInput = document.querySelector("#containerSearch input");

    if (!existingInput) {
      
        let inputElement = document.createElement("input");
        inputElement.setAttribute("type", "text");
        searchContainer.insertBefore(inputElement, navigationLink);

        
        navigationLink.classList.add("search-active"); 
    } else {
        
        existingInput.remove();

        
        navigationLink.classList.remove("search-active");
    }
};

navigationLink.addEventListener("click", handleInputToggle);




                                                                                            // qui lavoriamo  nel select  elmenti per tutti   gli elemti tag e slide 
const selectCategoryElement= document.getElementById("categories");   // qui prendiamo il id della cheange 
selectCategoryElement.addEventListener("change", ()=>{
    const slideCards = document.getElementsByClassName("swiper-slide");
    for (let j = 0; j < slideCards.length; j++) {
        slideCards[j].classList.add("d-none");
    }   //qui aggiungamo a tutto il d-non perche non sapiamo ancora cosa lui deve  mostare 


    const selectedCategory = selectCategoryElement.options[selectCategoryElement.selectedIndex].value; //qui selezoniamo gli option degli elementi 
    if (selectedCategory === "all") {
        for (let j = 0; j < slideCards.length; j++) {
            slideCards[j].classList.remove("d-none");
        }       //qui gli diciamo di togiare  il d-none a tutti, perche  cosi il  all lo fa ritorna come inizio 
    } else {
        const badges = document.getElementsByClassName("badge");   
        for (let i = 0; i < badges.length; i++) {
            const tagSpanData = badges[i].dataset.tag
           if (tagSpanData === selectedCategory) {
                badges[i].closest(".swiper-slide").classList.remove("d-none");  //qui li diciamo di dire quale il figio e vicino a  swiper-slide
            }       //qui li diciamo di dire quale il figio e vicino a  swiper-slide cosi rimouve il d-none solo tag(badge)  a il tagSpanData
        }
    }
})


//array il swiper slide

const cards = {
    trending: [
        {
            img: './assets/imgs/movies/1.png',
            duration: '2h 15m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            img: './assets/imgs/movies/2.png',
            duration: '1h 45m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Horror', 'Drama', 'Fantasy']
        },
        {
            title: 'VISaVIS',
            img: './assets/imgs/movies/5.png',
            duration: '2h 30m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Comedy', 'Fantasy', 'Romance']
        },
        {
            title: 'The Place',
            img: './assets/imgs/movies/16.png',
            duration: '1h 50m',
            tags: ['Fantasy', 'Drama', 'Thriller']
        },
        {
            title: 'Summertime',
            img: './assets/imgs/movies/15.png',
            duration: '2h 5m',
            tags: ['Animation', 'Action', 'Romance']
        },
        {
            title: 'I delitti di valhalla',
            img: './assets/imgs/movies/8.png',
            duration: '1h 35m',
            tags: ['Anime', 'Action', 'Thriller']
        },
        {
            title: 'Grace',
            img: './assets/imgs/movies/12.png',
            duration: '2h 10m',
            tags: ['Comedy', 'Horror', 'Thriller']
        },
        {
            title: 'Virginia River',
            img: './assets/imgs/movies/17.png',
            duration: '2h 45m',
            tags: ['Drama', 'Action', 'Anime']
        },
        {
            title: 'The English Game',
            img: './assets/imgs/movies/10.png',
            duration: '1h 55m',
            tags: ['Fantasy', 'Anime', 'Thriller']
        }
    ],
    watch: [
        {
            img: './assets/imgs/movies/16.png',
            duration: '2h 20m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            img: './assets/imgs/movies/13.png',
            duration: '1h 40m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Horror', 'Action', 'Fantasy']
        },
        {
            title: 'VISaVIS',
            img: './assets/imgs/movies/17.png',
            duration: '2h 25m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Fantasy', 'Action', 'Thriller']
        },
        {
            title: 'The Place',
            img: './assets/imgs/movies/16.png',
            duration: '1h 30m',
            tags: ['Comedy', 'Fantasy', 'Thriller']
        },
        {
            title: 'Summertime',
            img: './assets/imgs/movies/4.png',
            duration: '2h 10m',
            tags: ['Comedy', 'Anime', 'Fantasy']
        },
        {
            title: 'I delitti di valhalla',
            img: './assets/imgs/movies/9.png',
            duration: '1h 25m',
            tags: ['Animation', 'Action', 'Thriller']
        },
        {
            title: 'Grace',
            img: './assets/imgs/movies/11.png',
            duration: '2h 15m',
            tags: ['Drama', 'Romance', 'Horror']
        },
        {
            title: 'Virginia River',
            img: './assets/imgs/movies/8.png',
            duration: '2h 5m',
            tags: ['Comedy', 'Action', 'Anime']
        },
        {
            title: 'The English Game',
            img: './assets/imgs/movies/10.png',
            duration: '1h 45m',
            tags: ['Comedy', 'Animation', 'Thriller']
        }
    ],
    new: [
        {
            img: './assets/imgs/movies/9.png',
            duration: '2h 20m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Horror', 'Action', 'Thriller']
        },
        {
            img: './assets/imgs/movies/14.png',
            duration: '1h 40m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Horror', 'Drama', 'Fantasy']
        },
        {
            title: 'VISaVIS',
            img: './assets/imgs/movies/15.png',
            duration: '2h 25m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Drama', 'Anime', 'Fantasy']
        },
        {
            title: 'The Place',
            img: './assets/imgs/movies/1.png',
            duration: '1h 30m',
            tags: ['Horror', 'Fantasy', 'Thriller']
        },
        {
            title: 'Summertime',
            img: './assets/imgs/movies/3.png',
            duration: '2h 10m',
            tags: ['Romance', 'Action', 'Fantasy']
        },
        {
            title: 'I delitti di valhalla',
            img: './assets/imgs/movies/6.png',
            duration: '1h 25m',
            tags: ['Romance', 'Action', 'Thriller']
        },
        {
            title: 'Grace',
            img: './assets/imgs/movies/2.png',
            duration: '2h 15m',
            tags: ['Comedy', 'Action', 'Anime']
        },
        {
            title: 'Virginia River',
            img: './assets/imgs/movies/7.png',
            duration: '2h 5m',
            tags: ['Animation', 'Romance', 'Thriller']
        },
        {
            title: 'The English Game',
            img: './assets/imgs/movies/10.png',
            duration: '1h 45m',
            tags: ['Comedy', 'Action', 'Thriller']
        }
    ],
    missing: [
        {
            img: './assets/imgs/movies/1.png',
            duration: '2h 15m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            img: './assets/imgs/movies/2.png',
            duration: '1h 45m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Horror', 'Drama', 'Fantasy']
        },
        {
            title: 'VISaVIS',
            img: './assets/imgs/movies/5.png',
            duration: '2h 30m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Comedy', 'Fantasy', 'Romance']
        },
        {
            title: 'The Place',
            img: './assets/imgs/movies/16.png',
            duration: '1h 50m',
            tags: ['Fantasy', 'Drama', 'Thriller']
        },
        {
            title: 'Summertime',
            img: './assets/imgs/movies/15.png',
            duration: '2h 5m',
            tags: ['Animation', 'Action', 'Romance']
        },
        {
            title: 'I delitti di valhalla',
            img: './assets/imgs/movies/8.png',
            duration: '1h 35m',
            tags: ['Animation', 'Action', 'Thriller']
        },
        {
            title: 'Grace',
            img: './assets/imgs/movies/12.png',
            duration: '2h 10m',
            tags: ['Comedy', 'Horror', 'Thriller']
        },
        {
            title: 'Virginia River',
            img: './assets/imgs/movies/17.png',
            duration: '2h 45m',
            tags: ['Drama', 'Action', 'Anime']
        },
        {
            title: 'The English Game',
            img: './assets/imgs/movies/10.png',
            duration: '1h 55m',
            tags: ['Fantasy', 'Anime', 'Thriller']
        }
    ],
};
// funzione per la crazione degli swiper card 
const createFilmCard = (cardData) => {
    const filmCard = document.createElement("div");
    filmCard.setAttribute("class", "film-card gap-2 shadow-sm");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top object-fit-cover");
    cardImg.setAttribute("src", cardData.img);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body d-flex flex-column  text-white bg-dark");

    const iconDiv = document.createElement("div");
    iconDiv.setAttribute("class", "d-flex justify-content-between align-items-center");

    const iconLeftDiv = document.createElement("div");
    iconLeftDiv.setAttribute("class", "d-flex ");

    const ionIconBack = document.createElement("ion-icon");
    ionIconBack.setAttribute("name", "caret-forward-circle-outline");
    ionIconBack.setAttribute("class", " ion-icon")

    const ionIconPlay = document.createElement("ion-icon");
    ionIconPlay.setAttribute("name", "add-circle-outline");
    ionIconPlay.setAttribute("class", " ion-icon")
    const ionIconForward = document.createElement("ion-icon");
    ionIconForward.setAttribute("name", "thumbs-up-outline");
    ionIconForward.setAttribute("class", " ion-icon")
    iconLeftDiv.append(ionIconBack, ionIconPlay, ionIconForward);

    const ionIconRight = document.createElement("ion-icon");
    ionIconRight.setAttribute("name", "chevron-down-circle-outline");
    ionIconRight.setAttribute("class", "ion-icon");

    iconDiv.append(iconLeftDiv, ionIconRight);

    const durationP = document.createElement("h5");
    durationP.textContent = cardData.duration;

    const tagsDiv = document.createElement("div");
    tagsDiv.setAttribute("class", "d-flex   ");

    cardData.tags.forEach(tag => {
        const tagSpan = document.createElement("span");
        tagSpan.textContent = tag;
        tagSpan.setAttribute("class", "badge bg-secondary");
        tagSpan.setAttribute("data-tag", tag.toLowerCase());
        tagsDiv.appendChild(tagSpan);
    });

    cardBody.append(iconDiv, durationP, tagsDiv);
    filmCard.append(cardImg, cardBody);

    return filmCard;
};


const createCard = (cardData, containerToAppend) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.setAttribute("class", "swiper-slide");

    const filmCard = createFilmCard(cardData);

    swiperSlide.appendChild(filmCard);
    containerToAppend.appendChild(swiperSlide);
}

const cardsContainer = document.getElementById("trending");
cards.trending.forEach(card => {
    createCard(card, cardsContainer);
});

const cardsContainertwo = document.getElementById("watch");
cards.watch.forEach(card => {
    createCard(card, cardsContainertwo);
});

const cardsContainerthree = document.getElementById("new");
cards.new.forEach(card => {
    createCard(card, cardsContainerthree);
});

const cardsContainerfour = document.getElementById("missing");
cards.missing.forEach(card => {
    createCard(card, cardsContainerfour);
});



//array per le card del navbar modalita cell 

const  cardLeft =  {
    cardOne: [{
        
        img: './assets/imgs/movies/11.png',
    },
    {
     
        img: './assets/imgs/movies/15.png',

    }
  ],
  cardtwo: [{
    
    img: './assets/imgs/movies/8.png',
},
{
   
    img: './assets/imgs/movies/18.png',

}
],
cardthree: [{
  
    img: './assets/imgs/movies/16.png',
},
{
   
    img: './assets/imgs/movies/7.png',

}
],
cardfour: [{
 
    img: './assets/imgs/movies/4.png',
},
{
   
    img: './assets/imgs/movies/2.png',

}
]
}


// creazione delle  card del navbar modalita cell 
const cardCread = (cardData, toAppendDiv) => {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card mb-4");
    
    const imgCard = document.createElement("img");
    imgCard.setAttribute("class", "img-side-left object-fit-cover");
    imgCard.setAttribute("src", cardData.img);
    
    const bodyCard = document.createElement("div");
    bodyCard.setAttribute("class", "card-body text-white bg-dark");
    bodyCard.textContent = cardData.title; 
    
    cardContainer.append(imgCard, bodyCard);
    toAppendDiv.appendChild(cardContainer);
}
cardLeft.cardOne.forEach(sideCard => {
    cardCread(sideCard,sideLeftCard)
})

const sideLeftCard2 = document.getElementById("sideLeftCard2")
cardLeft.cardtwo.forEach(sideCard => {
    cardCread(sideCard,sideLeftCard2)
})

const sideLeftCard3 = document.getElementById("sideLeftCard3")
cardLeft.cardthree.forEach(sideCard => {
    cardCread(sideCard,sideLeftCard3)
})

const sideLeftCard4 = document.getElementById("sideLeftCard4")
cardLeft.cardfour.forEach(sideCard => {
    cardCread(sideCard,sideLeftCard4)
})


