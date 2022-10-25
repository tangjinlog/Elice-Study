// let str = 'hqllo my namq is hyqwon'.split('');
// let result = [];

// str.map(c => {
//   if (c === 'q') {
//     result.push('e');
//   } else {
//     result.push(c);
//   }
// });

// console.log(result.join(''));

let word = 'hqllo my namq is hyqwon';

function replaceAll(str, searchStr, replaceStr) {
   return str.split(searchStr).join(replaceStr);
}
console.log(word.split('q'));

console.log(replaceAll(word,"q","e"));

//2. 정규식 사용
word = 'querty';

console.log(word.replace(/q/gi, 'e'));