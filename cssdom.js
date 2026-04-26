let para=document.getElementById('spara');
console.log(para.style);
para.style.backgroundColor='blue';
let second=document.getElementById('sdiv');
console.log(second);
second.style.cssText='background-color:black;color:white;padding:1rem;';
let third=document.getElementById('fdiv');
third.style.cssText='background-color:purple;padding:2rem;color:white;';
para.setAttribute('class','divclass');
