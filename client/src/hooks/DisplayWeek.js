export default function DisplayWeek(day) {
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
}