"use strict";

function parseCount(potentialNumber) {
    let result = Number.parseInt(potentialNumber);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount(potentialNumber) {
    let result;
    try {
        result = parseCount(potentialNumber);
    } catch (e) {
        result = e;
    }
    return result;
}

class Triangle {
    constructor(a, b, c) {
        if (!Triangle.validTriangle(a, b, c)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    static validTriangle(a, b, c) {
        return ((a + b) > c) && ((a + c) > b) && ((c + b) > a);
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    get perimeter() {
        return this.getPerimeter();
    }

    getArea() {
        const p = this.perimeter / 2;
        return Math.round(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 1000) / 1000;
    }
}

function getTriangle(a, b, c) {
    let result;
    try {
        result = new Triangle(a, b, c);
    } catch (e) {
        result = {
            getPerimeter() {
                return 'Ошибка! Неправильный треугольник';
            }, getArea() {
                return this.getPerimeter()
            }
        };
    } finally {
        return result;
    }
}