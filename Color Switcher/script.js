const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const colorName = document.querySelector('#color-name');
const randomBtn = document.querySelector('.Random-color');

buttons.forEach( (Button) =>{
    Button.addEventListener('click',(event)=>{
        const color = event.target.id;
        body.style.backgroundColor = color;
        colorName.textContent = color.toUpperCase();
    })
});

const reset = document.querySelector('.reset');
reset.addEventListener('click',()=>{
    body.style.backgroundColor = 'white';
    colorName.textContent = "Default";
});

randomBtn.addEventListener('click',()=>{
    const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;
});

