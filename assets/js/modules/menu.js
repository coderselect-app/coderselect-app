

export const showMenu = ( toggleId, navId ) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if( toggle && nav ){
        const childs = [ ...toggle.children ]
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
            childs[0].classList.toggle('first-child')
            childs[1].classList.toggle('second-child')
            childs[2].classList.toggle('last-child')
        })
    }
}

