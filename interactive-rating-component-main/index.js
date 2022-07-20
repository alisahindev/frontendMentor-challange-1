const rateCard = document.querySelector(".rate");
const rateList = document.querySelector(".rate-list");
const thanksCard = document.querySelector(".thanks");
const submitButton = document.querySelector(".rate-footer__button");

function handleSubmit(event) {
  event.preventDefault();
  setTimeout(() => {
    rateCard.classList.add("hidden");
    thanksCard.classList.remove("hidden");
  }, 200);
}

submitButton.onclick = handleSubmit;

let rate = 0;

function handleRate(event) {
  const selected = rateList.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }
  event.target.classList.add("selected");
  rate = event.target.dataset.rate;
  thanksCard.querySelector(".selected").innerHTML = rate;
}

const rateArr = [1, 2, 3, 4, 5];
rateArr.forEach((rate) => {
  const rateItem = document.createElement("li");
  rateItem.classList.add("level");
  rateItem.dataset.rate = rate;
  rateItem.innerText = rate;
  rateItem.onclick = handleRate;
  rateList.appendChild(rateItem);
});
