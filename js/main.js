/*----- constants -----*/

const COLORS = ["pink", "orange", "plum", "lightskyblue", "lemonchiffon", "darkseagreen"];
let gameScore = 0;
let scrtCode = [];



/*----- app's state (variables) -----*/

let board;
let curGuessIdx;
let winner;
let selColorIdx;
let colId;
let columnId;


/*----- cached element references -----*/

const msgEl = document.querySelector("p");
const colorSel = document.getElementById("colorsel");
const triId = document.getElementById("spacemarkers");
const checkbttn = document.getElementById("check");

/*----- event listeners -----*/
colorSel.addEventListener('click', function(evt){
    let btnId = evt.target.id;
    selColorIdx = parseInt(btnId[3]);
    render();
})

triId.addEventListener("click", function(evt){
    let purpId = evt.target.id
    let colId = purpId[1]
    renderBoard();
})

checkbttn.addEventListener("click", checkGuess);

/*----- functions -----*/
init();

function init() {
    board = [getNewGuess()];
    curGuessIdx = 0;
    winner = false;
    selColorIdx = 0;
    render();
    //render is always last!
}

//this is the guess count and winner annoucement!
function render() {
    if (winner) {
        msgEl.innerHTML = "You Won!";
    } else {
        msgEl.innerHTML = `You have ${9 - curGuessIdx} Guesses!`
    }
    renderBoard();
    renderColorPicker();
}


function renderBoard() {
    // console.log(board, colId)
    // board[columnId] = COLORS[colId]
    // console.log(board)
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

function makescrtCode() {
    
    let scrtCode = COLORS[Math.floor(math.random() * COLORS.length)];
    return scrtCode;
}