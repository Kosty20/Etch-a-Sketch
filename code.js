const container = document.querySelector('#container');
let boxes = [];
const btn = document.querySelector("body>button");
let x;

btn.addEventListener('click', () => {
    x = +prompt(`Set your drawing board (Max 64x64)`);
    if (typeof x !== 'number' || x < 0 || x > 64) {
        alert(`Please set a number between 0 and 100`)
        x = undefined;
    }
    if (x !== 0) {
        addDiv(x);
    }
})

function addDiv(x) {

    for (let div of boxes) {
        div.remove();
    }

    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    for (let i = 1; i <= x ** 2; i++) {
        container.append(document.createElement('div'));
    }
    boxes = document.querySelectorAll('#container>div');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'red';
        })
    })
}
