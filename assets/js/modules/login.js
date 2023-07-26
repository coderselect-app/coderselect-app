const txtUser = document.getElementById("user")
const txtPass = document.getElementById("password")
const btnSubmit = document.getElementById("btnSubmit")
const form = document.getElementById("login__form")

let msgError = null

const showError = err => {
    if(err){
        
        form.insertAdjacentHTML("afterend",`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>${err}!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>`)

    }
    
}

 export const startLogin = ()=>{
    btnSubmit.addEventListener("click", e =>{
        e.preventDefault()
        
        let user = txtUser.value
        let pass = txtPass.value
        
        localStorage.setItem('teacher',user)
    
        if( user.length > 0 && pass.length >0 ){
            if(user.toLowerCase() === 'sergio' && pass === '123'){
                window.location.href="./app.html"
            }else{
                msgError = "Error: el nombre y/o contraseña no son correctos"
                showError( msgError )
            }
            
        }else{
            msgError = "Error: el nombre y/o contraseña no puede estar vacío"
            showError( msgError )
        }
    
        
    })
}





