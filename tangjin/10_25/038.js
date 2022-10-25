/** 38번 호준이의 아르바이트 
 * 1위~3위까지 사탕지급
 * 중복가능
 * */ 


const input = prompt('입력해주세요')
// 97 86 75 66 55 97 85 97 97 95
console.log(`입력 : ${input}`)

let count = 0; 
const student = input.split(' ') //입력을 공백기준 배열로
const setLength = [...new Set(input.split(' '))].sort((a,b)=>b-a) // Set객체의 배열화 -> 중복제거 + 내림차순 정렬
console.log(setLength)
for(let i=0; i<student.length; i++){  // 1 ~ 3위의 값과 일치할때마다 count++
if(student[i] === setLength[0]) count++;
else if(student[i] === setLength[1]) count++;
else if(student[i] === setLength[2]) count++;
}

console.log(count)