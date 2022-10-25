//입출력

const input = "97 86 75 98 55 98 85 91 97 94";

const sort = input.split(" ").sort((a,b) => b-a); 
// console.log(sort);

const score = sort.filter((element, index) => {
    return sort.indexOf(element) === index;
})
//console.log(score);

let result = sort.indexOf(score[2]) + 1;

console.log(`사탕을 받은 학생 수는 ${result}명 입니다.`);
