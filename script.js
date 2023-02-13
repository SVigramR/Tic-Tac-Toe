function createGameArray(row, column, value) {
    let array = [];
    for (let i = 0; i < row; i++) {
        array[i] = [];
        for (let j = 0; j < column; j++) {
            array[i][j] = value;
        }
    }

    return {
        setCell: (row, col, val) => {
            array[row][col] = val;
        },
        getGameArray: () => JSON.parse(JSON.stringify(array)),
        // checkForWin: /* some checkForWin function */
    };
}

let gameArray = createGameArray(3, 3, "");
// Set a cell in the 2D array
gameArray.setCell(0, 1, "O");

// Get a copy of the 2D array
let copy = gameArray.getGameArray();
console.log(copy);

const gameboard = () => {
    // game board creation code here
};

const validate = () => {
    // TTT validation code here
};
