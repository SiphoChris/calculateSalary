let submitBtn = document.querySelector("#send-form");
let calculateBtn = document.querySelector("#calculate");
let isEmployed = document.querySelector("#job");
let selectedOption = isEmployed.options;
let hiddenDiv = document.querySelector(".hidden-div");
let payRate = document.querySelector("#rate");
let workingHours = document.querySelector("#hours");
let displaySalary = document.querySelector("#calc-salary");
let msg = document.querySelector('#msg')
const taxRate = 85 / 100; //15% current vat in South Africa
let result = null;

submitBtn.addEventListener("click", () => {
  if (selectedOption[isEmployed.selectedIndex].text === "Yes") {
    hiddenDiv.classList.add("view-hidden");
  }
});

calculateBtn.addEventListener("click", () => {
  let resultBeforeTax = +payRate.value * +workingHours.value;
  result = (resultBeforeTax *= taxRate).toFixed(2);
  displaySalary.innerText = `Salary: R${result}`;
  
  let title = document.querySelector('#titles')
  let selectedTitle = title.options[title.selectedIndex].text
  
  msg.innerText = `
  Hello ${selectedTitle} ${document.querySelector('#name').value} ${document.querySelector('#last-name').value},
  We hope you are doing well; 
  here is your salary after deduction.
  R${result}. Thank you.
  `
});



// Hello Dear Mr Joel Mukanya,
// We hope you're doing well; here's your salary after deduction. R......
// Thank you
