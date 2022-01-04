/*----- constants -----*/

const COLORS = ["pink", "orange", "plum", "lightskyblue", "lemonchiffon", "darkseagreen"];


/*----- app's state (variables) -----*/

let board;
let curGuessIdx;
let winner;

/*----- cached element references -----*/

const msgEl = document.querySelector("p");
const colorSel = document.getElementById("colorsel");
const triId = document.getElementById("spacemarkers");

/*----- event listeners -----*/
colorSel.addEventListener('click', function(evt){
    let buttnid = evt.target.id
    let colid = buttnid[3]
    console.log(COLORS[colid])
});

triId.addEventListener("click", function(evt){
    let purpId = evt.target.id
    let columnId = purpId[1]
    renderBoard();
})

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
    // guessObj.code[columnId] = COLORS[colid]

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

