function getAnimalSound(animal) {
    return animal && animal.hasOwnProperty('sound') ? animal.sound : null;
}

function getAverageMark(marks) {
    let average = marks.length === 0 ? 0 : marks.reduce((average, mark) => average + mark) / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    const now = Date.now();
    const birthdayDate = new Date(birthday);
    birthday = Number(birthdayDate);
    const diff = now - birthday;
    const age = Math.ceil(diff / 1000 * 60 * 60 * 24 * 365);
    return (age >= 18);
}