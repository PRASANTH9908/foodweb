//Arrow Function//
var hello=()=>{
    console.log("arrow")
}
hello();
//iife(immediately invoke function expression)//
(function fun(){console.log("IIFE")})
();
//Default Function//
function name(A1,A2){
    return A1+A2
}
console.log(name(6,4));
//Annonimous Function//
let x=function(){
    console.log("Anonimouse")
}
x();
//Call Back Function//
function my(a,b){
    console.log(a+b)
}
my(1,2)