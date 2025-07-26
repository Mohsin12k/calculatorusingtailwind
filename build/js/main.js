const display = document.querySelector('.display');
const calculator = document.querySelector('.calculator');
const displayButton = document.querySelector('.displayButton');
const hideButton = document.querySelector('.hideButton');

displayButton.addEventListener('click', ()=>{
    calculator.classList.add('flex');
    calculator.classList.remove('hidden');
});

hideButton.addEventListener('click', ()=>{
    calculator.classList.remove('flex');
    calculator.classList.add('hidden');
})

const operator = (input)=>{
    if(input === 'c'){
        display.value = '';
    } else {
        display.value +=input;
    }
}

const equal = (input)=>{
    if(input === "="){
        try {
            display.value = math.evaluate(display.value);
        } catch(err){
            display.value = "Error";
        }
    }
}

const backSpace = () =>{
    display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', (e)=>{
    if('0123456789./*+-'.includes(e.key)){
        operator(e.key);
    } else if(e.key === "Enter"){
        equal('=');
    } else if(e.key.toLowerCase() === 'c'){
        operator('c');
    } else if (e.key === 'Backspace'){
        backSpace();
    }
})