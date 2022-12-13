import clickToFunction from './clickToFunction.js'
import disableVisible from './disableVisible.js'

export default class GetSelect {
    input
    options 
    optionsWrap
    thenBtn
    iconDel 
    iconBird 

    initSelect() {
        clickToFunction(this.input, ()=>this.openOptionWrap(true))
        this.listenOptionsClick()
        this.getSearch()
        this.getExitClick()
        this.getIconBirdClick()

    }
    changeInputBorders = (open) => { // изменение бордера у инпута

        this.input.style.boxShadow= open ? "none" : ""
        this.input.style.borderRadius= open ? "8px 8px 0 0" : ""
        this.input.style.border= open ? "2px solid #005BBA" : ""
        this.input.style.borderBottom= open ? "1px solid #C1D7EF" : ""

    }
    selectValue = ""
    listenOptionsClick = () => {
        this.options.forEach(a=>{ // отрабатываем клик по опциям
            a.addEventListener('click', ()=>{
                this.selectValue = a.innerHTML
                this.input.value = this.selectValue
                this.openOptionWrap(false)
                
                this.thenBtn.classList.add('btn-primary')
                this.thenBtn.classList.remove('btn-primary-disable')
            })
        })
    }
    getSearch = () =>  {
        this.input.addEventListener('input', ()=>{ // поиск при вводе в инпут
            this.options.forEach(a=>{
                let optionValue = a.innerHTML.trim().toLowerCase()
                let inputValue = this.input.value.trim().toLowerCase()
                if (!inputValue) {
                    disableVisible([], [a], false)
                    this.thenBtn.classList.add('btn-primary-disable')
                    this.thenBtn.classList.remove('btn-primary')
                    disableVisible([this.iconDel], [this.iconBird], false)
                    return
                }
                if (optionValue.includes(inputValue)) {
                    this.options.forEach(b=>{
                        disableVisible([b], [], false)
                    })
                    disableVisible([], [a], false)
                }
                
            })
        })
    }
    getExitClick = () =>  {
        this.iconDel.addEventListener('click', ()=>{ // нажатие по крестику у инпута
            if (this.input.disabled) return
            this.input.value = ''
            disableVisible([this.iconDel], [this.iconBird], false)
            this.openOptionWrap(false)
            this.iconBird.classList.remove('icon-rotate')
            this.thenBtn.classList.add('btn-primary-disable')
            this.thenBtn.classList.remove('btn-primary')
        })
    }
    openOptionWrap = (open) => { // открытие и закрытие врапа у опций
        if (open) {
            this.changeInputBorders(true)
            disableVisible([], [this.optionsWrap], false)
            this.iconBird.classList.add('icon-rotate')
            return
        }
        if (this.input.value)  {
            disableVisible([this.optionsWrap, this.iconBird], [this.iconDel], false)
        } else {
            disableVisible([this.optionsWrap], [], false)
            this.iconBird.classList.remove('icon-rotate')
        }
        this.changeInputBorders(false)
    }
    getIconBirdClick = () => {
        this.iconBird.addEventListener('click', ()=>{ // нажатие по галочке
            if (this.iconBird.classList.contains('icon-rotate')) {
                this.openOptionWrap(false)
            } else {
                this.openOptionWrap(true)
            }
        })
    }
}