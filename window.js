//Code from 2021
const btnSinglePlayer = document.getElementById("play");
const btnSettings = document.getElementById("settings");
const btnStats = document.getElementById("stats");
const btnQuit = document.getElementById("quit");
const btnHotseat = document.getElementById("hotseat");
const windowQuit = document.querySelector(".btnQuit");
const windowMain = document.querySelector(".window");
const windowContainer = document.querySelector(".window-container");
var musicVolume; var soundVolume; var btnApply; var musicVolumeValue; var soundVolumeValue;
/* Vsync Checked Memory */ var vsync; var isVsyncChecked = false; var vsyncCheckedStartValue = false; var isSettingsWindowOpened = false;
var shadowQuality; var shadowQualityValue = "Medium"; 
var effectsQuality; var effectsQualityValue = "Medium"; 
var modelsQuality; var modelsQualityValue = "High"; 
var antialiasing; var antialiasingValue = "Off";

var saveMapValue;


let typeOfGame = '';
// // // Window Functions // // //

function openWindow() {
    windowMain.style.opacity = 1;
    windowMain.style.zIndex = 10;
    windowQuit.style.cursor = "pointer";

    menu.setAttribute("data-speed", 0.9);
}
function closeWindow() {
    windowMain.style.opacity = 0;
    windowMain.style.zIndex = 0;
    windowQuit.style.cursor = "default";
    conditions.forEach(item => {
        item.remove();
    })
    hideConditionWindow();

    menu.setAttribute("data-speed", 0.9);

    isVsyncChecked = vsyncCheckedStartValue;
}
windowQuit.addEventListener("click", closeWindow);

//// MENU BUTTONS ////
btnSinglePlayer.addEventListener("click",function() {
    return; //you can't play singleplayer (at this moment)
    windowContainer.innerHTML = singleplayerContent;
    openWindow();
})
function checkCheckbox() {
    if(isCheckbox1 == false && isCheckbox2 == false) {
        $(".btnApply").css("filter","brightness(70%)");
        $(".btnApply").css("cursor","default");
    }
    else {
        $(".btnApply").css("filter","brightness(100%)");
        $(".btnApply").css("cursor","pointer");
    }
}
btnHotseat.addEventListener("click",function() {
    windowContainer.innerHTML = hotseatContent;
    typeOfGame = 'hotseat';
    openWindow();
});
btnSettings.addEventListener("click", function () {
    windowContainer.innerHTML = settingsContent;

    musicVolume = document.getElementById("music-volume");
    soundVolume = document.getElementById("sound-volume");
    btnApply = document.querySelector(".btnApply");
    shadowQuality = document.getElementById("shadowQuality");
    effectsQuality = document.getElementById("effectsQuality");
    modelsQuality = document.getElementById("modelsQuality");
    antialiasing = document.getElementById("antialiasing");
    vsync = document.getElementById("vsync");

    //LOAD SAVE SETTINGS//
    musicVolume.value =  musicVolumeValue;
    soundVolume.value =  soundVolumeValue;
    shadowQuality.value = shadowQualityValue;
    effectsQuality.value = effectsQualityValue;
    modelsQuality.value = modelsQualityValue;
    antialiasing.value = antialiasingValue;
    /////////////////////

    musicVolume.oninput = () => {
        document.getElementById("music-volume-value").innerHTML = musicVolume.value;
        var x = musicVolume.value;
        var color = 'linear-gradient(90deg, rgb(255, 74, 74)' + x + '%, rgb(255, 189, 189)' + x + '%)';
        musicVolume.style.background = color;
    }
    soundVolume.oninput = () => {
        document.getElementById("sound-volume-value").innerHTML = soundVolume.value;
        var x = soundVolume.value;
        var color = 'linear-gradient(90deg, rgb(255, 74, 74)' + x + '%, rgb(255, 189, 189)' + x + '%)';
        soundVolume.style.background = color;
    }
    btnApply.onclick = () => {
        if(isVsyncChecked == true) vsync.setAttribute("checked","");
        else vsync.removeAttribute("checked");
        
        /////SAVE CURRENT SETTINGS/////
        settingsContent = windowContainer.innerHTML;
        musicVolumeValue = musicVolume.value;
        soundVolumeValue = soundVolume.value;
        shadowQualityValue = shadowQuality.value;
        effectsQualityValue = effectsQuality.value;
        modelsQualityValue = modelsQuality.value;
        antialiasingValue = antialiasing.value;
        vsyncCheckedStartValue = isVsyncChecked;
        ///////////////////////////////
        closeWindow();
    }
    vsync.onclick = () => {
        if(isVsyncChecked==false) isVsyncChecked = true;
        else  isVsyncChecked = false;
    }

    openWindow();
});
btnStats.addEventListener("click", function () {
    windowContainer.innerHTML = statsContent;
    btnApply = document.querySelector(".btnApply");
    btnApply.onclick = () => closeWindow();
    openWindow();
});
btnQuit.addEventListener("click",function() {
    const fadeQuit = document.getElementById("fadeQuit");
    fadeQuit.style.zIndex = 50;
    fadeQuit.style.opacity = 1;

    setTimeout(window.close,1170);
});