const player1 = "O";
const player2 = "X";

let currentPlayer = player1;

function switchPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}

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

// Get a copy of the 2D array
let copy = gameArray.getGameArray();
console.log(copy);

const gameboard = () => {
    // game board creation code here
};

const validate = () => {
    // TTT validation code here
};

const gameBox = document.querySelectorAll(".gamebox");

gameBox.forEach(function (box, index) {
    box.addEventListener("click", function boxClick(event) {
        const clickedCell = event.target;
        clickedCell.textContent = currentPlayer;
        let updateArray;
        switch (index) {
            case 0:
                gameArray.setCell(0, 0, currentPlayer);
                updateArray = gameArray.getGameArray();
                console.log(updateArray);
                event.target.removeEventListener("click", boxClick);
                break;
            case 1:
                gameArray.setCell(0, 1, currentPlayer);
                updateArray = gameArray.getGameArray();
                console.log(updateArray);
                event.target.removeEventListener("click", boxClick);
                break;
            case 2:
                gameArray.setCell(0, 2, currentPlayer);
                updateArray = gameArray.getGameArray();
                console.log(updateArray);
                event.target.removeEventListener("click", boxClick);
                break;
            case 3:
                gameArray.setCell(1, 0, currentPlayer);
                updateArray = gameArray.getGameArray();
                event.target.removeEventListener("click", boxClick);
                console.log(updateArray);
                break;
            case 4:
                gameArray.setCell(1, 1, currentPlayer);
                updateArray = gameArray.getGameArray();
                event.target.removeEventListener("click", boxClick);
                console.log(updateArray);
                break;
            case 5:
                gameArray.setCell(1, 2, currentPlayer);
                updateArray = gameArray.getGameArray();
                event.target.removeEventListener("click", boxClick);
                console.log(updateArray);
                break;
            case 6:
                gameArray.setCell(2, 0, currentPlayer);
                updateArray = gameArray.getGameArray();
                event.target.removeEventListener("click", boxClick);
                console.log(updateArray);
                break;
            case 7:
                gameArray.setCell(2, 1, currentPlayer);
                updateArray = gameArray.getGameArray();
                event.target.removeEventListener("click", boxClick);
                console.log(updateArray);
                break;
            case 8:
                gameArray.setCell(2, 2, currentPlayer);
                updateArray = gameArray.getGameArray();
                event.target.removeEventListener("click", boxClick);
                console.log(updateArray);
                break;
            default:
                break;
        }
        switchPlayer();
    });
});