// effient code ky liy
//code 1
const t1 = performance.now();

let fragment = document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = 'This is para' + i;
    fragment.appendChild(para);
}

document.body.appendChild(fragment);

const t2 = performance.now();
console.log("total time by code is " + (t2 - t1));

// timestampp sy hum code ki performane deakh sakty hy
const t3 = performance.now();
let mydiv=document.createElement('div');
for (let i=1;i<=100;i++){
    let par=document.createElement('p');
    par.textContent='second code This is par' +i;
    mydiv.appendChild(par);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("total time by code is " + (t4  - t3));
// reflow ziyada time leta hy calculation performe karta hy  repaint content ko paint karta hy fast karta hy
//* document fragment
let fragment=document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent='This is para'+i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);