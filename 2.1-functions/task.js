"use strict";

function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let roots;
    if (D < 0) {
        roots = [];
    } else {
        roots = (D === 0) ? [-b / 2 * a] :
            [(-b + Math.sqrt(D)) / 2 * a, (-b - Math.sqrt(D)) / 2 * a];
    }
    return {
        D, roots
    };
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    switch (result.roots.length) {
        case 0:
            console.log('Уравнение не имеет вещественных корней');
            break;
        case 1:
            console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
            break;
        case 2:
            console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
            break;
    }
}

function getAverageScore(data) {
    let result = {};
    let sum = 0;
    let count = 0;
    for (let discipline in data) {
        sum += result[discipline] = getAverageMark(data[discipline]);
        count++;
    }
    result.average = (count === 0) ? 0 : sum / count;
    return result;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    let sum = marks.reduce((sum, mark) => sum + mark);
    return sum / marks.length;
}

function getDecodedValue(secret) {
    return (secret === 0) ? 'Родриго' : 'Эмильо';
}

function getPersonData(secretData) {

    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    }
}

