let map = [];
let charMap = [];

function createMap(mapsrc) {
    $('#icon').attr('href',p1.character);
    $('.map').append(`<img src="../maps/${mapsrc.name}.png">`);
    $('.map').css('width',mapsrc.width);
    $('.map').css('height',mapsrc.height);
    $('.slots').css('gap',mapsrc.grid_gap);
    $('.slots').css('top',mapsrc.top);
    $('.slots').css('grid-template-columns',mapsrc.grid_template);
    $('.slots').css('left',mapsrc.left);
    for(let i=0; i<mapsrc.slots; i++) {
        $('.slots').append(`<div class="slot" style='height:${mapsrc.slot_size}; width:${mapsrc.slot_size}'></div>`);
    }
    slots = document.querySelectorAll(".slot");

    for(let i=0; i<mapsrc.y; i++) {
        map.push(new Array(mapsrc.x).fill(null));
    }
    for(let i=0; i<mapsrc.y+1; i++) {
        charMap.push(new Array(mapsrc.x+1).fill(null));
    }
}

function mapInit(x=3, y=3) {
    let k = 0;
    for(let i=0; i<y; i++) {
        for(let j=0; j<x; j++) {
            map[i][j] = new Slot(k, i, j);
            charMap[i][j] = map[i][j].char;
            k++;
        }
    }

    setDisabledSlots();
    countPlayableSlots();
}
function setDisabledSlots() {
    if(uttt_map.disabled_map == undefined) return;

    for(let i=0; i<uttt_map.disabled_map.length; i++) {
        for(let j=0; j<uttt_map.disabled_map[i].length; j++) {
            map[i][uttt_map.disabled_map[i][j]].slot.classList.add('disabled');
            map[i][uttt_map.disabled_map[i][j]].slot.classList.add('shutdown');
        }
    }
}
function countPlayableSlots() {
    let playableSlots = 0;
    for(let i=0; i<map.length; i++) {
        for(let j=0; j<map.length; j++) {
            if(map[i][j].slot.classList.contains('shutdown') == false) playableSlots++; 
        }
    }
    uttt_map.playableSlots = playableSlots;
}