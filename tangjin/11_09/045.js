//현재년도 구하기

const date = new Date(); //Date 객체 사용 

// getTime() 메서드는 ms 단위로 1970년 1월 1일 0시 0분 0초 부터 기록.
const currentYear = Math.floor(date.getTime()/(60*60*24*365*1000)+1970) // 현재까지의 시간을 1년 * 1000초로 나누고 1970년을 더함
console.log(`올해는 벌써 ${currentYear}년 입니다..`)