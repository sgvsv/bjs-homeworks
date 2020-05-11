"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    percent = parseInt(percent) / 100;
    contribution = parseInt(contribution);
    amount = parseInt(amount);
    let months = monthDiff(new Date(date));

    function monthDiff(date) {
        let currentDate = new Date();
        let years = date.getFullYear() - currentDate.getFullYear();
        let months = date.getMonth() - currentDate.getMonth();
        return (years * 12 + months);
    }

    function validate(name, value) {
        if (isNaN(value)) {
            return `Параметр ${name} содержит неправильное значение ${value}`
        }
        return true;
    }

    let valid = (validate('percent', percent) === true) &&
        (validate('contribution', contribution) === true) &&
        (validate('amount', amount) === true) &&
        (validate('date', date) === true);

    let sum = amount - contribution;
    let p = percent / 12;
    let monthlySum = sum * (p + p / (((1 + p) ** months) - 1));
    //Платеж=S*(P+P/(((1+P)^n)-1)), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
    let totalPay = monthlySum * months;
    return valid === true ? parseFloat(totalPay.toFixed(2))
        : valid;
}

function getGreeting(name) {
    if (!name) {
        name = 'Аноним';
    }
    let greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(name);
    return greeting;
}