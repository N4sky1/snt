export default function clickToFunction(element, funct) {
    element ? element.addEventListener('click', funct) : ""
}