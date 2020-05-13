class Weapon {
    constructor(initial) {
        this.name = initial.name;
        this.attack = initial.attack;
        this.initialDUrability = this.durability = initial.durability;
        this.range = initial.range;
    }

    takeDamage(damage) {
        this.durability > damage ? this.durability -= damage : this.durability = 0;
    }

    getDamage() {
        return this.isBroken() ? 0 : ((this.durability > this.initialDUrability * 0.3) ? this.attack : this.attack / 2);
    }

    isBroken() {
        return this.durability === 0;
    }

}

const weapons = [
    new Weapon({name: 'Рука', attack: 1, durability: Infinity, range: 1}),
    new Weapon({name: 'Лук', attack: 10, durability: 200, range: 3}),
    new Weapon({name: 'Меч', attack: 25, durability: 500, range: 1}),
    new Weapon({name: 'Нож', attack: 5, durability: 300, range: 1}),
    new Weapon({name: 'Посох', attack: 8, durability: 300, range: 2}),
];
const upgradedWeapons = [
    new Weapon({name: 'Длинный лук', attack: 15, durability: 200, range: 4}),
    new Weapon({name: 'Секира', attack: 27, durability: 800, range: 1}),
    new Weapon({name: 'Посох Бури', attack: 10, durability: 300, range: 3}),
];

class Arm extends Weapon {
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1});
    }
}

class Bow extends Weapon {
    constructor() {
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
}

class Sword extends Weapon {
    constructor() {
        super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }
}

class Knife extends Weapon {
    constructor() {
        super({name: 'Нож', attack: 5, durability: 300, range: 1});
    }
}

class Staff extends Weapon {
    constructor() {
        super({name: 'Посох', attack: 8, durability: 300, range: 2});
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.attack = 27;
        this.durability = 800;
        this.name = 'Секира';
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.attack = 15;
        this.range = 4;
        this.name = 'Длинный лук';
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.attack = 10;
        this.range = 3;
        this.name = 'Посох Бури';
    }
}

class StudentLog {
    #marks

    constructor(name) {
        this.name = name;
        this.#marks = [];
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (typeof grade != 'number' || grade < 1 || grade > 5) {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`)
            return this.getAverageBySubject(subject);
        }
        if (!this.#marks[subject]) {
            this.#marks[subject] = [];
        }
        this.#marks[subject].push(grade);
        return this.#marks[subject].length;
    }

    getAverageBySubject(subject) {
        let marks;
        if (!(marks = this.#marks[subject]) || marks.length === 0) {
            return 0;
        } else {
            let sum = marks.reduce((sum, mark) => sum + mark);
            return sum / marks.length;
        }
    }

    getTotalAverage() {
        let sum = 0;
        let count = 0;
        for (const subject in this.#marks) {
            sum += this.getAverageBySubject(subject);
            count++
        }
        return count === 0 ? 0 : sum / count;
    }

}
