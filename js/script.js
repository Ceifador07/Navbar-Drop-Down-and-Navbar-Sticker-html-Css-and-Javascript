window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("show", this.window.scrollY > 0);
})