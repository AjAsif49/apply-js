// var factorial = 1;

// for(var i = 1; i < 10; i++ ){
//     var factorial = factorial * i;
//     console.log(i, factorial)
// }


//With function

function factorialOf(n){
    factorial = 1;
    for(var i = 1; i <= n; i++ ){
        var factorial = factorial * i;
    }
    return factorial;
}

var result = factorialOf(10);
console.log(result)