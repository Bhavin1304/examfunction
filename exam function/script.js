// WAP TO FIND FACTORIAL USING RECURSION.


// let i=1
// let n=5
//     function fun(n) {
//         if (n === 1){
//         return 1;
//         // return n;
//         }
//         else{
//         return n*fun(n-1);
        
//         }
//     }
// document.writeln(fun(8));

// WAP TO CHECK WHETHER A NUMBER IS A PALINDROME OR NOT USING A FUNCTION.

function palindrome(num){
    let real = 121;
    let a = 0;

    while(num>0){
        let m = num % 10;
        a = (a*10)+m;
        num= Math.floor(num/10);
    }
    if(real == a){
        document.writeln("num is palindrome")

    }
    else{
        document.writeln("num is not palindrome")
    }
}
palindrome(121)