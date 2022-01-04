/*----- constants -----*/

const COLORS = ["red", "purple", "green", "blue", "yellow", "pink"];


/*----- app's state (variables) -----*/

let board;
let curGuessIdx;
let winner;

/*----- cached element references -----*/

const msgEl = document.querySelector("p");

/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
    board = [getNewGuess()];
    curGuessIdx = 0;
    winner = false;
    render();
    //render is always last!
}

function render() {
    if (winner) {
        msgEl.innerHTML = "You Won!";
    } else {
        msgEl.innerHTML = `You have ${9 - curGuessIdx} Guesses!`
    }
    renderBoard();
}

function renderBoard() {
    board.forEach(function (guessObj, rowIdx) { 
        guessObj.code.forEach(function (colorIdx, colIdx) {
            const div = document.getElementById(`c${colIdx}r${rowIdx}`);
            div.style.backgroundColor = COLORS[colorIdx];
        });    
        //to do: render score!
    });
}

function renderScore(){
    board.forEach(function (scoreObj))

}
 

function getNewGuess() {
    return {
        code: [null, null, null, null], 
        almost: 0,
        perfect: 0,
    };
}