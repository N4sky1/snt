export default function disableVisible(disable, visible, flex = true) {
    function getVisibleOrDisable(elem, visible) {
        if (visible) {
            elem.style.opacity = "0"
            elem.style.display = flex ? "flex" : "block"
            elem.style.transition = "all 0.2s ease 0s"
            setTimeout(getOpacity, 10)
            function getOpacity() {
                elem.style.opacity ="1"
            }
            return
        }
        elem.style.display = "none"
    }


    disable ? disable.forEach(a => getVisibleOrDisable(a, false)) : ""
    visible ? visible.forEach(a => getVisibleOrDisable(a, true)) : ""
}