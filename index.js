let show = document.getElementById("show");
buttons = document.querySelectorAll("button");
let valueOnScreen = "";
for(item of buttons){
    item.addEventListener('click', (e)=>{ 
        buttonText = e.target.innerText;
        console.log("Button text is", buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            valueOnScreen += buttonText
            show.value = valueOnScreen;
        }
        else if (buttonText == 'C'){
            valueOnScreen = "";
            show.value = valueOnScreen;
        }
        else if (buttonText == '='){
            show.value = eval(valueOnScreen);
        }
        else if (buttonText == 'sin'){
            valueOnScreen = Math.sin(valueOnScreen * Math.PI / 180);
            show.value = valueOnScreen;
        }
        else if (buttonText == 'cos'){
            valueOnScreen = Math.cos(valueOnScreen);
            show.value = valueOnScreen;
        }
        else if (buttonText == 'tan'){
            valueOnScreen = Math.tan(valueOnScreen * Math.PI / 180);
            show.value = valueOnScreen;
        }
        else if (buttonText == 'CE'){
            valueOnScreen = valueOnScreen.slice(0,-1);
            show.value = valueOnScreen;
        }
        else{
            valueOnScreen += buttonText;
            show.value = valueOnScreen;
        }
    })
}