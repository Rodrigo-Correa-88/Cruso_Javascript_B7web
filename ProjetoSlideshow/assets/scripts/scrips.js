totalSlides = document.querySelectorAll('.slider-item').length;
currentSlide = 0;

document.querySelector('.slider-width').style.width =
 `calc(100vw * )${totalSlides}`;
document.querySelector('.slider-controls').style.heigth =
 `${document.querySelector('.slider').clientHeight}px`;

 function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides -1
    }
    updadeMargin();
 }

 function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updadeMargin();
 }

 function updadeMargin() {
    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider-width').style.marginLeft = 
        `-${newMargin}px`
 }

 setInterval(goNext, 4000)

 