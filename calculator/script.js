const calculator = document.querySelector('.container')
const keys = calculator.querySelector('.container__keys')
const display = document.querySelector('.container__display')

keys.addEventListener('click',(e)=>{
    const key = e.target
    const action = key.dataset.action

    if(!action){
        if(display.textContent === '0'){
            display.textContent = key.textContent
        }else{
            display.textContent += key.textContent
        }
    }else if(action==="clear"){
        display.textContent = '0'
    }
})