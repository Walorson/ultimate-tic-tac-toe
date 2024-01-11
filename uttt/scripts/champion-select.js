const charWindow = document.querySelectorAll(".window");
const infoPress = document.getElementById("info-press");
const playersCount = 2;
let playersConfirmed = 0;

class Character {
    constructor(name) {
        this.name = name;
        this.img = 'uttt/characters/'+name+'.png';
        this.chosen = false;
        charWindow[0].innerHTML += `<div class="character" id="character-${this.name}"><img src="${this.img}"></div>`;
        charWindow[1].innerHTML += `<div class="character" id="character-${this.name}"><img src="${this.img}"></div>`;
        charWindow.forEach((item, index) => {
            item.querySelector(".btnApply").onclick = () => {
                item.style.filter = "grayscale(100%)";
                item.style.transform = "scale(0.9)";
                item.innerHTML += '<div class="block"></div>';
                playersConfirmed++;

                if(playersConfirmed >= 1 && index == 0) {
                    charWindow[1].querySelector('.block').remove();
                    charWindow[1].classList.remove('not-touched-yet');
                }
                if(playersConfirmed >= 2) startGame();
            }
        });
    }
    update() {
        this.div = document.querySelectorAll("#character-"+this.name);
        this.div.forEach((item, index) => {
            item.onclick = () => {
                characterList.forEach(character => {
                    if(character.chosen == true) {
                        try { character.div[index].querySelector(".square").remove(); } catch {}
                        this.chosen = false;
                    }
                });
                item.innerHTML += `<div class="square"></div>`;
                sessionStorage.setItem("player"+Number(index+1),this.name)
                this.chosen = true;
            }
        });
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
    new Character('hash')
];
const black = document.querySelector('.black');
const loading = document.getElementById('loading');

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
    });
    window.addEventListener("keypress",(e) => {
        if(e.key == ' ') {
            black.showAnimated();
            loading.showAnimated();
            setTimeout(() => {
                loading.hideAnimated();
            },1250);
            setTimeout(() => {
                location.href = 'uttt/gamemodes/hotseat.html';
            },1500);
        }
    });
}