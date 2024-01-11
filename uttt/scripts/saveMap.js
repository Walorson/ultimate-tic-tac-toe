function saveMap(name) {
    saveMapValue = name;
    switch(saveMapValue) {
        case 1: saveMapValue = uttt_3x3; break;
        case 2: saveMapValue = uttt_4x4; break;
        case 3: saveMapValue = uttt_5x5; break;
        case 4: saveMapValue = uttt_6x6; break;
        case 5: saveMapValue = uttt_8x8; break;
        case 6: saveMapValue = uttt_triangle; break;
        case 7: saveMapValue = uttt_hexagon; break;
        case 8: saveMapValue = uttt_rectangle; break;
        case 9: saveMapValue = uttt_curve; break;
    }
    sessionStorage.setItem('map',JSON.stringify(saveMapValue));
    windowContainer.style.opacity = 0;

    setTimeout(function(){
        if(typeOfGame == 'hotseat') 
            windowContainer.innerHTML = hotseatSettingsContent;
        else 
            windowContainer.innerHTML = singleplayerSettingsContent;

        setDefaultConditions();
        $("#match-settings-image").html(`<img src="img/${saveMapValue.name}.png">`); //Ustaw obrazek mapy

        /*document.querySelectorAll(".winning-condition").forEach(item => {
            const checkbox = item.querySelector("input");
            const select = item.querySelector("select");
            const image = item.querySelector("img");
            item.addEventListener("click",() => {
                if(!checkbox.checked) {
                    select.setAttribute('disabled',';');
                    image.style.opacity = 0.55;
                }
                else {
                    select.removeAttribute("disabled");
                    image.style.opacity = 1;
                }
            });
        });*/

        document.querySelectorAll('.match-settings-select').forEach((item, index) => {
            for(var i=4; i<=saveMapValue.x; i++) {
                item.innerHTML += '<option>'+i+'</option>';
            }
            
            item.addEventListener("change",() => {
                switch(index) {
                    case 0: sessionStorage.setItem("rule_straight_num",item.value); break;
                    case 1: sessionStorage.setItem("rule_cross_num",item.value); break;
                }
            })
        });
        
        if(saveMapValue.default_straight_num != undefined) sessionStorage.setItem("rule_straight_num",saveMapValue.default_straight_num);
        if(saveMapValue.default_cross_num != undefined) sessionStorage.setItem("rule_cross_num",saveMapValue.default_cross_num);
        /*checkbox3 = document.getElementById("match-settings-checkbox3");
        checkbox3.onclick = function(){
            if(isCheckbox3 == false) {
                isCheckbox3 = true;
                document.getElementById("match-settings-custom-text").style.opacity = 1;
                document.querySelector(".add-custom-winning").style.opacity = 1;
                document.getElementById("match-settings-img3").style.opacity = 1;
                document.getElementById("customcondition-link").setAttribute("href","customcondition.html");
            }
            else {
                isCheckbox3 = false;
                document.getElementById("match-settings-custom-text").style.opacity = 0.5;
                document.querySelector(".add-custom-winning").style.opacity = 0.5;
                document.getElementById("match-settings-img3").style.opacity = 0.5;
                document.getElementById("customcondition-link").setAttribute("href","#");
            }
            checkCheckbox();
        }*/

        windowContainer.style.opacity = 1;
    },275);
}