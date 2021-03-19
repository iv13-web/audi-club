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




let video = document.getElementById("video");
let button = document.querySelector('.button')
let playSVG = document.querySelector('.play-svg')
let pauseSVG = document.querySelector('.pause-svg')
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    video.pause()
  } else {
    video.play()
  }
};

video.onplaying = function() {
  isPlaying = true;
};
video.onpause = function() {
  isPlaying = false;
};

// нажатия на кнопку
button.addEventListener('click', function() {
  togglePlay();
  if (isPlaying == false) {
    playSVG.classList.add('remove');
    pauseSVG.classList.remove('remove');
    button.classList.add('transparent');
  }
  else {
    playSVG.classList.remove('remove');
    pauseSVG.classList.add('remove');
    button.classList.remove('transparent');
  }
})

// нажатия на любое местов в окне видео
video.addEventListener('click', function() {
  togglePlay();
  if (isPlaying == false) {
    playSVG.classList.add('remove');
    pauseSVG.classList.remove('remove')
    button.classList.add('transparent');
  }
  else {
    playSVG.classList.remove('remove');
    pauseSVG.classList.add('remove');
    button.classList.remove('transparent');
  }
})
