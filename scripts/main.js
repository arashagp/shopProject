let slideIndex = 1;
const setSlide = (input , index) => {
    slideIndex = index;
    let item = document.querySelector(`#${input}`);
    let slides = [...document.querySelector('.slides').children];
    slides.forEach((element) => {
        element.classList.remove('active');
    });
    item.classList.add('active')
}

setInterval(() => {
    slideIndex ++;

    if(slideIndex > 3){
        slideIndex = 1;
    }

    setSlide(`slide${slideIndex}` , slideIndex)
}, 4000);