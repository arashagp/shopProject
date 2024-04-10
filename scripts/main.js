let slideIndex = 1;
let remainingTime = 70000;

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

let setTime = () => {
    
    if(remainingTime == 0) return;

    let hours = Math.floor(remainingTime / 3600);
    let minute = Math.floor((remainingTime % 3600) / 60);
    let second = (remainingTime % 3600) % 60;

    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minute;
    document.querySelector('#seconds').innerHTML = second;
}

setInterval(() => {
    remainingTime -= 1;
    setTime();
}, 1000);