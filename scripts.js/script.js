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

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        rewind:true,
        arrows: {
          prev: '.gliderPrev',
          next: '.gliderNext'
        },
        responsive: [
          {
            breakpoint: 700,
            settings: {
              slidesToShow: "auto",
              slidesToScroll: 'auto',
              itemWidth:350,
              duration: 0.5
            }
          }
        ]
      });
  })