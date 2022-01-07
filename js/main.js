/*----- constants -----*/

const COLORS = ["pink", "orange", "plum", "lightskyblue", "lemonchiffon", "darkseagreen"];

/*----- app's state (variables) -----*/

let board;
let winner;
let selColorIdx;
let scrtCode;

/*----- cached element references -----*/

const msgEl = document.querySelector("p");
const colorSel = document.getElementById("colorsel");
const checkBtn = document.getElementById("check");
const secretEl = document.getElementById('secretcode');

/*----- event listeners -----*/
colorSel.addEventListener('click', handleColorSelection);
document.getElementById("spacemarkers").addEventListener("click", handleMarkerSelection);
checkBtn.addEventListener("click", handleCheckGuess);

/*----- functions -----*/
init();

function init() {
    board = [getNewGuess()];
    winner = null;
    selColorIdx = 0;
    scrtCode = getScrtCode();
    render();
    //render is always last!
}

//this is the guess count and winner annoucement!
function render() {
    if (winner === null) {
        msgEl.innerHTML = `You have ${10 - board.length} Guesses!`;
    } else if (winner) {
        msgEl.innerHTML = "You Won!";
    } else {
        msgEl.innerHTML = "You lost!";
    }
    secretEl.style.display = winner !== null ? 'none' : 'grid';
    renderBoard();
    renderCheckBtn();
    renderColorPicker();
}

function renderCheckBtn() {
    if (winner === null) {
        const resultEl = document.getElementById(`r${board.length - 1}`);
        resultEl.appendChild(checkBtn);
        checkBtn.disabled = getCurGuess().code.includes(null);
    }
    checkBtn.style.display = winner === null ? 'flex' : 'none';
}

function getCurGuess() {
    return board[board.length - 1];
}

function handleColorSelection(evt) {
    let btnId = evt.target.id;
    selColorIdx = parseInt(btnId[3]);
    render();
}

function handleMarkerSelection(evt) {
    let markerId = evt.target.id;
    let markerIdx = parseInt(markerId[1]);
    const curGuess = board[board.length - 1];
    curGuess.code[markerIdx] = selColorIdx;
    render();
}

function renderBoard() {
    board.forEach(function (guessObj, rowIdx) { 
        guessObj.code.forEach(function (colorIdx, colIdx) {
            const div = document.getElementById(`c${colIdx}r${rowIdx}`);
            div.style.backgroundColor = COLORS[colorIdx];
        });  
        const resultEl = document.getElementById(`r${rowIdx}`);  
        if (rowIdx !== board.length -1 || winner !== null) {
            let html = '<article>';
            html += '<div class="perfect"></div>'.repeat(guessObj.perfect);
            html += '<div class="almost"></div>'.repeat(guessObj.almost);
            html += '<div class="miss"></div>'.repeat(4 - guessObj.perfect - guessObj.almost);
            html += '</article>';
            resultEl.innerHTML = html;
        } else {
            resultEl.innerHTML = '';
        }
    });
}

function getNewGuess() {
    return {
        code: [null, null, null, null],  
        almost: 0,
        perfect: 0,
    };
}

function handleCheckGuess() {
    let copyCode = [...scrtCode];
    const guess = getCurGuess();
    const code = guess.code;
    //Count perfect matches 
    for (let i = 0; i < 4; i++) {
        if (copyCode[i] === code[i]) {
            guess.perfect++;
            copyCode[i] = null;
        }
    }
    //Count Almost matches
    for (let i = 0; i < 4; i++) {
        const foundIdx = copyCode.indexOf(code[i]);
        if (foundIdx !== -1) {
            guess.almost++;
            copyCode[foundIdx] = null;
            
        }
    }
    if (guess.perfect === 4) {
        winner = true;
    } else {
        board.push(getNewGuess());
    }
    render();
}

function renderColorPicker() {
    let html = "";
    COLORS.forEach(function(color, idx) {
        const activeColor = idx === selColorIdx ? 'class="selected-color"' : "" ;
        html += `<div ${activeColor} id="col${idx}"></div>`;
    });
    colorSel.innerHTML = html;
}

function getScrtCode() {
    const code = [];
    for (let i = 0; i < 4; i++) {
        code.push(Math.floor(Math.random() * COLORS.length));
    }
    return code;
}

