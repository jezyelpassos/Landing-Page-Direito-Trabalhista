export function displayDescription() {
        const cardWrapper = document.querySelectorAll(".card-wrapper");
        const descriptCard = document.querySelector(".descript-card");
        const back = document.querySelector(".back");

        cardWrapper.forEach(cardWrapper => {
            const description = cardWrapper.querySelector(".descrition");
            const button = cardWrapper.querySelector(".button");
            button.addEventListener("click", function() {
            descriptCard.innerHTML = description.textContent;
        })
        })
    
        cardWrapper.forEach((cardW) => {
            cardW.classList.add("hidden");
            descriptCard.style.display = "block"   
            back.style.display = "block"
     
            back.addEventListener("click", function() {
                descriptCard.style.display = "none";
                back.style.display = "none"
                cardW.classList.remove("hidden");
            })
        })        
}

