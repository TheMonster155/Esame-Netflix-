const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    breakPoints: {
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
})

const hideSection = document.querySelector(".hide-section");

let lastKnownScrollPosition = 0;
 
// funzione per mostrare la sezione
const showSection = (actualScrollPosition) => {
    if (actualScrollPosition > 100) {
        console.log("funzione eseguita");
        hideSection.classList.remove("hide-section")
    }

}


document.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition);
    showSection(lastKnownScrollPosition)
})



const cards = {
    trending: [
        {
            img: './assets/imgs/movies/1.png',
            duration: '2h 15m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            img: './assets/imgs/movies/1.png',
            duration: '1h 45m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Horror', 'Drama', 'Fantasy']
        },
        {
            title: 'VISaVIS',
            img: './assets/imgs/movies/5.png',
            duration: '2h 30m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Comedy', 'Action', 'Romance']
        },
        {
            title: 'The Place',
            img: './assets/imgs/movies/16.png',
            duration: '1h 50m',
            tags: ['Fantasy', 'Drama', 'Thriller']
        },
        {
            title: 'Summertime',
            img: './assets/imgs/movies/4.png',
            duration: '2h 5m',
            tags: ['Animation', 'Action', 'Thriller']
        },
        {
            title: 'I delitti di valhalla',
            img: './assets/imgs/movies/1.png',
            duration: '1h 35m',
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            title: 'Grace',
            img: './assets/imgs/movies/11.png',
            duration: '2h 10m',
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            title: 'Virginia River',
            img: './assets/imgs/movies/1.png',
            duration: '2h 45m',
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            title: 'The English Game',
            img: './assets/imgs/movies/10.png',
            duration: '1h 55m',
            tags: ['Comedy', 'Action', 'Thriller']
        }
    ],
    watch: [
        {
            img: './assets/imgs/movies/1.png',
            duration: '2h 20m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            img: './assets/imgs/movies/1.png',
            duration: '1h 40m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Horror', 'Action', 'Fantasy']
        },
        {
            title: 'VISaVIS',
            img: './assets/imgs/movies/5.png',
            duration: '2h 25m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Comedy', 'Action', 'Thriller']
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
            tags: ['Comedy', 'Action', 'Fantasy']
        },
        {
            title: 'I delitti di valhalla',
            img: './assets/imgs/movies/1.png',
            duration: '1h 25m',
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            title: 'Grace',
            img: './assets/imgs/movies/11.png',
            duration: '2h 15m',
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            title: 'Virginia River',
            img: './assets/imgs/movies/1.png',
            duration: '2h 5m',
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            title: 'The English Game',
            img: './assets/imgs/movies/10.png',
            duration: '1h 45m',
            tags: ['Comedy', 'Action', 'Thriller']
        }
    ],
    new: [
        {
            img: './assets/imgs/movies/1.png',
            duration: '2h 20m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            img: './assets/imgs/movies/1.png',
            duration: '1h 40m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Horror', 'Action', 'Fantasy']
        },
        {
            title: 'VISaVIS',
            img: './assets/imgs/movies/5.png',
            duration: '2h 25m',
            video: "https://www.youtube.com/watch?v=NBowcqQxV1E",
            tags: ['Comedy', 'Action', 'Thriller']
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
            tags: ['Comedy', 'Action', 'Fantasy']
        },
        {
            title: 'I delitti di valhalla',
            img: './assets/imgs/movies/1.png',
            duration: '1h 25m',
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            title: 'Grace',
            img: './assets/imgs/movies/11.png',
            duration: '2h 15m',
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            title: 'Virginia River',
            img: './assets/imgs/movies/1.png',
            duration: '2h 5m',
            tags: ['Comedy', 'Action', 'Thriller']
        },
        {
            title: 'The English Game',
            img: './assets/imgs/movies/10.png',
            duration: '1h 45m',
            tags: ['Comedy', 'Action', 'Thriller']
        }
    ]
};
const createFilmCard = (cardData) => {
    const filmCard = document.createElement("div");
    filmCard.setAttribute("class", "film-card gap-2 shadow-sm");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top object-fit-cover");
    cardImg.setAttribute("src", cardData.img);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body d-flex flex-column justify-content-between text-white bg-dark");

    const iconDiv = document.createElement("div");
    iconDiv.setAttribute("class", "d-flex justify-content-between align-items-center");

    const iconLeftDiv = document.createElement("div");
    iconLeftDiv.setAttribute("class", "d-flex ");

    const ionIconBack = document.createElement("ion-icon");
    ionIconBack.setAttribute("name", "caret-forward-circle-outline");

    const ionIconPlay = document.createElement("ion-icon");
    ionIconPlay.setAttribute("name", "add-circle-outline");

    const ionIconForward = document.createElement("ion-icon");
    ionIconForward.setAttribute("name", "thumbs-up-outline");

    iconLeftDiv.append(ionIconBack, ionIconPlay, ionIconForward);

    const ionIconRight = document.createElement("ion-icon");
    ionIconRight.setAttribute("name", "chevron-down-circle-outline");
    ionIconRight.setAttribute("class", "");

    iconDiv.append(iconLeftDiv, ionIconRight);

    const durationP = document.createElement("p");
    durationP.textContent = cardData.duration;

    const tagsDiv = document.createElement("div");
    tagsDiv.setAttribute("class", "d-flex   ");

    cardData.tags.forEach(tag => {
        const tagSpan = document.createElement("span");
        tagSpan.textContent = tag;
        tagSpan.setAttribute("class", "badge bg-secondary");
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

const cardsContainer2 = document.getElementById("watch");
cards.watch.forEach(card => {
    createCard(card, cardsContainer2);
});

const cardsContainer3 = document.getElementById("new");
cards.new.forEach(card => {
    createCard(card, cardsContainer3);
});