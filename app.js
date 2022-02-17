// function to get var for id mentioned in html
function getId4TagVar(id) {
    let tagVar = document.getElementById(id);
    return tagVar;
}


// necessearay variables for calculate
let input4IncomeTag = getId4TagVar("input4Income");

let input4FoodTag = getId4TagVar("input4Food");
let input4RentTag = getId4TagVar("input4Rent");
let input4ClothesTag = getId4TagVar("input4Clothes");

let calculateBtn = getId4TagVar("calculate");

let totalExpensesTag = getId4TagVar("totalExpenses");
let balance1Tag = getId4TagVar("balance1");


// function to get value for var mentioned for id
function getTagValue(tagName) {
    let tagValue = parseFloat(tagName.value);
    return tagValue;
}


// function to calculate
calculateBtn.addEventListener("click", function () {
    let totalIncome = getTagValue(input4IncomeTag)

    let foodCost = getTagValue(input4FoodTag);
    let rentCost = getTagValue(input4RentTag);
    let clothesCost = getTagValue(input4ClothesTag);

    let totalCosts = foodCost + rentCost + clothesCost;

    if (input4FoodTag.value >= 0 && input4RentTag.value >= 0 && input4ClothesTag.value >= 0) {
        if (totalCosts <= totalIncome) {

            totalExpensesTag.innerHTML = totalCosts.toFixed(2);
            balance1Tag.innerHTML = (totalIncome - totalCosts).toFixed(2);
        } else {
            showError(totalExpensesTag, balance1Tag, false)
        }
    } else {
        showError(totalExpensesTag, balance1Tag, false)
    }

    input4FoodTag.value = 0;
    input4RentTag.value = 0;
    input4ClothesTag.value = 0;
})


// necessery variables for savings
let input4SaveTag = getId4TagVar('input4Save');

let saveBtn = getId4TagVar('saveBtn');

let ultimateSavingsTag = getId4TagVar('ultimateSavings');
let ultimateBalanceTag = getId4TagVar('ultimateBalance');


// function for savings
saveBtn.addEventListener('click', function () {
    let totalIncome = getTagValue(input4IncomeTag);

    let savingPercetnage = getTagValue(input4SaveTag);
    let savingAmmount = totalIncome * (savingPercetnage / 100);

    if (savingAmmount <= balance1Tag.innerHTML && savingAmmount >= 0) {
        ultimateSavingsTag.innerHTML = savingAmmount.toFixed(2);

        ultimateBalanceTag.innerHTML = (balance1Tag.innerHTML - savingAmmount).toFixed(2);
    } else {
        showError(ultimateSavingsTag, ultimateBalanceTag, true)
    }

    input4IncomeTag.value = 0;
    input4SaveTag.value = 0;
})










// error handleing function
function showError(tag1, tag2, isSave) {


    if (isSave) {
        alert("(1)No Negative value or Alphabetic value or Empty value applicable for Input fields. \n \n(2) Balance should be valid \n \n(3)Total Savings can not be higher than Balance \n \n All fields must be filled as per requirements")
    } else {

        alert("(1)No Negative value or Alphabetic value or Empty value applicable for Input fields. \n \n(2)Total Expenses can not be higher than total Income \n \n All fields must be filled as per requirements")
    }



    tag1.style.color = "red";
    tag2.style.color = "red";

    tag1.innerHTML = "Invalid Input";
    tag2.innerHTML = "Invalid Input";
}