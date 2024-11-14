const body = document.body;
const closeModal = document.querySelector(".closeModal");
const showModal = document.querySelector(".showModal");
const modalBg = document.querySelector(".modalBg");
const submitColor = document.querySelector(".input-main input[type='submit']");
const inputColor = document.querySelector(".input-main input[type='text']");
const form = document.querySelector(".form");
const form2 = document.querySelector(".form2");
const aviableColors = ["red", "blue", "green", "black", "white"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
form2.addEventListener("submit", (e) => {
  e.preventDefault();
});
showModal.addEventListener("click", () => {
  modalBg.style.visibility = "visible";
  modalBg.style.opacity = "1";
});
closeModal.addEventListener("click", () => {
  modalBg.style.visibility = "hidden";
  modalBg.style.opacity = "0";
});
submitColor.addEventListener("click", () => {
  const caseFilter = aviableColors.filter(
    (e) => e.toLowerCase() === inputColor.value.toLowerCase()
  );
  caseFilter[0]
    ? (body.style.background = caseFilter[0])
    : alert("ასეთი ფერი არ მოიძებნა");
});

// ----------------- 2 ----------------- //
const enteredNumbers = document.querySelector(".form2 input[type='text']");
const submitAnswer = document.querySelector(".form2 input[type='submit']");
const averagedNumber = document.querySelector(".averageNum");

const getAverageNumber = (numbers) => {
  const numbersLength = enteredNumbers.value.split(":").length;
  console.log(numbersLength);
  let sum = 0;
  const getNumbersArr = numbers.value
    .split(":")
    .map((num) => (Number(num) ? (sum += Number(num)) : NaN));

  if (getNumbersArr.includes(NaN)) {
    alert("Something is wrong, enter only numbers , also dont type 0");
    return;
  }

  const average = sum / numbersLength;
  averagedNumber.innerText = `Average: ${Math.floor(average)}`;
};

submitAnswer.addEventListener("click", (e) => {
  e.preventDefault(); 
  getAverageNumber(enteredNumbers);
});
