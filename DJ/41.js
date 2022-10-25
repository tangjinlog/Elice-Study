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