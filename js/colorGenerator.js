const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('color-btn');
const color = document.getElementById('color');
const bgcolor = document.getElementById('reflect-color');

btn.addEventListener('click', () => {

    
    
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {

        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    bgcolor.style.backgroundColor = hexColor;



})

const getRandomNumber = () => {

    return Math.floor(Math.random() * hex.length )
}
