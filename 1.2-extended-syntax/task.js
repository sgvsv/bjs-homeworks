"use strict";

function getResult(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    return (discriminant === 0) ? [-b / 2 * a] :
        [(-b + Math.sqrt(discriminant)) / 2 * a, (-b - Math.sqrt(discriminant)) / 2 * a];
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    if (marks.length > 5) {
        console.log('To many marks. I will work only with first five marks.');
        marks.splice(5);
    }
    let sum = marks.reduce((sum, mark) => sum + mark);
    return sum / marks.length;
}

function askDrink(name, dateOfBirthday) {
    let yearOfBirthday = new Date(dateOfBirthday).getFullYear();
    let age = new Date().getFullYear() - yearOfBirthday;
    const legalAge = 18;
    return age >= legalAge ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
}