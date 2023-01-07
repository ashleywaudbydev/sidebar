//----------VARIABLES----------\\
let sidebar = document.querySelector(".sidebar");
let close = document.querySelector(".close");

//----------HAMBURGER TOGGLER----------\\
let hamburger = document.querySelector(".hamburger").addEventListener("click", function(){
    sidebar.classList.toggle("open");

    close.addEventListener("click", function(){
    
        sidebar.classList.remove("open")
    })
})

