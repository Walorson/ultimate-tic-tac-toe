window.addEventListener("load",() => {
    $('.black').$hideAnimated(0.75);
    $(".map").css('transform','scale(1)');
    turnImage.innerHTML = p1.insertOnlyImage();
    //const music1 = new Audio('../music/music1.mp3');
    //music1.play();
});

let isRoundEnd = false;
const p1 = new Player(1, sessionStorage.getItem("player1") );
const p2 = new Player(2, sessionStorage.getItem("player2") );
const pointsToWin = sessionStorage.getItem("pointsToWin");
const mapDiv = document.querySelector(".map");
const endWindow = document.querySelector(".endWindow");
const crown = document.querySelector(".crown");
const result = document.getElementById("result");
let slots; // document.querySelectorAll(".slot");
const turnImage = document.querySelector(".turnImage");
let turnX = true;

let uttt_map = JSON.parse(sessionStorage.getItem("map"));
conditions = JSON.parse(sessionStorage.getItem('conditions'));

createMap(uttt_map);
mapInit(uttt_map.x, uttt_map.y);


//////// FUNCTIONS /////////
function displayResult(text, endMatch=false) {
    result.textContent = text;

    mapDiv.style.transform = "scale(0.95)";
    mapDiv.style.filter = "brightness(85%)";

    result.classList.add('result');
    result.classList.remove('none');
    result.style.opacity = 1;
    setTimeout(() => {
        result.classList.add('none');
        result.classList.remove('result');
        if(endMatch) endWindow.showAnimated();
    },2000);
    setTimeout(() => {
        result.style.opacity = 0;
        mapDiv.style.transform = "scale(1)";
        mapDiv.style.filter = null;
    },1500);
}

function endRound(playerWhosWin) {
    isRoundEnd = true;

    if(playerWhosWin == null) {
        displayResult("Tie");
    }
    else {
        playerWhosWin.winPoints++;
        playerWhosWin.updateScore();

        if(playerWhosWin.winPoints >= pointsToWin) {
            $("#winnerImg").attr('src',playerWhosWin.character);
            $("#winnerp1").html(p1.winPoints);
            $("#winnerp2").html(p2.winPoints);
            $("#totalmovesp1").html(p1.totalMoves);
            $("#totalmovesp2").html(p2.totalMoves);
            displayResult(playerWhosWin.char+" won the match!",true);
            crownChange();
            return;
        }

        crownChange();
        displayResult(playerWhosWin.char+" won the round");
    }

    p1.turn = 0; p2.turn = 0;
    setTimeout(startNewRound,1500);
}
function startNewRound() {
    mapInit(uttt_map.x, uttt_map.y);
    if(p1.winPoints+1 == pointsToWin || p2.winPoints+1 == pointsToWin) {
        setTimeout(() => { displayResult("Match Point") },500);
        setTimeout(() => { isRoundEnd = false; },2000);
    }
    else isRoundEnd = false;

    clearSlots();
}