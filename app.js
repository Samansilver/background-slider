const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn= document.getElementById('right');

let activeSlides = 0;

bgToSlide();
setActiveSlide();

rightBtn.addEventListener('click',() =>{
  activeSlides++;
  if (activeSlides > slides.length - 1) {
    activeSlides = 0;
  }

  bgToSlide();
  setActiveSlide();
});

leftBtn.addEventListener('click',() =>{
  activeSlides--;
  if (activeSlides < 0 ) {
    activeSlides = slides.length - 1;
  }

  bgToSlide();
  setActiveSlide();
});


function bgToSlide(){
  body.style.backgroundImage = slides[activeSlides].style.backgroundImage;
}

function setActiveSlide(){
  slides.forEach(slide => slide.classList.remove('active'));

  slides[activeSlides].classList.add('active');
}