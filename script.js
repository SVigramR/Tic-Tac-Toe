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
        checkForWin: (board) => {
            // Check rows
            for (let row = 0; row < 3; row++) {
                if (
                    board[row][0] !== "" &&
                    board[row][0] === board[row][1] &&
                    board[row][0] === board[row][2]
                ) {
                    return board[row][0];
                }
            }
            // Check columns
            for (let col = 0; col < 3; col++) {
                if (
                    board[0][col] !== "" &&
                    board[0][col] === board[1][col] &&
                    board[0][col] === board[2][col]
                ) {
                    return board[0][col];
                }
            }
            // Check diagonals
            if (
                board[0][0] !== "" &&
                board[0][0] === board[1][1] &&
                board[0][0] === board[2][2]
            ) {
                return board[0][0];
            }

            if (
                board[0][2] !== "" &&
                board[0][2] === board[1][1] &&
                board[0][2] === board[2][0]
            ) {
                return board[0][2];
            }
            return null;
        },
        checkForTie: (board) => {
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    if (board[row][col] === "") {
                        return false; // Empty cell found, game is not a tie
                    }
                }
            }
            return true; // All cells are filled, game is a tie
        },
    };
}

let gameArray = createGameArray(3, 3, "");

// Get a copy of the 2D array
let copy = gameArray.getGameArray();
console.log(copy);

const gameBox = document.querySelectorAll(".gamebox");
const result = document.querySelector(".result");

gameBox.forEach(function (box, index) {
    box.addEventListener("click", function boxClick(event) {
        let para = document.createElement("p");
        box.appendChild(para);
        para.textContent = currentPlayer;
        switch (index) {
            case 0:
                gameArray.setCell(0, 0, currentPlayer);
                break;
            case 1:
                gameArray.setCell(0, 1, currentPlayer);
                break;
            case 2:
                gameArray.setCell(0, 2, currentPlayer);
                break;
            case 3:
                gameArray.setCell(1, 0, currentPlayer);
                break;
            case 4:
                gameArray.setCell(1, 1, currentPlayer);
                break;
            case 5:
                gameArray.setCell(1, 2, currentPlayer);
                break;
            case 6:
                gameArray.setCell(2, 0, currentPlayer);
                break;
            case 7:
                gameArray.setCell(2, 1, currentPlayer);
                break;
            case 8:
                gameArray.setCell(2, 2, currentPlayer);
                break;
            default:
                break;
        }
        event.target.removeEventListener("click", boxClick);
        let updateArray = gameArray.getGameArray();
        console.log(updateArray);
        if (gameArray.checkForWin(updateArray) === "O") {
            result.textContent = "Player1 Won the Game!"
        }
        if (gameArray.checkForWin(updateArray) === "X") {
            result.textContent = "Player2 Won the Game!"
        }
        if (gameArray.checkForTie(updateArray) === true ) {
            result.textContent = "It's a Tie!"
        }
        switchPlayer();
    });
});
