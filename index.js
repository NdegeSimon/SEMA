const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const mic= document.getElementById("mic-icon")

menuIcon.addEventListener("click", function() {
  navMenu.classList.toggle("show"); // toggle the visibility with a new class
});

 const textarea = document.querySelector("textarea");

  textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
     });

     mic.addEventListener("click",function{
        
        })
