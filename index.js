
console.log(age);
var age=90;

saymyname("Maryam");
function saymyname(finalname){
    console.log(finalname);
    
}
//refrence error at hosisting
// ans();
let ans=function(){
    console.log("Hello g kasy ho sary");
    
}

function greetme(greet,fullname){
    console.log("Hello",fullname);
    greet();
}
function greet(){
    console.log("Greeting for the day");
    
}
greetme(greet,"Maryam");

function solve(number){
    return function(number){
        return number*number;
    }
}
let ans=solve(5);
let finalans=ans(10);
console.log(finalans);
const arr=[
    function(a,b){
        return a+b;
    },

    function(a,b){
        return a-b;
    },

    function(a,b){
        return a*b;
    },

    function(a,b){
        return a/b;
    }
];
let first=arr[3];
let ans=first(5,10);
console.log(ans);
