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