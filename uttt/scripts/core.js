window.addEventListener("load",() => {
    $('.black').$hideAnimated(0.75);
    $(".map").css('transform','scale(1)');
    turnImage.innerHTML = players[0].insertOnlyImage();
    //const music1 = new Audio('../music/music1.mp3');
    //music1.play();
});

const playersCount = sessionStorage.getItem("playersCount");
let isRoundEnd = false;
const players = [];
const pointsToWin = sessionStorage.getItem("pointsToWin");
const mapDiv = document.querySelector(".map");
const endWindow = document.querySelector(".endWindow");
const crown = document.querySelector(".crown");
const result = document.getElementById("result");
let slots; // document.querySelectorAll(".slot");
const turnImage = document.querySelector(".turnImage");
let turn = 0;

let uttt_map = JSON.parse(sessionStorage.getItem("map"));
conditions = JSON.parse(sessionStorage.getItem('conditions'));

initScoreboard();
loadPlayers();
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
            setFinalResult();
            setTotalMoves();
            displayResult(playerWhosWin.char+" won the match!",true);
            crownChange();
            return;
        }

        crownChange();
        displayResult(playerWhosWin.char+" won the round");
    }

    players.forEach(plr => plr.turn = 0);
    setTimeout(startNewRound,1500);
}
function startNewRound() {
    mapInit(uttt_map.x, uttt_map.y);

    const theBiggestWinPoints = players.reduce((max, plr) => Math.max(plr.winPoints), 0);

    if(theBiggestWinPoints+1 == pointsToWin) {
        setTimeout(() => { displayResult("Match Point") },500);
        setTimeout(() => { isRoundEnd = false; },2000);
    }
    else isRoundEnd = false;

    clearSlots();
}
function initScoreboard() {
    const scoreboard = document.querySelector(".scoreboard");
    for(let i=1; i<=playersCount; i++)
    {
        let text = `<img height="30" width="30" class="p${i}img"><span id="p${i}score">0</span><img height="30" width="30" class="p${i}img">`;
        if(i < playersCount) text += ' : ';
        scoreboard.insertAdjacentHTML("beforeend", text);
    }
}
function setFinalResult() {
    const finalResult = document.getElementById("final-result");
    for(let i=1; i<=playersCount; i++)
    {
        let text = `<img class="p${i}img" src="${players[i-1].character}"><span id="p${i}score">${players[i-1].winPoints}</span><img class="p${i}img" src="${players[i-1].character}">`;
        if(i < playersCount) text += ' : ';
        finalResult.insertAdjacentHTML("beforeend", text);
    }
}
function setTotalMoves() {
    const totalMoves = document.getElementById("total-moves");
    for(let i=1; i<=playersCount; i++)
    {
        let text = `<img src="${players[i-1].character}" class="p${i}img"><span id="totalmovesp${i}">${players[i-1].totalMoves}</span><img src="${players[i-1].character}" class="p${i}img">`;
        if(i < playersCount) text += ' : ';
        totalMoves.insertAdjacentHTML("beforeend", text);
    }
}
function loadPlayers() {
    for(let i=1; i<=playersCount; i++)
    {
        players.push(new Player(i, sessionStorage.getItem("player"+i)));
    }
}