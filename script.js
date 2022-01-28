const panels = document.querySelectorAll (".panel")

.panels.array.forEach((panel) => {
    panel.addEventListener("click" , () => {
        removeActiveClasses( )
        panel.classList.add("active")
    })
    
})

function removeActiveClasses(){
    panels.forEach(() => {
        panle.classList.remove ("active")
    })
}