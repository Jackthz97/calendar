const displayWeek = (day) => {
  if (day === 0) {
    return "Sun";
  } else if (day === 1) {
    return "Mon";
  } else if (day === 2) {
    return "Tue";
  } else if (day === 3) {
    return "Wed";
  } else if (day === 4) {
    return "Thu";
  } else if (day === 5) {
    return "Fri";
  } return "Sat";
};

export default function Month(month, year) {
  const monthChart = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
  let arr = [];

  let i = year - 2000;
  let j = Math.floor(i / 4);
  let weekday = 1 + monthChart[ month - 1 ] + 6 + i + j;
  let remainder = weekday - (Math.floor(weekday / 7) * 7);
  let counter = remainder;
  if (remainder > 0) {
    for (let x = 31 - remainder; x <= 30; x++) {
      arr.push({date: x.toString()});
    }
  }
  for (let y = 1; y < 31; y++) {
    if (counter > 6) {
      counter = 0;
    }
    arr.push({date: y, weekday: displayWeek(counter)});
    counter ++;
  }
  return arr;


// console.log(displayMonth(7, 2022));
  // return (
  //   <div>Month</div>
  // )
}
