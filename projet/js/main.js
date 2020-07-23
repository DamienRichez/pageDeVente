let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let color3 = document.querySelector('#color3');
let image = document.querySelector('#imageRemove');

color1.addEventListener('click', () => {
    image.src = "img/chaise1.jpg";
});

color2.addEventListener('click', () => {
    image.src = "img/chaise2.jpg";
});

color3.addEventListener('click', () => {
    image.src = "img/chaise3.jpg";
});