import  Popup  from "../components/popup/Popup.js"
import disableVisible from "./disableVisible.js"
import {login} from "./login.js"
import {addField} from "./addField.js"
import {pay} from "./pay.js"
import clickToFunction from "./clickToFunction.js"



login()
addField()
pay()

function checkbox() {
    let checkboxes = document.querySelectorAll('.checkbox')
    if (!checkboxes) return
    
    checkboxes.forEach(a => {
        a.addEventListener('click', () => {
            if (a.classList.contains('disable')) return
            a.classList.toggle('active')
            console.log(123);
        })
    })

}

checkbox()


