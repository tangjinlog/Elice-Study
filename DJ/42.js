// # 문제42 : 2020년

function whatDay (a,b){
    let findDate = new Date("2020/"+ a +'/'+ b);
    let strArray =["SUN", "MON", "TUE","WED", "THU", "FRI", "SAT"];
    let day = findDate.getDay();
        return strArray[day];
}
console.log(whatDay(1,1));
console.log(whatDay(5,24));