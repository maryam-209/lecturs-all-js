// events are announcement in js
//  every event have an action
//* event click hony py hoty hy
//^ monitorevents,
//^ event-target is entity hy  jab hum kisi button py click karty hy wo event hy button event-target hy koi video on hona action/behaviour hy  is behaviour ko hum eventlistner ky andar likhty hy
//? event-handling ko hum evenlistner ky andar likhty hy kisi bi element py hum event-listner add kar sakty hy remove event litner sy event remove kar sakty hy.

function changetext(event){
    console.log(event);
    
    let to=document.getElementById('fpi');
   to.textContent='Hello Maryam';


}
let to=document.getElementById('fpi');
to.addEventListener('click',changetext);
//* jab humary pass 
// <div>
//    <article>
/* <h1> */
/* <p></p> */
/* </h1> */
/* </article> */
//  </div>
//Capturing Phase
//   ↓
//  div
//   ↓
//  article
//  /   \
//h1     p  (A+ target)     

//? add evenlistner bubbling phase main apply hota hy
//? jab bi koi event-trigger hota hy wo addeventlistner ky pass jata hy  hum is ko utilize karsakty hy kis type ka data ho sakta hy. event-listner hony par object event listner ko mil jata hy.
//& default action  anchor tag ka default action hota hy ye kisi link py ly jata hy 
let anch=document.getElementById('fi');
anch.addEventListener('click',function(event){
event.preventDefault();
anch.textContent='click done hy g';
});
let paras = document.querySelectorAll('p');

function alertpara(event){
    //^ jab condition ho ky is py click karo tab alert ay jasyy
    if(event.target.nodeName=== 'SPAN'){
    alert('you have click on para: ' + event.target.textContent);
}
}

for (let i = 0; i < paras.length; i++) {
    const para = paras[i];
    para.addEventListener('click', alertpara);
}
let mydiv=document.getElementById('fpara');
document.addEventListener('click',alertpara);
document.addEventListener('DOMContentLoaded', function(){

    let paras = document.querySelectorAll('p');

    function alertpara(event){
        alert('you clicked: ' + event.target.textContent);
    }

    paras.forEach(para => {
        para.addEventListener('click', alertpara);
    });

});