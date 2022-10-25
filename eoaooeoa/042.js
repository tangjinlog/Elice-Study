const a = 5;
const b = 30;

function solution(m, d) {
  const days = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];
  const date = new Date(`2020-${m}-${d}`);
  console.log(date.getDay());
  return days[date.getDay()];
}

console.log(solution(a, b));