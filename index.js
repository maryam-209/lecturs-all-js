<<<<<<< HEAD

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
=======
//* array in js
//* refrence type main object array or functions aty hy
//& refrence type main data aheap memeory main hota hy lakin jo is ka refrence hy w stack memory main hota hy
//* object is just a key valuue pair key and value 
let obj={
    fullname:"maryam",
    age:23,
    weight:75,
    height:"5fit",
    greet:function(){
        console.log("Noor parh bi liya karo kabii tum");
    }
};
console.log(obj);  
for (let key in obj){
    console.log(obj[key]);
    
}
// obj.greet();
// let obj2=obj;
// console.log(obj2,"Main shallow copy ho");
// let obj3=obj;
// obj3.age=10;
// console.log(obj3,"main deep ho");
// console.log(obj,"main deep ho");
//! array is a collection of items
// let ar=[1,2,3,4,5,6]
// console.log(ar,"done");
// let br=new Array(10,'maryam','hira',90);
// console.log(br[0]);//* ye constructor array hy ye tricky hota hy
// br.push(12);
// br.pop()
// br.shift()
// br.unshift("Maryam");
// br.push(10);
// br.push(30);
// br.push(90);
// br.push(60);
// br.splice(1,0,'noor');
// let m=br.slice(1,3)
// console.log(m);
let r=[10,20,30];
// let ans=r.map((Number)=>{
//     return Number*Number;
// }
// )
// console.log(ans);
// let arr=[1,2,3,4,5,6,7,8,];
// let ans=arr.filter((Number)=>{
//     if(Number%2==0){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(ans);
// let o=["noor","maryam",90,80,"popo"];
// let ans=o.filter((value)=>{
// if (typeof(value)=='number'){
//     return true;
// }else{
//     return false;
// }
// });
// console.log(ans);
// let arr=[90,89,100,900,200,300,9,8,7,400];
// arr.forEach
// ((value,index)=>{
// console.log("Number:",value,"index:",index);

// });
// let ans = arr.sort((a, b) => a - b); // ascending
// console.log(ans);
// console.log(ans);
// arr.find(400,10);

// console.log(arr);

>>>>>>> b658396602db7693e1c720533ea6efe4c9985631
