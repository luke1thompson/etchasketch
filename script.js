let size = 16;
console.log('go');

function hovering (e) {

}

function mouseLeaving (e) {
    
}

function makeGrid(size) {
    const grid = document.querySelector('.grid');
    let i, j;

    for(i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for ( j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseenter', hovering);
            square.addEventListener('mouseleave', mouseLeaving);
            row.appendChild(square);
        }

        grid.appendChild(row);
    }

    console.log('All rows appended. Grid ready.')
}

makeGrid(size);