let input4IncomeTag = document.getElementById('input4Income');

let input4FoodTag = document.getElementById('input4Food');
let input4RentTag = document.getElementById('input4Rent');
let input4ClothesTag = document.getElementById('input4Clothes');

let calculateBtn = document.getElementById('calculate');

let totalExpensesTag = document.getElementById('totalExpenses');
let balance1Tag = document.getElementById('balance1');


calculateBtn.addEventListener("click", function () {
    let totalIncome = parseFloat(input4IncomeTag.value);

    let foodCost = parseFloat(input4FoodTag.value);
    let rentCost = parseFloat(input4RentTag.value);
    let clothesCost = parseFloat(input4ClothesTag.value);

    let totalCosts = foodCost + rentCost + clothesCost;

    if (input4FoodTag.value >= 0 && input4RentTag.value >= 0 && input4ClothesTag.value >= 0) {
        if (totalCosts <= totalIncome) {

            totalExpensesTag.innerHTML = totalCosts.toFixed(2);
            balance1Tag.innerHTML = (totalIncome - totalCosts).toFixed(2);
        } else {
            alert("(1)No Negative value or Alphabetic value or Empty value applicable for Input fields. \n \n(2)Total Expenses can not be higher than total Income \n \n All fields must be filled as per requirements")

            totalExpensesTag.style.color = "red";
            balance1Tag.style.color = "red";

            totalExpensesTag.innerHTML = "Invalid Input";
            balance1Tag.innerHTML = "Invalid Input";

        }



    } else {
        alert("(1)No Negative value or Alphabetic value or Empty value applicable for Input fields. \n \n(2)Total Expenses can not be higher than total Income \n \n All fields must be filled as per requirements")

        totalExpensesTag.style.color = "red";
        balance1Tag.style.color = "red";

        totalExpensesTag.innerHTML = "Invalid Input";
        balance1Tag.innerHTML = "Invalid Input";

    }

    input4FoodTag.value = '';
    input4RentTag.value = '';
    input4ClothesTag.value = '';

})


let input4SaveTag = document.getElementById('input4Save');

let saveBtn = document.getElementById('saveBtn');


let ultimateSavingsTag = document.getElementById('ultimateSavings');
let ultimateBalanceTag = document.getElementById('ultimateBalance');

saveBtn.addEventListener('click', function () {
    let totalIncome = parseFloat(input4IncomeTag.value);


    let savingPercetnage = parseFloat(input4SaveTag.value);
    let savingAmmount = totalIncome * (savingPercetnage / 100);


    // console.log(totalIncome);

    if (savingAmmount <= balance1Tag.innerHTML && savingAmmount >= 0) {
        ultimateSavingsTag.innerHTML = savingAmmount.toFixed(2);

        ultimateBalanceTag.innerHTML = (balance1Tag.innerHTML - savingAmmount).toFixed(2);

    } else {
        alert("(1)No Negative value or Alphabetic value or Empty value applicable for Input fields. \n \n(2) Balance should be valid \n \n(3)Total Savings can not be higher than Balance \n \n All fields must be filled as per requirements")

        ultimateSavingsTag.style.color = "red";
        ultimateBalanceTag.style.color = "red";

        ultimateSavingsTag.innerHTML = "Invalid Input";
        ultimateBalanceTag.innerHTML = "Invalid Input";

    }


    input4IncomeTag.value = '';
    input4SaveTag.value = '';


})