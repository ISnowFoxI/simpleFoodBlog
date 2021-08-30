const menuButton = document.getElementById("menuButton")
const navbar = document.getElementById("navBar")


menuButton.addEventListener("click", ()=> { 
    if(menuButton.checked) { 
        navbar.classList.add("isOpen")
    }
    else { 
        navbar.classList.remove("isOpen")
    }
})

