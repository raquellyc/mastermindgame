/*----- constants -----*/

const COLORS = ["orange", "purple", "green", "cyan", "yellow", "pink"];


/*----- app's state (variables) -----*/

let board;
let curGuessIdx;
let winner;

/*----- cached element references -----*/

const msgEl = document.querySelector("p");
const spacemarkersEl = [document.querySelectorAll("#spacemarkers > div")];

/*----- event listeners -----*/

document.querySelector("#spacemarkers")
    .addEventListener("click", handleClick);

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

function handleClick(evt) {
    const colIdx = spacemarkersEl.indexOf(evt.target);
    if (colIdx === -1 || winner) return;
    const colArr = board[colIdx];
    const rowIdx = colArr.indexOf(0);
    colArr[rowIdx] = curGuessIdx;
    turn *= -1;
    winner = scrtCode(colIdx, rowIdx);
    render();

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

function getNewGuess() {
    return {
        code: [null, null, null, null], 
        almost: 0,
        perfect: 0,
    };
}

function scrtCode() {
    let scrtColors = COLORS[Math.floor(math.random() * COLORS.length)];
    el.style.visability = scrtColors ? 'visible' : 'hidden';
        return scrtColors;
}

