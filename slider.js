const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on') 
}

function nextSlider() { 
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}


console.log(slider)
//-------------------------------------------------------
/* Slide Automático */

let slideInterval //cria uma variavel vazia

function startSlider() {
  slideInterval = setInterval(nextSlider, 2700); //roda normalmente
}

function stopSliderTemporariamente() {
  clearInterval(slideInterval); //para o slide

  //Espera 5 segundos e reinicia
  setTimeout(() => {
    startSlider();
  }, 4000); //5 segundos
}

btnNext.onclick = function() {
  nextSlider(); //avança o slide
  stopSliderTemporariamente(); //pausa e reinicia depois
}

btnPrev.onclick = function() {
  prevSlider(); //volta o slide
  stopSliderTemporariamente(); //pausa e reinicia depois
}

startSlider();


