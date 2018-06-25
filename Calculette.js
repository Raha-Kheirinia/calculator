
var display; 

function calc(){
    try { 
        display.nodeValue =  eval(display.nodeValue);
    } catch (e) {
        display.nodeValue = "erreur";
    }
}

function clear(){
    display.nodeValue="";
}

function backspace(){
    display.nodeValue = display.nodeValue.slice(0,-1);
}

function addKey(key){
    display.nodeValue += key;
}

function process(key){
    switch (key){
        // clÃ©s spÃ©ciales
        case "C": clear();     break;
        case "â‡": backspace(); break;
        case "=": calc();      break;
        // clÃ©s ordinaires 
        case "/": case "*":
        case "7": case "8": case "9": case "-":
        case "4": case "5": case "6": case "+":
        case "1": case "2": case "3": 
        case "0": case ".": addKey(key);
    }
}

function keyClicked(event){
    process(this.firstChild.nodeValue);
}

function keyPressed(event){
    if(event.keyCode==8){
        process("â‡");
    } else if (event.keyCode==13){
        process("=");
    } else
        process(String.fromCharCode(event.charCode));
    event.preventDefault();
}

function initEventHandlers(){
    display = document.getElementById("display").firstChild;
    var tdList = document.getElementsByTagName("td");
    for (var i=0;i<tdList.length;i++)
        tdList.item(i).addEventListener("click",keyClicked,false);
}

window.addEventListener("load",initEventHandlers,false);
window.addEventListener("keypress",keyPressed,false);