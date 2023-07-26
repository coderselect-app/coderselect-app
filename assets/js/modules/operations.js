
export class Operations{
    constructor(){

    }
  
    static insertCoder( mainCoder, template, fragment, coder ){

        template.querySelector('.main-app__coder').id = coder.id
        template.querySelector('.main-app__name-coder').textContent = coder.nombre
        template.querySelector('.main-app__avatar-coder').src= coder.url
        let clone = document.importNode(template, true)
        fragment.appendChild(clone)
        mainCoder.appendChild(fragment)

    }

    static startSort( coderList, usedIndices, avatar){

        let randomIndex;

        if(coderList.length > 0){

            if( coderList.length == usedIndices.length){
                usedIndices = []
                alert("ya se han seleccionado todos los coders, se comenzara de nuevo con el proceso de seleccion")
                
            }else{
                do{
                    randomIndex = Math.floor( (Math.random() * coderList.length)+1)
                }while(usedIndices.includes(randomIndex))
    
                usedIndices.push(randomIndex)
    
                let coderFound = coderList.find( coder => coder.id == randomIndex )
                console.log( coderFound)
             
                let coderSelectElement = document.getElementById(`${coderFound.id}`)
                
                coderSelectElement.classList.add('select')
                
                coderFound.seleccionado = true
                avatar.src=coderFound.url
            }
        }
    }

    static resetSort( codersElements){
        const coders = [ ...codersElements]
        coders.forEach( coder => {
            if(coder.classList.contains('select')){
                coder.classList.remove('select')
            }

        } )
    }

}