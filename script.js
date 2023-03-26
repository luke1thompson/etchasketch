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

makeGrid(16);
const button = document.querySelector('button');
button.addEventListener('click', newGrid);