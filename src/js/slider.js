
let offset = 0;
const sliderLine = document.querySelector('slider__content');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 14.28;
    if (offset > 85.68) {
        offset = 0;
    }
    sliderLine.style.left = -offset + '%';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset + 14.28;
    if (offset > 85.68) {
        offset = 0;
    }
    sliderLine.style.left = -offset + '%';
});