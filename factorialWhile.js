function factorial(n){
    var i = 1;
var result = 1;

while(i <= n){
    var result = result * i;
    i++;
    
    }
    return result;

}
var total = factorial(10);
console.log(total);