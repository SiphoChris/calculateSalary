let submitBtn = document.querySelector('#send-form')
let calculateBtn = document.querySelector('#calculate')
let isEmployed = document.querySelector('#job')
let selectedOption = isEmployed.options
let hiddenDiv = document.querySelector('.hidden-div')
let payRate = document.querySelector('#rate')
let workingHours = document.querySelector('#hours')
let displaySalary = document.querySelector('#calc-salary')
const taxRate = 85/100 //15% current vat in South Africa
let result = null

submitBtn.addEventListener('click', () => {
    if(selectedOption[isEmployed.selectedIndex].text === 'Yes'){
        hiddenDiv.classList.add("view-hidden");
    }
})

calculateBtn.addEventListener('click', () => {
    let resultBeforeTax = +payRate.value * +workingHours.value
    result = (resultBeforeTax *= taxRate).toFixed(2)
    displaySalary.innerText =`Salary: R${result}`
})