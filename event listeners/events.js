//alert("hello")

let btnmouseover=document.querySelector('#but');
let second=document.querySelector('#mouseout');
let third=document.querySelector('#onclick');
let hell=document.querySelector('#disturbing');

let text = document.querySelector('input[type="text"]');
let password=document.querySelector('input[type="password"]')
/*let pass=document.querySelector('#pass');*/



btnmouseover.addEventListener('click',() => btnmouseover.style.backgroundColor='#AC33FF')
//second.addEventListener('onmouseover',()=>second.style.backgroundColor='black')
second.addEventListener('mouseover',()=>second.style.backgroundColor='#33FF92 ')

//third.addEventListener('mouseout',()=> third.style.backgroundColor='blue')
third.addEventListener('mouseover',()=> third.style.backgroundColor='blue')
//third.addEventListener('mouseout',()=> third.style.backgroundColor='red')
 third.addEventListener('mouseout',()=> third.style.backgroundColor='#FF33E3')

hell.addEventListener('dblclick',()=>hell.style.backgroundColor='orange')
text.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
  })
  text.addEventListener('blur', (event) => {
    event.target.style.background = '#EE82EE';
  })
  

  
  function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

 
 

/*
btnmouseover.addEventListener('click',less);
function less(){
btnmouseover.style.backgroundColor='black'
}
//*/


//function red(){
 //   document.getElementById('but').style.backgroundColor="black";
    
//}