import {displayDescription }from "../js/displayDescription.js";

const slideContents = document.querySelectorAll(".slide-content");

slideContents.forEach((slideContent) => {
    slideContent.addEventListener("click", () => {
        displayDescription();
    })
})

