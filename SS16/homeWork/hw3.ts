enum WeekDays {
  Monday = 'Thứ hai',
  Tuesday = 'Thứ ba',
  Wednesday = 'Thứ tư',
  Thursday = 'Thứ năm',
  Friday = 'Thứ sáu',
  Saturday = 'Thứ bảy',
  Sunday = 'Chủ nhật',
}

for (const day in WeekDays) {
    console.log(WeekDays[day]);
}