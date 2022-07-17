import DisplayWeek from "./DisplayWeek";

export default function Month(month, year, reminder) {
  console.log('activated')
  const monthChart = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
  let arr = [];
  let i = year - 2000;
  let j = Math.floor(i / 4);
  let weekday = 1 + monthChart[month - 1] + 6 + i + j;
  let remainder = weekday - Math.floor(weekday / 7) * 7;
  let counter = remainder;

  if (month === 9 || month === 4 || month === 6 || month === 11) {
    if (remainder > 0) {
      for (let x = 31 - remainder; x <= 31; x++) {
        arr.push({ date: x.toString() });
      }
    }
    for (let y = 1; y < 31; y++) {
      if (counter > 6) {
        counter = 0;
      }
      arr.push({
        date: y,
        weekday: DisplayWeek(counter),
        year: year,
        month: month,
        note: false,
      });
      counter++;
    }
  } else if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    if (remainder > 0 && month !== 3) {
      for (let x = 31 - remainder; x <= 30; x++) {
        arr.push({ date: x.toString() });
      }
    } else if (remainder > 0 && month === 3) {
      for (let x = 29 - remainder; x <= 28; x++) {
        arr.push({ date: x.toString() });
      }
    }
    for (let y = 1; y < 32; y++) {
      if (counter > 6) {
        counter = 0;
      }
      arr.push({
        date: y,
        weekday: DisplayWeek(counter),
        year: year,
        month: month,
        note: false,
      });
      counter++;
    }
  } else {
    if (remainder > 0) {
      for (let x = 31 - remainder; x <= 31; x++) {
        arr.push({ date: x.toString() });
      }
    }
    for (let y = 1; y < 29; y++) {
      if (counter > 6) {
        counter = 0;
      }
      arr.push({
        date: y,
        weekday: DisplayWeek(counter),
        year: year,
        month: month,
        note: false,
      });
      counter++;
    }
  }

  for (let i = 0; i < reminder["data"].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        reminder["data"][i].weekday === arr[j].weekday &&
        reminder["data"][i].date === arr[j].date &&
        reminder["data"][i].year === arr[j].year &&
        reminder["data"][i].month === arr[j].month
      ) {
        let index = arr.indexOf(arr[j]);
        arr[index].note = reminder["data"][i].reminder;
      }
    }
  }

  return arr;
}
