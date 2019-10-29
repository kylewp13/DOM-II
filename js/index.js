// Your code goes here

// mouse over in the logo-heading h1
const logo = document.querySelector("h1");
logo.addEventListener('mouseover', function (event){
  event.target.style.color='green';
  
  setTimeout(function(){  
    event.target.style.color='';
  }, 1000);
}, false);

// keydown on the intro p tag
document.addEventListener("keydown", (e) => {
  // console.log(e.key);
  log.textContent += ` ${e.code}`;
});

// wheel on first img 
function zoom(event) {
  event.preventDefault();
  
  scale += event.deltaY * -0.01;
  
  scale = Math.min(Math.max(.125, scale), 4);
  
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.img-content');
el.onwheel = zoom;

// drag
var dragged;


document.addEventListener("drag", function(event) {
  
}, false);

document.addEventListener("dragstart", function(event) {
  
  dragged = event.target;
  
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  
  event.target.style.opacity = "";
}, false);


document.addEventListener("dragover", function(event) {
  
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }
  
}, false);

document.addEventListener("dragleave", function(event) {
  
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }
  
}, false);

document.addEventListener("drop", function(event) {
  
  event.preventDefault();
  
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

//load
window.addEventListener('load', (event) => {
  alert('The page is fully loaded and ready to use');
});

//focus
const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'gold';    
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);

//resize
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

//scroll
window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});

//select
document.getElementById("try").addEventListener("click", function(){ 
  document.getElementById("text").innerText = "Hello"
}); 

//dblclick
const dblclick = document.querySelector('h1');
dblclick.addEventListener('dblclick', function (){
  dblclick.innerHTML = "No Fun Bus"
});

//Nest two similar events somewhere in the site and prevent the event propagation 
const card = document.querySelectorAll(".destination");
card.forEach(function (a){
  a.addEventListener("click", function (e){
    card.style.background="red"
    e.stopPropagation()
  })
})
console.log(card)

//preventDefault()
const prevent = document.querySelectorAll('a');

prevent.forEach(function(a){
    a.addEventListener('click', function(event){
        event.preventDefault();
    });
});

// console.log(keydown);