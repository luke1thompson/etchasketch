function hovering (e) {
    const square = e.srcElement;
    square.classList.remove('square');
    square.classList.add('hovering');
}

function leaving (e) {
    const square = e.srcElement;
    square.classList.remove('hovering');
    square.classList.add('square');
}

function makeGrid (size) {
    const grid = document.querySelector('.grid');
    let i, j;

    for(i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for ( j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseenter', hovering);
            square.addEventListener('mouseleave', leaving);
            row.appendChild(square);
        }

        grid.appendChild(row);
    }

    console.log('All rows appended. Grid ready.')
}

function newGrid () {
    const grid = document.querySelector('.grid');
    let size = prompt('How many squares pers side do you want?');

    if (!size) {size = 16}

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    makeGrid(size);
}

// function changeColor () {
//     let color = prompt('What color would you like to use?', 'blue').toLowerCase();
//     const stylesheet = document.styleSheets[0];

//     for (let i = 0; i < stylesheet.cssRules.length; i++) {
//         if(stylesheet.cssRules[i].selectorText === '.hovering') {
//             stylesheet.cssRules[i].style.setProperty('background-color', color);
//         }
//     }
// }

makeGrid(16);
const newBtn = document.querySelector('#new');
newBtn.addEventListener('click', newGrid);
// clrBtn.addEventListener('click', changeColor);
// const clrBtn = document.querySelector('#color');