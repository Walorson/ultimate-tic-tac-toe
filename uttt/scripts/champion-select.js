const charWindow = document.querySelector(".window");
const infoPress = document.getElementById("info-press");
const playersCount = sessionStorage.getItem("playersCount");
let playersConfirmed = 0;

class Character {
    constructor(name) {
        this.name = name;
        this.img = 'uttt/characters/'+name+'.png';
        this.chosen = false;
        this.disabled = false;
        charWindow.innerHTML += `<div class="character" id="${this.name}"><img src="${this.img}"></div>`;
    }
    update() {
        this.div = document.getElementById(this.name);

        this.div.onclick = () => {
            characterList.forEach(character => {
                if(character.chosen == true) {
                    try { character.div.querySelector(".square").remove(); } catch {}
                    this.chosen = false;
                }
            });
            this.div.innerHTML += `<div class="square"></div>`;
            this.chosen = true;
        }
    }
    acceptChoice() {
        this.disabled = true;
        this.div.classList.add("disabled");
        try { this.div.querySelector(".square").remove(); } catch {}
        this.chosen = false;
        this.div.onclick = {};
        sessionStorage.setItem("player"+Number(playersConfirmed+1),this.name);
        playersConfirmed++;

        if(playersConfirmed >= playersCount) {
            startGame();
        }
    }
}
const characterList = [
    new Character('x'),
    new Character('circle'),
    new Character('triangle'),
    new Character('pentagram'),
    new Character('hexagram'),
    new Character('ok'),
    new Character('cross'),
    new Character('warning'),
    new Character('dollar'),
    new Character('hash'),
    new Character('square')
];
const black = document.querySelector('.black');
const loading = document.getElementById('loading');

document.querySelector(".btnApply").addEventListener("click", () => {
    characterList.forEach(character => {
        if(character.chosen == true) {
            character.acceptChoice();
            return;
        }
    });
});

window.addEventListener("load",() => {
    black.hideAnimated(0.75);
    characterList.forEach(item => {
        item.update();
    });
});

function startGame() {
    infoPress.style.display = 'block';
    setTimeout(() => {
        infoPress.style.filter = 'blur(0)';
        infoPress.style.transform = 'scale(1)';
        document.body.style.cursor = "Pointer";

        window.addEventListener("click",(e) => {
            black.showAnimated();
            loading.showAnimated();
            setTimeout(() => {
                loading.hideAnimated();
            },1250);
            setTimeout(() => {
                location.href = 'uttt/gamemodes/hotseat.html';
            },1500);
        });
    });
}