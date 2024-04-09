"use strict";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["MONDAY"] = 0] = "MONDAY";
    weekDays[weekDays["TUESDAY"] = 1] = "TUESDAY";
    weekDays[weekDays["WEDNESDAY"] = 2] = "WEDNESDAY";
    weekDays[weekDays["THURSDAY"] = 3] = "THURSDAY";
    weekDays[weekDays["FRIDAY"] = 4] = "FRIDAY";
    weekDays[weekDays["SATURDAY"] = 5] = "SATURDAY";
    weekDays[weekDays["SUNDAY"] = 6] = "SUNDAY";
})(weekDays || (weekDays = {}));
let allDays = [
    weekDays.MONDAY,
    weekDays.TUESDAY,
    weekDays.WEDNESDAY,
    weekDays.THURSDAY,
    weekDays.FRIDAY,
    weekDays.SATURDAY,
    weekDays.SUNDAY
];
for (let day of allDays) {
    console.log(day);
}
