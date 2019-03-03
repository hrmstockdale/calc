// indivdual refs for decimal & clear btns
let decimalBtn = document.getElementById("decimal");
let clearBtn = document.getElementById("clear");
// refs for screen display
let displayValScreen = document.getElementById("screen");


let displayVal = '0';
let initialVal;
let evalStringArr = [];

// seperate refs for numbers & operators respectively
let calcNumBtns = document.getElementsByClassName("btn-number");
let calcOperatorBtns = document.getElementsByClassName("btn-operator");


let updateDisplayVal = (clickObj) => {
// variavle btnText = Content of elem(clickObj) = number keys 0-9  
    let btnText = clickObj.target.innerText;

    if (displayVal === '0')
        displayVal = '';
//the screen displays concats of number keys 0-9    
    displayVal += btnText;
    displayValScreen.innerText = displayVal;
    

}
// variable operator = Content of elem(clickObj) = +,-,*,/,=
let performOperation = (clickObj) => {
    let operator = clickObj.target.innerText;

// at the point of 
    switch (operator){
        case '+':
            initialVal = displayVal;
            displayVal = '';
            displayValScreen.innerText = displayVal;
            evalStringArr.push(initialVal);
            evalStringArr.push('+');
            break;

        case '-':
            initialVal = displayVal;
            displayVal = '';
            displayValScreen.innerText = displayVal;
            evalStringArr.push(initialVal);
            evalStringArr.push('-');
            break;

        case '÷':
            initialVal = displayVal;
            displayVal = '';
            displayValScreen.innerText = displayVal;
            evalStringArr.push(initialVal);
            evalStringArr.push('/');
            break;

        case 'x':
            initialVal = displayVal;
            displayVal = '';
            displayValScreen.innerText = displayVal;
            evalStringArr.push(initialVal);
            evalStringArr.push('*');
            break;

        case '=':
            evalStringArr.push(displayVal);
            let evaluation = eval(evalStringArr.join(' '));
            displayVal = evaluation + '';
            displayValScreen.innerText = displayVal;
            evalStringArr =[];
            break;
        default:
            break;
    }
}

// iterate over numbers, click provides param for updateDisplayVal 
for (var i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

// iterate over numbers, click provides param for performOperation 
for (var i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

// clear screen display and empty Arr of number strings pushed in their from previous clicks
clearBtn.onclick = () => {
    displayVal = '';
    initialVal = undefined; 
    let evalStringArr = [];
    displayValScreen.innerHTML = displayVal;
}

// check: provided there is no existing decimal, decimal is concated to displayVal
decimal.onclick = () => {
    if (!displayVal.includes('.'))
        displayVal += '.';
    displayValScreen.innerHTML = displayVal;
}
