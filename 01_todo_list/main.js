const linksToggle  = document.querySelector("#links-toggle");
const navLinks = document.querySelector(".cont-nav-links");

linksToggle.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-links");
    console.log(navLinks);
})