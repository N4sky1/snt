import disableVisible from "./disableVisible.js"

 function login() {
    let input = document.querySelector('.login__input')
    let btn = document.querySelector('#login__btn')
    let replaceNumber = document.querySelector('.login__replace-number')
    let replaceCod = document.querySelector('.login__replace-cod')

    if (!input) return

    function getRreplaceNum() {
        if (inputForSms) return
        if (!replace) {
            input.value = "+7 " + input.value
            replace = true
        }
        let length = input.value.length
        if (length === 0) {
            replace = false
            input.setAttribute("placeholder", "Ваш телефон")
        } 
        if (length === 6) input.value = input.value + " "  
        
        if (length === 10) input.value = input.value + " "  
        
        if (length === 13) input.value = input.value + " "  
        if (length < 16) {
            btn.classList.remove("btn-secondary")
            btn.classList.add("btn-secondary-disable")
        }
        if (length === 16) {
            btn.classList.remove("btn-secondary-disable")
            btn.classList.add("btn-secondary")
        }

        if (length === 17) input.value = input.value.slice(0, -1)
    }
    let replace = false 
    let inputForSms = false

    input.addEventListener('input', ()=> {
        getRreplaceNum()
    })
    input.addEventListener('focus', ()=> {
        if (!inputForSms) input.setAttribute("placeholder", "+7 ")
        
        getRreplaceNum()
    })
    btn.addEventListener('click', () => {
        if (btn.classList.contains("btn-secondary")) {
            changeInput(true)
            disableVisible([btn], [replaceCod, replaceNumber])
        }
    })
    replaceNumber.addEventListener('click', () => {
        disableVisible([replaceCod, replaceNumber], [btn])
        changeInput(false)
    })
    input.addEventListener('keydown', function(event) {
        if (event.key === "Backspace") {
            inputForSms = true
            if (input.value[input.value.length - 1] === " ") {
                input.value = input.value.trim()
            }
            input.value.slice(0, -1)
            inputForSms = false
        }
    })

    function changeInput(bull) {
         let data = {
            width: ["220px", ""],
            place: ["Код из СМС", "Ваш телефон"]
        } 
        input.style.width = bull ? data.width[0] : data.width[1]
        input.setAttribute("placeholder", bull ? data.place[0] : data.place[1])
        input.value = ""
        inputForSms = bull
        replace = bull
    }
}

export {login}



