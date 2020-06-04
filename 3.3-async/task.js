class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, alarmId) {
        if (!alarmId) {
            throw new Error('alarmId uis required');
        }
        if (this.alarmCollection.findIndex(value => value.id === alarmId)!==-1) {
            console.error('Alarm with that id is already exists');
            return;
        }
        this.alarmCollection.push({id: alarmId, time: time, callback: callback});
    }

    removeClock(id) {
        const oldLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(value => value.id !== id);
        return oldLength > this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        const date = new Date();
        return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    }

    checkClock() {
        this.alarmCollection.find(value => value.time === this.getCurrentFormattedTime).every(value => value.callback());
    }

    start() {
        if (!this.timerId) {
            this.timerId = setInterval(this.checkClock, 1000 * 30);
        }
    }

    stop() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    printAlarms() {
        this.alarmCollection.every(value => console.log(`${value.id} ${value.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const alarm = new AlarmClock();
    const currentTime = alarm.getCurrentFormattedTime();
    alarm.addClock(alarm.getCurrentFormattedTime(), () => console.log('first attempt'), 1);
    alarm.addClock(alarm.getCurrentFormattedTime(), () => console.log('first attempt'), 1);
    alarm.printAlarms();
}

testCase();