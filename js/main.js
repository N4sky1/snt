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


function getUrls() { // для гитхаб пейдж
    let urls = document.querySelectorAll('a')
    if (!window.location.href.includes("snt")) return
    function replaceUrl(href, url) {
        if (href.includes(url)) {
            href = href.replace(url,`snt/${url}`)
            console.log(href);
        }
    }
    urls.forEach(a=>{
        replaceUrl(a.href, "pay.html")
        replaceUrl(a.href, "login.html")
    })
    //console.log(urls[0].href);
}
getUrls()

