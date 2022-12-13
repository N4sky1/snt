import clickToFunction from './clickToFunction.js'
import getSelect from './getSelect.js'
import disableVisible from './disableVisible.js'
import openClosePopup from "./openClosePopup.js"

function pay() {


    unwrap()
    deleteService()
    addService()
}

function unwrap() {
    let unwrapBtn = document.querySelectorAll('.unwrap')
    if (!unwrapBtn) return

    unwrapBtn.forEach(a => {
        a.addEventListener('click', () => {
            let wrap = a.closest('.places__item')
            let item = wrap.querySelector('.places__item-services')
            console.log(item);
            item.classList.toggle("wrap")
            a.classList.toggle("wrap")
        })
    })
}

function deleteService() {
    let deleteBtn = document.querySelectorAll('.places__item-service-delete')
    if (!deleteBtn) return
    
    deleteBtn.forEach(a => {
        a.addEventListener('click', () => {
            let wrap = a.closest('.places__item-service')
            console.log(wrap);
            wrap.classList.add("delete")
        })
    })
}

function addService() {
    let btnAdd = document.querySelector('.places__add-service')
    let popup = document.querySelector('.popup__add-service')
    let close = document.querySelector('.add-service__close')
    let input = document.querySelector('.select-wrap__input')
    let options = document.querySelectorAll('.select-wrap__item')
    let optionsWrap = document.querySelector('.select-wrap__items')
    let thenBtn = document.querySelector('.add-service__btn')
    let iconDel = document.querySelector('.select-wrap__delete')
    let iconBird = document.querySelector('.select-wrap__bird')


    clickToFunction(btnAdd, addPopup)
    
    openClosePopup([btnAdd], [close, popup], popup)
    

    function addPopup() {
        clickToFunction(input, ()=>openOptionWrap(true))
    }
    function changeInputBorders(open) { // изменение бордера у инпута
        let data = {
            boxShadow: open ? "none" : "",
            borderRadius: open ? "8px 8px 0 0" : "",
            border: open ? "2px solid #005BBA" : "",
            borderBottom: open ? "1px solid #C1D7EF" : "",
            get() {
                input.style.boxShadow=this.boxShadow
                input.style.borderRadius=this.borderRadius
                input.style.border=this.border
                input.style.borderBottom=this.borderBottom
            }
        }
        data.get()
    }
    let selectValue // сюда запись выбраного селекта
    options.forEach(a=>{ // отрабатываем клик по опциям
        a.addEventListener('click', ()=>{
            selectValue = a.innerHTML
            input.value = selectValue
            openOptionWrap(false)
            
            thenBtn.classList.add('btn-primary')
            thenBtn.classList.remove('btn-primary-disable')
        })
    })

    input.addEventListener('input', ()=>{ // поиск при вводе в инпут
        options.forEach(a=>{
            let optionValue = a.innerHTML.trim().toLowerCase()
            let inputValue = input.value.trim().toLowerCase()
            if (!inputValue) {
                disableVisible([], [a], false)
                thenBtn.classList.add('btn-primary-disable')
                thenBtn.classList.remove('btn-primary')
                disableVisible([iconDel], [iconBird], false)
                return
            }
            if (optionValue.includes(inputValue)) {
                options.forEach(b=>{
                    disableVisible([b], [], false)
                })
                disableVisible([], [a], false)
            }
            
        })
    })

    iconDel.addEventListener('click', ()=>{ // нажатие по крестику у инпута
        input.value = ''
        disableVisible([iconDel], [iconBird], false)
        openOptionWrap(false)
        iconBird.classList.remove('icon-rotate')
        thenBtn.classList.add('btn-primary-disable')
        thenBtn.classList.remove('btn-primary')
    })

    function openOptionWrap(open) { // открытие и закрытие врапа у опций
        if (open) {
            changeInputBorders(true)
            disableVisible([], [optionsWrap], false)
            iconBird.classList.add('icon-rotate')
            return
        }
        if (input.value)  {
            disableVisible([optionsWrap, iconBird], [iconDel], false)
        } else {
            disableVisible([optionsWrap], [], false)
            iconBird.classList.remove('icon-rotate')
        }
        changeInputBorders(false)
    }

    iconBird.addEventListener('click', ()=>{ // нажатие по галочке
        if (iconBird.classList.contains('icon-rotate')) {
            openOptionWrap(false)
        } else {
            openOptionWrap(true)
        }
    })
}

export {pay}