const tiles = document.querySelectorAll(".tile")
const hamburgerButton = document.querySelector(".hamburger")
const head = document.querySelector("header")
const mobileNavigation = document.querySelector(".nav-mobile")
const hamburgerClose = document.querySelector(".close")

tiles.forEach(tile => {
    tile.addEventListener("mouseover", () => {
        h3 = tile.querySelector("h3")
        h3.classList.remove("text-white");
        h3.classList.add("text-black");
    });

    tile.addEventListener("mouseleave", () => {
        h3 = tile.querySelector("h3")
        h3.classList.remove("text-black");
        h3.classList.add("text-white");
    });
});

hamburgerButton.addEventListener("click", ()=>{
    head.classList.remove("py-20")
    head.classList.remove("px-6")
    mobileNavigation.style.display = "block"
})

hamburgerClose.addEventListener("click", ()=>{
    head.classList.add("py-20")
    head.classList.add("px-6")
    mobileNavigation.style.display = "none"
})