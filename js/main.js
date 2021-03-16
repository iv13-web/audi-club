// let swiper = new Swiper('.swiper-container', {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     breakpoints: {
//         500: {
//             slidesPerView: 1
//         },
//         1000: {
//             slidesPerView: 2
//         },
//         1200: {
//             slidesPerView: 3
//         }
//     }
//   });


  let swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        }, 
        1000: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
      }
  });


let playVideoButton = document.querySelector('.play')
let pauseVideoButton = document.querySelector('.pause')

function play() {
  video.play();
  playVideoButton.classList.add('hidden')
  pauseVideoButton.classList.remove('hidden')
}

function pause() {
  video.pause();
  playVideoButton.classList.remove('hidden')
  pauseVideoButton.classList.add('hidden') 
}