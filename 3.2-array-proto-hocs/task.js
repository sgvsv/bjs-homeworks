//Задержка
function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {
    }
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}


function compareArrays(ar1, ar2) {
    return ar1.every(function (value, index) {
        return ar2[index] === value;
    });
}

function memorize(fn, limit) {
    const memory = [];
    return function (...args) {
        let call = memory.find(call => compareArrays(call.args, args));
        if (call) {
            return call.result;
        } else {
            const result=fn(...args);
            memory.push({args:args, result:result});
            return fn(...args);
        }
    }
}

const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти

// Вызов этих функций даёт один и тот же результат
//sum(3, 4); // 7
/*
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
console.log(mSum(3, 4)); // 7
