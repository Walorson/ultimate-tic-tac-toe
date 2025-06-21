class Condition {
    constructor(name='condition', sizes, ...condition) {
        this.name = name;
        this.img = this.name+".png";
        this.sizes = sizes;
        this.size = sizes[0];
        this.condition = condition;
        this.isAdded = false;

        $("#additionalConditions").append(`<div class="conditionChoice" id="conditionChoice-${this.name}"><img src="uttt/conditions/images/${this.img}"><span>${this.name}</span></div>`);
        this.conditionChoice = document.getElementById(`conditionChoice-`+this.name);

        this.conditionChoice.addEventListener("click",() => {
            if(this.isAdded == false) {
                this.add();
            }
            else {
                this.remove();
            }
        });
    }
    add(isMenu = true) {
        this.id = conditions.length;
        conditions.push(conditionsList[this.name]);
        this.conditionChoice.classList.add("choosen");
        let element = `
        <div class="winning-condition" id="winning-condition-${this.name}">
            <img src="uttt/conditions/images/${this.img}"/>
            <div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
                <span>${this.name}</span>
                <select class="match-settings-select" id="${this.name}-select">`;
                    for(let i=0; i<this.sizes.length; i++) {
                        element += `<option>${this.sizes[i]}</option>`;
                    }
                element += `</select>
            </div>
	    </div>`;
        if(isMenu == true)
            document.getElementById("conditions").innerHTML += element;

        sessionStorage.setItem(`rule_${this.name}_enable`,true);

        this.isAdded = true;

        if(isMenu == true) 
        {
            this.update();

            conditions.forEach(item => {
                item.update();
            })
        }
    }
    remove() {
        this.isAdded = false;

        sessionStorage.setItem(`rule_${this.name}_enable`,false);
        this.conditionChoice.classList.remove("choosen");
        document.getElementById("winning-condition-"+this.name).remove();
        delete conditions[this.id];
    }
    update() {
        if(this.isAdded == false) return;

        this.select = document.getElementById(`${this.name}-select`);
        this.select.onchange = () => {
            this.size = this.select.value;
            sessionStorage.setItem(`rule_${this.name}_num`,this.size);
        }

        sessionStorage.setItem(`rule_${this.name}_num`,this.size);
        this.select.value = this.size;
    }
}
let conditions = [];
const addCon = document.getElementById("additionalConditions");
const mainWindow = document.querySelector(".window");
let isAddConOpened = false;
function showConditionWindow() {
    addCon.style.cssText = "opacity: 1; z-index: 4 !important;";
    addCon.style.transform = "translateX(500px)";
    mainWindow.style.transform = "translateX(-150px)";
    isAddConOpened = true;
}
function hideConditionWindow() {
    addCon.style.cssText = "opacity: 0; z-index: -5 !important;";
    addCon.style.transform = "translateX(0)";
    mainWindow.style.transform = "translateX(0)";
    isAddConOpened = false;
}

function addCondition() {
    /*conditions.push(new Condition('square','default.png',[2],[
        [[0,1,0,1],[0,0,1,1]]
    ]));*/
    if(isAddConOpened == false) {
        showConditionWindow();
    }
    else {
        hideConditionWindow();
    }
    conditions.forEach(item => {
        item.update();
    })
}
function setDefaultConditions(isMenu = true) {
    conditions = [];
    conditionStraight.add(isMenu);
    conditionCross.add(isMenu);
}