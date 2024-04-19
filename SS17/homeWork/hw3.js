"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "Th\u1EE9 hai";
    WeekDays["Tuesday"] = "Th\u1EE9 ba";
    WeekDays["Wednesday"] = "Th\u1EE9 t\u01B0";
    WeekDays["Thursday"] = "Th\u1EE9 n\u0103m";
    WeekDays["Friday"] = "Th\u1EE9 s\u00E1u";
    WeekDays["Saturday"] = "Th\u1EE9 b\u1EA3y";
    WeekDays["Sunday"] = "Ch\u1EE7 nh\u1EADt";
})(WeekDays || (WeekDays = {}));
for (const day in WeekDays) {
    console.log(WeekDays[day]);
}
