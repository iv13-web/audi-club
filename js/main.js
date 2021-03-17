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


let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let video = document.getElementById('video')

// Запуск видео по клику на кнопку play
playButton.addEventListener('click', function() {
  video.play();
  this.classList.add('remove')
  pauseButton.classList.remove('remove')
})

// Пауза видео по клику на кнопку pause
pauseButton.addEventListener('click', function () {
  video.pause();
  playButton.classList.remove('remove')
  this.classList.add('remove') 
})

// Скрытие кнопки pause при перемещении курсора с неё
pauseButton.addEventListener('mouseleave', function() {
  pauseButton.classList.add('transparent')
})

// Показ кнопки pause при перемещении курсора с неё
pauseButton.addEventListener('mouseenter', function() {
  pauseButton.classList.remove('transparent')
}, false)

// Показ кнопки play при нажатии в любое место на видео
video.addEventListener('click', function () {
  playButton.classList.remove('remove')
  video.pause();
})