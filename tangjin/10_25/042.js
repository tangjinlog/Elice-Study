/** 42번 2020년 요일찾기
 * a,b 두개의 인자값으로 월,일을 받아서 요일 출력
 * */

const month = prompt("월을 입력해주세요");
const date = prompt("날짜를 입력해주세요");

function isDay(month, date) {
  //일~월을 담은 배열
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // Date객체 생성 (년, 월, 일) * 월은 0부터 시작
  // 생성한 Date객체에서 getDay()메서드로 0부터 시작하는 요일 값을 반환받음
  const result = new Date(2020, month - 1, date).getDay();
  // 배열의 인덱스로 찾아 값을 출력
  return console.log(day[result]);
}

isDay(month, date);
