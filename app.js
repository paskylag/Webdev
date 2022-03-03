/*function username(){console.log('architecture','building', 'chemistry', 'art', 'commercial')}
let input=document.querySelector('#input');

 input.innerhtml='architecture','building','art', 'sciences';*/

 /*let username;

 document.querySelector('#input').innertext= username;

 let btn1=querySelector('#btn1').innertext= username;


 btn1.addEventListener('click', function(){input.innertext==''; if(input.innerhtml=username){console.log('architecture')}})*/

 /*let inputs=document.querySelector('input');

 let username={name:olufemi,course: Architecture, Age:34}

 function save(){inputs.innerHTML=username;}*/

 let input1=document.querySelector('#input1');

 let input2=document.querySelector('#input2');

 let answer1=document.querySelector('#answer1');

 let answer2=document.querySelector('#answer2');

 let btn1=document.querySelector('#btn1');

 let reset1=document.querySelector('#reset1');

 btn1.addEventListener('click', function(){if(input1.value.trim()=='' && input2.value.trim()==''){alert('Fill the empty space')} else{answer1.innerHTML=input1.value.trim(); answer2.innerHTML=input2.value.trim()}})

 reset1.addEventListener('click', function(){input1.value=''; input2.value=''; answer1.innerHTML=0; answer2.innerHTML=0;})

 