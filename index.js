const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", function() {
  navMenu.classList.toggle("show"); // toggle the visibility with a new class
});

 const textarea = document.querySelector("textarea");

  textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
     });
