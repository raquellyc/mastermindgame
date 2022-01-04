/*----- constants -----*/

const COLORS = ["orange", "plum", "green", "lightskyblue", "lemonchiffon", "pink"];


/*----- app's state (variables) -----*/

let board;
let curGuessIdx;
let winner;

/*----- cached element references -----*/

const msgEl = document.querySelector("p");
const colorSel = document.querySelector("colorsel");

/*----- event listeners -----*/
colorSel.addEventListener('click', evt);

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

function evt() {
    colorSel.
}

function dimslot(dims) {
    const currslot = document.getElementById("spacemarkers");
        el.style.color = "gray"; 

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

