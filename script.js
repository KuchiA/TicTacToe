let p1 = "X"
let p2 = "0"
let scoreP1 = 0
let scoreP2 = 0


let mark = p1
switchPlayer = false

const board = document.querySelector(".board")
const turn = document.querySelector(".turn")
const score1 = document.querySelector(".score1")
const score2 = document.querySelector(".score2")

let boardContents = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function player(mark) {
     this.mark = mark
}

const addToBoardContents = (i) => { 
    mark1 = new player(mark)

    if (boardContents[i] !== 0) {
        return;
    }
    boardContents[i] = mark;
    mark = mark === p1 ? p2 : p1;
    updateTurnText();

    boardContents[i] =  mark1
}

function updateTurnText() {
    turn.textContent = `Player ${mark} Turn`;
}

const render = () => {
    board.textContent = "";
    for(let i = 0; i < boardContents.length; i++) {
        const cell = document.createElement("button");
        cell.classList.add("cell")
        cell.onclick = function () {
            if (boardContents[i] !== 0) {
                return;
                }
            cell.textContent = mark
            addToBoardContents(i)
            playerPointX()
            playerPoint0()
            
        }
        const player = boardContents[i]
        board.appendChild(cell)
    }
}

function empty() {
    render()
    boardContents = [0, 0, 0, 0, 0, 0, 0, 0, 0]
}

const playerPointX = () => {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (const combination of winCombinations) {
        let winningConditionsMet = 0;
        for (const position of combination) {
            if (boardContents[position].mark === "X") {
                winningConditionsMet++;
            }
        }

        if (winningConditionsMet == 3) {
            alert("Player X won")
            scoreP1++
            score1.textContent = `${scoreP1}`
            winningConditionsMet = 0
            gameOver()
            empty()
            return
        }
    }
}

const playerPoint0 = () => {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (const combination of winCombinations) {
        let winningConditionsMet = 0;
        for (const position of combination) {
            if (boardContents[position].mark === "0") {
                winningConditionsMet++;
            }
        }

        if (winningConditionsMet == 3) {
            alert("Player 0 won")
            scoreP2++
            score2.textContent = `${scoreP2}`
            empty()
            gameOver()
            return
        }
    }
}

function gameOver() {
    if (scoreP1 == 3) {
        alert("Player X is the winner")
        render();
        scoreP1 = 0
        scoreP2 = 0
        score1.textContent = "0"
        score2.textContent = "0"
    }
    else if (scoreP2 == 3) {
        alert("player 0 is the winner")
        render()
        scoreP1 = 0
        scoreP2 = 0
        score1.textContent = "0"
        score2.textContent = "0"
    }

}

render();



//add code so that when its player 1s turn the code changes a number to a mark to the array 