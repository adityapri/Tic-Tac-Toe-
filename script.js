
let music = new Audio("music.mp3");
let gameOverAudio = new Audio("Game Over.mp3");
let turnChange = new Audio("Ting2.mp3");

let gameOver = false; 

let turn = "X";

//change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

//check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== "") {
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " Won";
            gameOver = true;
            gameOverAudio.play();
            
        }
    })
}

//Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnChange.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("turn")[0].innerText = "Turn: " + turn;
            }
            
        }
    })

})
let reset = document.getElementById("reset");
reset.addEventListener('click',() => {
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = 'X';
    gameOver = false;
    document.getElementsByClassName("turn")[0].innerText = "Turn: " + turn;
})