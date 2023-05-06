const panels = document.querySelectorAll('.panel')

console.log(panels)
// NodeList(5) [div.panel.active, div.panel, div.panel, div.panel, div.panel]
console.log(typeof panels)
// object

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
        console.log(panel)

    }
    )

})

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')

    }
    )
}