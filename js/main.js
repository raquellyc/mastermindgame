/*----- constants -----*/

const COLORS = ["pink", "orange", "plum", "lightskyblue", "lemonchiffon", "darkseagreen"];
let gameScore = 0;


/*----- app's state (variables) -----*/

let board;
let curGuessIdx;
let winner;
let colId;
let columnId;

/*----- cached element references -----*/

const msgEl = document.querySelector("p");
const colorSel = document.getElementById("colorsel");
const triId = document.getElementById("spacemarkers");
const checkbttn = document.getElementById("check");

/*----- event listeners -----*/
colorSel.addEventListener('click', function(evt){
     let buttnId = evt.target.id
    let colId = buttnId[3]
    console.log(COLORS[colId])
})

triId.addEventListener("click", function(evt){
    let purpId = evt.target.id
    let curGuessIdx = purpId[1]
    renderBoard();
})

checkbttn.addEventListener("click", checkGuess);

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
     if (curGuessIdx !== scrtCode) {
        document.getElementById("status").innerHTML += "<p>Not even close!<p>";
        gameScore++;
    //  } else if {
    //      (curGuessIdx )

    //  }
    
}

function renderScore() {
    
    
}

function renderColorPicker() {
   

    
}



function scrtCode() {
    let scrtColors = COLORS[Math.floor(math.random() * code.length)];
    el.style.visability = scrtColors ? 'visible' : 'hidden';
        return scrtCode;
}