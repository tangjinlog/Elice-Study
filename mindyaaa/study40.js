//놀이동산에 가자

let input = "50 5 20 20 30 20 20";
let splitInput = input.split(" ");
let limitWeight = parseInt(splitInput[0]);

let result = "";
let temp = 0;

let weight = splitInput
.slice(2)
.map((element) => parseInt(element))
.sort((a,b) => b-a);

for (let i = 0; i < weight.length; i++) {
    if (temp < limitWeight) {
        temp += weight[i];
        result = i;
    }
}

console.log(`총 ${result}명 탑승 가능`);