const board = document.querySelector('#container');
let bits = [];
const colorInput = document.querySelector('#color');
const sizeSlider = document.querySelector('#size');
const sizeLabel = document.querySelector('.grid-size');

const clearBtn = document.querySelector('.clear');
const rainbowBtn = document.querySelector('.enable-rainbow');
const shadeBtn = document.querySelector('.enable-shade');
const colorBtn = document.querySelector('.enable-color');

let gridSize = sizeSlider.value;
sizeSlider.addEventListener('input', (e) => {
    sizeLabel.innerText = `${e.target.value} x ${e.target.value}`;
    gridSize = e.target.value;
    addBit(gridSize);
});

let color = colorInput.value;
colorInput.addEventListener('input', (e) => {
    color = e.target.value;
});

let pen = 'color';
colorBtn.onclick = () => {pen = 'color'};
shadeBtn.onclick = () => {pen = 'shade'};
rainbowBtn.onclick = () => {pen = 'rainbow'}

let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true};
document.body.onmouseup = () => {mouseDown = false};


addBit(gridSize);


function addBit(size) {
    deleteBits();
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 1; i <= size * size; i++) {
        container.append(document.createElement('div'));
    }
    bits = document.querySelectorAll('#container>div');//gathers all the bits in a variable
    colorBit();
}


function deleteBits(){
    for(bit of bits){
        bit.remove();
    }
}


function colorBit(){
    bits.forEach(bit => {
        let brgt = 100;
        bit.addEventListener('mouseover', () => {
            if(mouseDown){
                if(pen === 'color'){
                    bit.style.backgroundColor = color;
                } else if(pen === 'shade'){
                    brgt = brgt - 10;
                    bit.style.filter = `brightness(${brgt}%)`;
                } else if(pen === 'rainbow'){
                    bit.style.backgroundColor = `${rainbowBits()}`;
                }
            }
        })
    });
}


function clearBits() {
    addBit(gridSize);
}


function rainbowBits() {
    return `rgb(${randomNr(256)}, ${randomNr(256)}, ${randomNr(256)})`;
}


function randomNr(num) {
    return Math.floor(Math.random() * num);
}


clearBtn.addEventListener('click', clearBits);



