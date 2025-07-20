class utttConsole {
    constructor() {
        this.visible = false;
        this.output = document.getElementById('utttConsole-output');
        this.input =  document.getElementById('utttConsole-input');
        this.print('Welcome in Ultimate Tic Tac Toe Console!');
    }
    print(text, command=false) {
        if(!command) this.output.innerHTML += `<p>${text}</p>`;
        else this.output.innerHTML += `<p style='color: #333;'>${text}</p>`;
    }
    printError(text) {
        this.output.innerHTML += `<p style='color:red;'>${text}</p>`;
    }
    clear() {
        this.output.innerHTML = '';
    }
    calc(op) {
        let values = [];
        let mathChar;
        if(op.indexOf('+') != -1) mathChar = '+';
        else if(op.indexOf('-') != -1) mathChar = '-';
        else if(op.indexOf('*') != -1) mathChar = '*';
        else if(op.indexOf('/') != -1) mathChar = '/';
        else if(op.indexOf('^') != -1) mathChar = '^';
        else if(op[0] == '!') { //Powrót po prawie 10 miesiącach: 14.03.2023, 15:00 - 13.10.2023, 18:25
            let number = op.slice(1, op.length);
            let result = 1;

                for(let i=1; i<=number; i++) {
                    result *= i; //silnia 
                }

            this.print(result);
            return;
        }

        values.push(Number(op.slice(0, op.indexOf(mathChar))));
        values.push(Number(op.slice(op.indexOf(mathChar)+1, op.length)));

        switch(mathChar) {
            case '+': this.print(values[0] + values[1]); break;
            case '-': this.print(values[0] - values[1]); break;
            case '*': this.print(values[0] * values[1]); break;
            case '/': this.print(values[0] / values[1]); break;
            case '^': this.print(Math.pow(values[0], values[1])); break;
        }
    }
    map(map) {
        sessionStorage.setItem('player1', 'x');
        sessionStorage.setItem('player2', 'circle');
        setDefaultConditions(false);

        conditions = conditions.purgeFromUndefined();
	    sessionStorage.setItem("conditions",JSON.stringify(conditions));
        sessionStorage.setItem("rule_straight_num", 3);
        sessionStorage.setItem("rule_cross_num", 3);

        sessionStorage.setItem('map',JSON.stringify(eval(map)));
        location.href = './uttt/gamemodes/hotseat.html';
    }
    execute() {
        let val = this.input.value;
        if(val.length <= 0) return;

        const valueSetter = ["", ""];
        let valueSetterVal = 0;

        for(let i=0; i<val.length; i++) {
            if(val[i] == " ") {
                valueSetterVal = 1;
                continue;
            }
            valueSetter[valueSetterVal] += val[i];
        }
        let v1 = valueSetter[0];
        let v2 = valueSetter[1];
        this.print("> "+val,true);

        switch(v1) {
            case "rule_straight_enable":
            case "rule_cross_enable": {
                if(v2 == "") {
                    this.showThis(v1);
                    return;
                }

                if(v2 == "false" || v2 == "true") this.setThis(v1,v2);
                else this.printError(`Unexpected value ${v2}. This variable is boolean (True or False).`);
            } break;
            case "rule_straight_num":
            case "rule_cross_num": {
                if(v2 == "") {
                    this.showThis(v1);
                    return;
                }

                if(isNaN(Number(v2))) this.printError(`Unexpected value "${v2}". This variable is integer (Only numbers).`)
                else if(v2 <= 2) this.printError(`Invalid value "${v2}". This variable takes values grater than 2.`);
                else this.setThis(v1,v2);
            } break;
            case 'rule_pointstowin': {
                this.printError(`rule_pointstowin can't be changed, because variable is constant!`);
            } break;
            case 'clear': this.clear(); break;
            case 'echo': this.print(v2); break;
            case 'calc': this.calc(v2); break;
            case 'map': this.map(v2); break;
            case 'hud_visible': this.hudVisible(v2); break;
            default: this.print(`Unknown command "${v1}"`); break;
        }

        this.input.value = '';
        this.output.scrollTo(0, this.output.scrollHeight);
    }
    setThis(v1, v2) {
        sessionStorage.setItem(v1,v2);
        this.print(v1+" has been changed to "+v2+".");
    }
    showThis(v1,v2) {
        this.print(v1+": "+sessionStorage.getItem(v1));
    }
    hudVisible(v2) {
        if(v2 == "") {
            this.showThis("hud_visible", v2);
        }
        else if(v2 == "false" || v2 == "true") {
            this.setThis("hud_visible", v2);
        }   
        else this.printError(`Unexpected value ${v2}. This variable is boolean (True or False).`);
    }
}

const CONSOLE = new utttConsole();

window.addEventListener('keydown',(e) => {
    if(e.key == '`') {
        if(!CONSOLE.visible) {
            $('.console').css('display','block');
            CONSOLE.visible = true;

            setTimeout(() => CONSOLE.input.focus());
        }
        else {
            $('.console').css('display','none');
            CONSOLE.visible = false;
        }
    } 
});
document.getElementById('utttConsole-submit').onclick = () => { CONSOLE.execute(); };
window.addEventListener('keydown',(e) => {
    if(CONSOLE.visible && e.key == 'Enter') CONSOLE.execute();
});