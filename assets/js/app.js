
import {Coder} from "./modules/coder.js"
import { Operations } from "./modules/operations.js"


const coderList = []
let usedIndices = []

const txtCoder = document.getElementById("add-coder__text")
const btnCoder = document.getElementById("add-coder__button")
const btnStart = document.getElementById("button-start")
const btnReset = document.getElementById("button-reset")
const list = document.getElementById('main-app__list')
const avatar = document.getElementById('main-app__avatar-select')
const userName = document.getElementById("contacto__title")
const mainCoder = document.getElementById("main-app__list")
const template = document.getElementById("coder-template").content
const fragment = document.createDocumentFragment()

let user = localStorage.getItem('teacher')
userName.textContent = `Prof. ${user}`

const toggleButton = (btnStartState, btnResetState)=>{
    btnStart.disabled = btnStartState
    btnReset.disabled = btnResetState

    if( btnStart.disabled){
        btnStart.classList.add('disabled')
    }else{
        btnStart.classList.remove('disabled')
    }

    if( btnReset.disabled){
        btnReset.classList.add('disabled')
    }else{
        btnReset.classList.remove('disabled')
    }
}



toggleButton( true, true)

btnCoder.addEventListener("click", event =>{

    if( !txtCoder.value==''){
        let coder = new Coder( Coder.valor, txtCoder.value,false,`assets/img/avatar-${Coder.valor}.png`)
   
        Operations.insertCoder(mainCoder, template, fragment, coder)

        if( !list.classList.contains('show')){
            list.classList.add('show')
        }

        txtCoder.value=""
        Coder.valor++
        coderList.push(coder)
        toggleButton(false, true)
    }
})

btnStart.addEventListener("click", event =>{
    toggleButton(true, false)
    
    Operations.startSort( coderList, usedIndices, avatar )
})


btnReset.addEventListener("click", e =>{

    toggleButton(false,true)
    
    const elements = document.querySelectorAll('.main-app__coder')

    Operations.resetSort( elements)

})




