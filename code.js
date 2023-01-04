const board = document.querySelector('#container');
const colorInput = document.querySelector('#color');
const clearBtn = document.querySelector('.clear');
const rainbowBtn = document.querySelector('.rainbow');
const sizeSlider = document.querySelector('#size');
const sizeLabel = document.querySelector('.grid-size');
let bits = [];

let gridSize = sizeSlider.value;
let color = colorInput.value;


addBit(gridSize);


sizeSlider.addEventListener('input', (e) => {
    sizeLabel.innerText = `${e.target.value} x ${e.target.value}`;
    gridSize = e.target.value;
    addBit(gridSize);
});


colorInput.addEventListener('input', (e) => {
    color = e.target.value;
})


function addBit(size) {
    deleteBits();
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 1; i <= size ** 2; i++) {
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
        bit.addEventListener('mouseover', () => {
            bit.style.backgroundColor = `${rainbowBits()}`;
        });
    });
}

function clearBits() {
    for(bit of bits){
        bit.style.backgroundColor = 'white';
    }
}


function rainbowBits() {
    return `rgb(${randomNr(256)}, ${randomNr(256)}, ${randomNr(256)})`;
}


function randomNr(num) {
    return Math.floor(Math.random() * num);
}


clearBtn.addEventListener('click', clearBits);



