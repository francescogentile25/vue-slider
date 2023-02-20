const { createApp } = Vue
const slideElements = document.getElementsByClassName('slide')
let indiceSlideAttiva = 0


const option = {
    data() {
        return {

            message: 'ciao',
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
        goForward(){
            const lastIndex =slideElements.length-1
                slideElements[indiceSlideAttiva].classList.remove('active')
                if (indiceSlideAttiva < lastIndex) {
                    indiceSlideAttiva += 1
                } else {
                    indiceSlideAttiva = 0
                }
                slideElements[indiceSlideAttiva].classList.add('active')
                console.log('ciao')
        },
        goBack(){
            slideElements[indiceSlideAttiva].classList.remove('active')
            if (indiceSlideAttiva > 0) {
                indiceSlideAttiva--
            } else {
                indiceSlideAttiva = slideElements.length - 1 //last index
            }
            console.log(slideElements[indiceSlideAttiva])
            slideElements[indiceSlideAttiva].classList.add('active')
    },
    },
}
const app = createApp(option)
app.mount('#app')




// let currentIndex = 0

// // RECUPERIAMO DAL DOM IL CAROSELLO DOVE INSERIRE LE SLIDES
// const carosello = document.querySelector('.carosello')
// console.log(carosello)

// slides.forEach(({ image, text, title }, index) => {
// 	let className = 'slide'
// 	if (index === currentIndex) {
// 		className += ' active'
// 	}
// 	// console.log(index, slide)

// 	const htmlSlide = `
//     <div class="${className}">
//       <img src="${image}" alt="" />
//       <div class="slide__overlay">
//         <h3>${title}</h3>
//         <p>${text}</p>
//       </div>
//     </div>
//   `

// 	carosello.innerHTML += htmlSlide
// })


// // RECUPERATO LE SLIDE DEL CAROSELLO
// let slideElements = document.querySelectorAll('.carosello .slide')
// // slideElements = [...slideElements]
// console.log(slideElements)

// // RECUPERATO I DUE CONTROLLI
// const arrowLeftElement = document.getElementById('arrow-left')
// const arrowRightElement = document.getElementById('arrow-right')

// // console.log(arrowLeftElement, arrowRightElement)

// // slideElements[currentIndex].classList.add('active')

// //AGGANCIAMO GLI EVENT LISTENER AI CONTROLLI
// arrowLeftElement.addEventListener('click', prevSlide)

// arrowRightElement.addEventListener('click', nextSlide)

// function nextSlide() {
// 	const lastIndex = slideElements.length - 1

// 	// if (currentIndex < lastIndex) {
// 	// nascondere la slide attiva
// 	slideElements[currentIndex].classList.remove('active')

// 	if (currentIndex < lastIndex) {
// 		currentIndex += 1
// 	} else {
// 		currentIndex = 0
// 	}

// 	// mostrare la slide successiva
// 	slideElements[currentIndex].classList.add('active')

// 	// aggiornare il currentIndex

// 	// }
// }

// function prevSlide() {
// 	//nascondere la slide attiva
// 	slideElements[currentIndex].classList.remove('active')

// 	if (currentIndex > 0) {
// 		currentIndex--
// 	} else {
// 		currentIndex = slideElements.length - 1 //last index
// 	}

// 	// mostrare la slide precedente
// 	slideElements[currentIndex].classList.add('active')
// 	// aggiornare il currentIndex
// }

// let direction = 'P'
// let times = 0
// let autoplay = setInterval(changeSlide, 3000)

// // clearInterval(autoplay)
// function changeSlide() {
// 	switch (direction) {
// 		case 'N':
// 			nextSlide()
// 			break
// 		case 'P':
// 			prevSlide()
// 			break
// 	}
// }

// carosello.addEventListener('mouseenter', () => {
// 	console.log('mouse enter')

// 	clearInterval(autoplay)
// 	autoplay = undefined
// })

// carosello.addEventListener('mouseleave', () => {
// 	console.log('mouse leave')
// 	if (!autoplay) {
// 		autoplay = setInterval(changeSlide, 3000)
// 	}
// })