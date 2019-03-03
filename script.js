const calculator = document.querySelector('#container');
const keys = calculator.querySelector('#calculator-keys');
const display = document.querySelector('#calculator-screen');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
// if button clicked has no data action attribute it is a number key, textContent prop updates calc-screen with concats
    if (!action) {
// if calc-screen displays 0 or previousKeyType(custom attribute) is an elem with 'operator' class, calc-screen displays key clicked
        if (displayNum === '0' || previousKeyType === 'operator') {
            display.textContent = keyContent;
// otherwise, concat elem clicked to calc-screen display
        } else {
            display.textContent = displayNum + keyContent;
        };
    };
// if decimal is clicked, calc-screen decimal is concat to calc-screen display
    if (action ==='decimal') {
        display.textContent = displayNum + '.'
    }
// clicking operator adds is-depressed class to elem
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    )   {
        key.classList.add('is-depressed');
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.firstValue = displayNum;
        calculator.dataset.operator = action;
    };
    if (action === 'clear') {
        display.textContent = 0;
    };
// if 
    if (action === 'equals') {
        const firstValue = calculator.dataset.firstValue;
        console.log(firstValue.split());
        console.log(typeof firstValue);
        const operator = calculator.dataset.operator
        const secondValue = displayNum;
        console.log(secondValue);
        
        const equals = (n1, operator, n2) => {
            let result = '';
            if (operator === 'add'){
                result = parseFloat(n1) + parseFloat(n2);
            } else if (operator === 'subtract'){
                result = parseFloat(n1) - parseFloat(n2);
            } else if (operator === 'multiply'){
                result = parseFloat(n1) * parseFloat(n2);
            } else if (operator === 'divide'){
                result = parseFloat(n1) / parseFloat(n2)
            }
            return result;
        }
        
        display.textContent = equals(displayNum, operator, secondValue);

    
};
// create a shallow-copied Array, iterate through with ForEach remove is-depressed class from elem
    Array.from(key.parentNode.children)
        .forEach (k => k.classList.remove('is-depressed'))
}});
