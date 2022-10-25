
//38-호준이의 아르바이트
// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

var input = "97 86 75 66 55 97 85 97 97 95"
const array = input.split(' ').map(function(n){
  return Number(n);
});

array.sort((a, b) => {
  return b-a;
});

const rankArray = array.filter((elem,i)=>{
  return array.indexOf(elem)===i;
})
console.log(array);
console.log(rankArray);
const result = array.indexOf(rankArray[3]);
console.log(result);

//37-반장선거

let nameList = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
let splitName = nameList.split(" ");


const result = splitName.reduce((acc, cur) => {
    return acc[cur] = (acc[cur] || 0) + 1, acc
}, {});

winner = Object.keys(result).reduce(function(a, b){
  return result[a] > result[b] ? a : b
});
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);

//오타 수정하기.
//입력 : hqllo my namq is hyqwon
//출력 : hello my name is hyewon
// 이미 기존에 스터디에서 해봤던 replace와 정규식 활용 복습 차원.
let str = prompt('입력').replace(/q/g,'e');
console.log(str);

//40 놀이동산에 가자
//  prompt 오류. 구글링으로 찾아보고 해도 해결불가.(Node환경때문? -> 터미널 변경 -> 여전히 실패)
const limit = 50;
const n = 5;
const people = [20,20,20,20,20];
var total = 0;
var number = 0;
for (let i=0; i<=n-1; i++){
    total += people[i];
        if (total <= limit){
            number++;
        }
}

console.log(number);

function isPrime (n){
    for(let i=2; i<n; i++){
        if(n%i===0){
            console.log("NO");
            return false;
        }
    
    }
    if(n===1){
        console.log("NO");
        return false;
    }
    console.log("YES");
    return true;
}

isPrime(13);
isPrime(12);
isPrime(1);

// # 문제42 : 2020년

function whatDay (a,b){
    let findDate = new Date("2020/"+ a +'/'+ b);
    let strArray =["SUN", "MON", "TUE","WED", "THU", "FRI", "SAT"];
    let day = findDate.getDay();
        return strArray[day];
}
console.log(whatDay(1,1));
console.log(whatDay(5,24));


