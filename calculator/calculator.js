window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();

        form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
        });
    }
});

// let values;

function getCurrentUIValues() {
    return {
        amount: +(document.getElementById("loan-amount").value),
        years: +(document.getElementById("loan-years").value),
        rate: +(document.getElementById("loan-rate").value)
        };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    document.getElementById("loan-amount").defaultValue = 0;
    document.getElementById("loan-years").defaultValue = 0;
    document.getElementById("loan-rate").defaultValue = 0;
    update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    calculateMonthlyPayment();
    document.getElementById("monthly-payment").textContent=`$ ${calculateMonthlyPayment()}`;

}
  
// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let curValsObj = getCurrentUIValues();
    let curValsArr = Object.values(curValsObj)
    let P = curValsArr[0];
    let n = curValsArr[1] * 12;
    let i = curValsArr[2] / 12;

    if (P === 0 || n === 0) {
        return '0.00';

    } else if (i === 0) {
        let rawPayment = P / n;
        let monthlyPayment = rawPayment.toFixed(2);
        let strPayment = monthlyPayment.toString();
        return strPayment;

    } else {
        let rawPayment = (P * i) / (1 - (1 + i) ** -n);
        let monthlyPayment = rawPayment.toFixed(2);
        let strPayment = monthlyPayment.toString();
        return strPayment;
    }
}
  
// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {

}
  