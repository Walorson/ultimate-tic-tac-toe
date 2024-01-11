//// better.js :: library by Szymon Gniadek ////
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','w','x','y','z'];

class Background {
    constructor(red=0, green=0, blue=0, opacity=0.25) {
        let background = document.createElement('div');
        background.setAttribute('class','betterjs-background');
        background.setAttribute('style',`position: absolute;top: 0; left: 0;height: 100%; width: 100%;background-color: rgba(${red},${green},${blue},${opacity});display:flex;flex-direction: column;justify-content:center;align-items:center`);
        document.body.appendChild(background);
    }
    getDiv() { return document.querySelector('.betterjs-background'); }
    insertText(text="Sample Text") {
        let div = document.createElement('div');
        let divText = document.createTextNode(text);
        div.appendChild(divText);
        div.setAttribute("class","betterjs-text");
        div.setAttribute("style",'font-family: sans-serif;font-size: 4rem;text-shadow: 0px 0px 10px rgba(10,10,10, 1);color:white;');
        this.getDiv().appendChild(div);
    }
    insertButton(text="Button", onClickEvent) {
        let button = document.createElement('button');
        let buttonText = document.createTextNode(text);
        button.appendChild(buttonText);
        button.setAttribute("class","betterjs-button");
        button.setAttribute("style","padding: 10px 5px;margin-top: 15px;font-size: 1.2rem;");
        button.addEventListener("click",onClickEvent);
        this.getDiv().appendChild(button);
    }
    remove() {
        this.getDiv().remove();
    }
}
//// ARRAY ////
Array.prototype.delete = function(index) {
    delete this[index];
    let newArray = this.purgeFromUndefined();
    return newArray;
}
Array.prototype.purgeFromUndefined = function() {
    return this.filter(x => x != undefined);
}
//// OBJECT ////
Object.prototype.show = function(display="block") {
    this.style.display = display;
}
Object.prototype.showAnimated = function(display="block") {
    this.style.opacity = 0;

    this.style.display = display;
    setTimeout(() => { this.style.opacity = 1; }, 50);
}
Object.prototype.$showAnimated = function(display="block") {
    try {
        this.css("opacity",0);

        this.css("display",display);
        setTimeout(() => { this.css("opacity",1) }, 1);
    } catch {} 
}
Object.prototype.hide = function() {
    this.style.display = 'none';
}
Object.prototype.hideAnimated = function(time=0.25) {
    time *= 1000;
    this.style.opacity = 0;
    setTimeout(() => { this.style.display = "none" },time);
}
Object.prototype.$hideAnimated = function(time=0.25) {
    try {
        time *= 1000;
        this.css("opacity",0);
        setTimeout(() => { this.css("display","none") },time);
    } catch {}
}
//// STRING ////
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}
String.prototype.replaceAt = function(index, char) {
    return this.slice(0,index)+char+this.slice(index+1,this.length);
}
String.prototype.pushAt = function(index, char) {
    return this.slice(0,index)+char+this.slice(index,this.length);
}
String.prototype.count = function(letter, ignoreCase=false) {
    let regex = "gi";
    if(ignoreCase == true) regex = 'g'; 
    let result = this.match(new RegExp(letter, regex));

    if(result != null) return result.length;
    else return false;
}
String.prototype.isEmpty = function() {
    if(this.length <= 0) return true;
    else return false;
}