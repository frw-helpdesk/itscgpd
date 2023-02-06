console.log("hello");

const daPrompt = document.getElementById("daPrompt");
const subBtn = document.getElementById("submit");

subBtn.addEventListener("click", e => {
    e.preventDefault();
    console.log(daPrompt.value)
})