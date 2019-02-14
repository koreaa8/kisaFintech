var date = new Date();
var days = ["일", "월", "화", "수", "목", "금", "토"];

function getDayOfWeek() {
    return days[date.getDay()];
}

function getYear() {
    return date.getFullYear();
}

function test() {
    return date.getMonth();
}

function getDay() {
    return date.getUTCDay();
}

exports.getDayOfWeek = getDayOfWeek;
exports.test = test;