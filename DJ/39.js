//오타 수정하기.
//입력 : hqllo my namq is hyqwon
//출력 : hello my name is hyewon
// 이미 기존에 스터디에서 해봤던 replace와 정규식 활용 복습 차원.
let str = prompt('입력').replace(/q/g,'e');
console.log(str);

