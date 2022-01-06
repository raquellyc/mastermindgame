/*----- constants -----*/

const COLORS = ["pink", "orange", "plum", "lightskyblue", "lemonchiffon", "darkseagreen"];





/*----- app's state (variables) -----*/

let board;
let curGuessIdx;
let winner;
let selColorIdx;
let colId;
let columnId;
let scrtCode;

/*----- cached element references -----*/

const msgEl = document.querySelector("p");
const colorSel = document.getElementById("colorsel");
const checkBtn = document.getElementById("check");
const secretEl = document.getElementById('secretcode');

/*----- event listeners -----*/
colorSel.addEventListener('click', handleColorSelection);

document.getElementById("spacemarkers").addEventListener("click", handleMarkerSelection);

checkBtn.addEventListener("click", checkGuess);

/*----- functions -----*/
init();

function init() {
    board = [getNewGuess()];
    curGuessIdx = 0;
    winner = null;
    selColorIdx = 0;
    scrtCode = getScrtCode();
    render();
    //render is always last!
}

//this is the guess count and winner annoucement!
function render() {
    if (winner === null) {
        msgEl.innerHTML = `You have ${9 - curGuessIdx} Guesses!`
    } else if (winner) {
        msgEl.innerHTML = "You Won!";
    } else {
        msgEl.innerHTML = "You lost!";
    }
    secretEl.style.display = winner === null ? 'none' : 'block';
    renderBoard();
    renderCheckBtn();
    renderColorPicker();
}

function renderCheckBtn() {
    if (winner !== null) return;
    const resultEl = document.getElementById(`r${board.length - 1}`);
    console.log(resultEl)
    resultEl.appendChild(checkBtn);
    checkBtn.disabled = getCurGuess().code.includes(null);
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

function checkGuess() {
     
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