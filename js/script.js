const slideContainer = document.querySelector(".slide-container");
const descriptCard = document.querySelector(".descript-card");
const button = document.querySelector("button");
const slideContents = document.querySelectorAll(".slide-content");
const cardWrapper = document.querySelectorAll(".card-wrapper");
const back = document.querySelector(".back");

slideContents.forEach((slideContent) => {
    slideContent.addEventListener("click", () => {
       desFoqueElement();
    })
})

function desFoqueElement() {
    cardWrapper.forEach((cardW) => {
        cardW.classList.add("hidden");
        descriptCard.style.display = "block"
        
        back.addEventListener("click", function() {
            descriptCard.style.display = "none";
            cardW.classList.remove("hidden");
        })
    })
}
