const submitBtn = document.getElementById("submit-button");
const rateAgainBtn = document.getElementById("rate-again");
const ratePanel = document.getElementById("rate-panel");
const thankYouPanel = document.getElementById("thank-you-panel");
const selectedRate = document.getElementById("selected-rate");
const ratePanelDisplay = ratePanel.style.display;
const rateButtons = document.querySelectorAll("button.rate-btn");
let curRate = 0;

submitBtn.addEventListener("click", () => {
  if (curRate > 0) {
    ratePanel.style.display = "none";
    thankYouPanel.style.display = "flex";
  }
});

console.log(rateButtons);
for (const button of rateButtons) {
  button.addEventListener("click", () => {
    for (const button2 of rateButtons) {
      button2.classList.remove("pressed");
    }
    button.classList.add("pressed");
    curRate = button.innerHTML;
    selectedRate.innerHTML = button.innerHTML;
  });
}
