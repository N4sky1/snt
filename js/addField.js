import disableVisible from "./disableVisible.js"
import clickToFunction from "./clickToFunction.js"
import openClosePopup from "./openClosePopup.js"

function addField() {
    let popupWrap = document.querySelector('.popup__add-field')
    let addBtn = document.querySelector('#add-field__add-btn')
    let btnOpen = document.querySelector('.pay__add-place')
    let btnclose = document.querySelector('.add-field__close')
    let inputsWrap = document.querySelector('.add-field__inputs-wrap')
    let textAdd = document.querySelector('.add-field__add-text')
    let btnOk = document.querySelector('.add-field__ok-btn')
    let inputs = [].slice.call(popupWrap.querySelectorAll('input'))

    if (!popupWrap) return

    openClosePopup([btnOpen], [popupWrap, btnclose, btnOk], popupWrap)
    
    inputs.forEach(function(el){
        el.addEventListener('input', checkInputs, false);
    });
    function checkInputs(){
        var empty = inputs.filter(function(el){
        return el.value.trim() === '';
      }).length;
      if (empty === 0) {
        addBtn.classList.remove('btn-primary-disable')
        addBtn.classList.add('btn-primary')
        addBtn.disabled = false
      } else {
        addBtn.classList.remove('btn-primary')
        addBtn.classList.add('btn-primary-disable')
        addBtn.disabled = true
      }
    }
    checkInputs();
    

    addBtn.addEventListener('click', () => {
        if (!addBtn.disabled) {
            disableVisible([inputsWrap, addBtn], [textAdd, btnOk])
        }
        
    })

    btnOk.addEventListener('click', function() {
        disableVisible([textAdd, btnOk], [inputsWrap, addBtn])
        inputs.forEach(a=>a.value='')
        checkInputs()
    })


}


export {addField}