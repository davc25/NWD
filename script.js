const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width/2;
const groundY = canvas.height*0.75;

let stemHeight = 0;
let stage = 0;

let hearts = [];

function drawHeart(x,y,size,rot){

ctx.save();
ctx.translate(x,y);
ctx.rotate(rot);
ctx.scale(size,size);

ctx.beginPath();

for(let t=0;t<Math.PI*2;t+=0.1){

let xh = 16*Math.pow(Math.sin(t),3);
let yh = 13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);

ctx.lineTo(xh,-yh);

}

ctx.closePath();
ctx.fillStyle="pink";
ctx.fill();

ctx.restore();

}

function growStem(){

ctx.strokeStyle="#2ecc71";
ctx.lineWidth=6;

ctx.beginPath();
ctx.moveTo(centerX,groundY);
ctx.lineTo(centerX,groundY-stemHeight);
ctx.stroke();

stemHeight+=2;

if(stemHeight>200){
stage=1;
createPetals();
}

}

function createPetals(){

for(let i=0;i<6;i++){

let angle=(Math.PI*2/6)*i;

let x=centerX+Math.cos(angle)*60;
let y=groundY-200+Math.sin(angle)*60;

hearts.push({
x:x,
y:y,
angle:angle,
size:0.1,
grow:true
})

}

}

function updatePetals(){

hearts.forEach(h=>{

drawHeart(h.x,h.y,h.size,h.angle+Math.PI/2);

if(h.grow){
h.size+=0.02;

if(h.size>0.8){
h.grow=false;
spawnBloom(h);
}
}

})

}

function spawnBloom(petal){

for(let i=0;i<10;i++){

hearts.push({

x:petal.x,
y:petal.y,
angle:Math.random()*Math.PI*2,
size:0.2,
vx:Math.cos(Math.random()*Math.PI*2)*2,
vy:Math.sin(Math.random()*Math.PI*2)*2,
bloom:true

})

}

}

function updateBlooms(){

hearts.forEach(h=>{

if(h.bloom){

drawHeart(h.x,h.y,h.size,h.angle);

h.x+=h.vx;
h.y+=h.vy;

h.size*=0.99;

}

})

}

function animate(){

ctx.fillStyle="rgba(0,0,0,0.2)";
ctx.fillRect(0,0,canvas.width,canvas.height);

if(stage===0){
growStem();
}

updatePetals();
updateBlooms();

requestAnimationFrame(animate);

}

animate();
