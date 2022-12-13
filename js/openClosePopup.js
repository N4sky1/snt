import disableVisible from "./disableVisible.js"
import clickToFunction from "./clickToFunction.js"

export default function openClosePopup(btnOpen = [], btnClose = [], popup) {
    function open(btn, popup, open) {
        if (open) {
            clickToFunction(btn, ()=>disableVisible([], [popup]))
        } else {
            popup.addEventListener('click', function(e) {
                if (e.target === btn) disableVisible([popup], [])
            })
        }
    }

    btnOpen ? btnOpen.forEach(a => open(a, popup, true)) : ""
    btnClose ? btnClose.forEach(a => open(a, popup, false)) : ""
}