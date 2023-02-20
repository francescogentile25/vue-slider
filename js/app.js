const { createApp } = Vue
const slideElements = document.getElementsByClassName('slide')
let indiceSlideAttiva=0
let direction = 'P'
let times = 0
let autoplay = setInterval(this.changeSlide, 3000)



const option = {
    data() {
        return {
            direction:'P',
            times: 0,
            autoplay : setInterval(this.changeSlide, 3000),
            active:true,
            indiceSlideAttiva : 0,
            slides: [
                {
                    image: './img/01.webp',
                    title: "Marvel's Spiderman Miles Morale",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: './img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: './img/03.webp',
                    title: 'Fortnite',
                    text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
                },
                {
                    image: './img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: './img/05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                },
            ],
            
        }
    },
    methods: {
        goForward() {
            const lastIndex = slideElements.length - 1
            slideElements[indiceSlideAttiva].classList.remove('active')
            if (indiceSlideAttiva < lastIndex) {
                indiceSlideAttiva += 1
            } else {
                indiceSlideAttiva = 0
            }
            slideElements[indiceSlideAttiva].classList.add('active')
        },
        goBack() {
            slideElements[indiceSlideAttiva].classList.remove('active')
            if (indiceSlideAttiva > 0) {
                indiceSlideAttiva--
            } else {
                indiceSlideAttiva = slideElements.length - 1 //last index
            }
            // console.log(slideElements[indiceSlideAttiva])
            slideElements[indiceSlideAttiva].classList.add('active')
        },
        changeSlide() {
            switch (direction) {
                case 'N':
                    this.goForward()
                    break
                case 'P':
                    this.goBack()
                    break
            }
        },
    },
}
const app = createApp(option)
app.mount('#app')
