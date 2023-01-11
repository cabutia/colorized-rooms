const ROOM_COLORS = [
    '\x1b[41m','\x1b[42m','\x1b[43m','\x1b[44m','\x1b[45m','\x1b[46m'
];
const LAYOUT_COLORS = {
    reset: '\x1b[0m',
    door: '\x1b[100m\x1b[2m',
    wall: '\x1b[47m'
}

/**
 * Converts a raw string input into a matrix.
 * @param {string} raw The raw room layout
 * @returns {array} The room matrix
 */
module.exports.toMatrix = (raw) => raw.split('\n').map(row => row.split(''));

/**
 * Checks whether the current cell is a door based on the surrounding cells
 * @param {array} m The matrix
 * @param {number} x X coordinate
 * @param {number} y Y Coordinate
 * @return {bool}
 */
module.exports.isDoor = (m, x, y) => 
    m[y][x] === ' ' &&
    (
        (m[y][x-1] === '#' && m[y][x+1] === '#' && m[y-1][x] !== '#' && m[y+1][x] !== '#') ||
        (m[y][x-1] !== '#' && m[y][x+1] !== '#' && m[y-1][x] === '#' && m[y+1][x] === '#')
    );

/**
 * Checks whether the current cell is empty
 * @param {array} m The matrix
 * @param {number} x X coordinate
 * @param {number} y Y Coordinate
 * @return bool
 */
module.exports.isEmpty = (m, x, y) => m[y][x] === ' ';

let roomIdx = 0;
module.exports.findTargetRoom = (m, x, y) => {
    const left = m[y][x - 1];
    const top = m[y - 1][x];
    if (!['#', 'd', ' '].includes(top)) return top;
    if (!['#', 'd', ' '].includes(left)) return left;
    return roomIdx++;
}

module.exports.getColor = (cell) => {
    switch (true) {
        case typeof cell === 'number':
            return `${ROOM_COLORS[cell % ROOM_COLORS.length]}  ${LAYOUT_COLORS.reset}`;
        case cell === 'd':
            return `${LAYOUT_COLORS.wall}  ${LAYOUT_COLORS.reset}`;
        case cell === '#':
            return `${LAYOUT_COLORS.door}  ${LAYOUT_COLORS.reset}`;
        default:
            return cell;
    }
}