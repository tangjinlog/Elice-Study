let str = "Javascript";

twoGram(str)

function twoGram(str) {
  for (let i = 0; i < str.length - 1; i++) { // 0-8
    console.log(str[i], str[i + 1]); // 0 1, 1 2, 2 3, 3 4, 4 5, 5 6, 6 7, 7 8, 8 9
  }
}