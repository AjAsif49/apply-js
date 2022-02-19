// var n = 13;

// for(i = 2; i < n; i++){
//     var result = n % i;
//     if(result == 0){
//         console.log(n, "is not a prime number");
//         break;
//     }
//     else{
//         console.log(n, "is a prime number")
//         break;
//     }
//     console.log(i, n % i);
// }


function isPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return "Your number is not a prime number"
        }
    }
    return "Your Number is a prime number"

}


var result = isPrime(1312);
console.log(result);