const calculator = document.querySelector('.container')
const keys = calculator.querySelector('.container__keys')
const display = document.querySelector('.container__display')


keys.addEventListener('click',(e)=>{
    const key = e.target
    const action = key.dataset.action

    if(!action){
        if(display.textContent === '0' || display.textContent==="Invalid Syntax"){
            display.textContent = key.textContent
        }else{
            display.textContent += key.textContent
        }
    }

    if(action==="add"){
        display.textContent += "+"
    }

    if(action==="subtract"){
        display.textContent += "-"
    }

    if(action==="multiply"){
        display.textContent += "*"
    }

    if(action==="divide"){
        display.textContent += "/"
    }

    if(action==="clear"){
        display.textContent = "0"
    }
    
    if(action=="equals"){
        try{
            display.textContent = eval(display.textContent)
        }catch(e){
            display.textContent = "Invalid Syntax"
        }
    }
})