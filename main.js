const input = require('./input');
const h = require('./helpers');

/**
 * Processes the input into a formattable grid
 * @param {array} matrix
 * @return {array} The formatted matrix
 */
const process = (raw) => {
    const matrix = h.toMatrix(raw)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (h.isDoor(matrix, x, y)) matrix[y][x] = 'd'
            if (!h.isEmpty(matrix, x, y)) continue;
            const targetRoom = h.findTargetRoom(matrix, x, y);
            matrix[y][x] = targetRoom;
        }
    }
    return matrix;
}

/**
 * Pretty prints the grid to the console
 * @param {array} matrix 
 */
const printGrid = (matrix) => {
    let str = '';
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            str += h.getColor(matrix[y][x])
        }
        str += '\n';
    }
    console.log(str);
}

input.map((layout, i) => {
    console.log(`Room layout #${i + 1}:\n`)
    const grid = process(layout);
    printGrid(grid);
    console.log();
})