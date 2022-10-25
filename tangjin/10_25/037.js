/** 반장선거
 */


const input = prompt('투표결과를 입력해주세요').split(' ');

function leader(input) {
  console.log(`입력: 원범 원범 혜원 혜원 혜원 혜원 유진 유진`);
  const result = input.reduce((a,c)=> {
    if(!a[c]) a[c] = 0; // 빈 객체에 해당 키값에 대한 벨류가 없으면 0 할당
    a[c]++; // 있으면 증가
    return a // 마지막 리턴
  },{})

  const keys = Object.keys(result) // 키값만 리턴

  const winner = keys.reduce((a,c)=> {
      return result[a] > result[c] ? a : c //벨류 값끼리 비교 후 이름만 리턴
  })
  
  
  return console.log(`${winner}이 총 ${result[winner]}표로 반장이 되었습니다`)
}

leader(input);