const flower = document.getElementById("flower");

function createHeart(x,y,delay){

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.setProperty("--x",x+"px");
    heart.style.setProperty("--y",y+"px");

    heart.style.animationDelay = delay+"s";

    flower.appendChild(heart);
}

function createPetal(angle){

    for(let r=10; r<90; r+=6){

        for(let t=-0.6; t<=0.6; t+=0.12){

            let x = Math.cos(angle)*r + Math.sin(angle)*t*60;
            let y = Math.sin(angle)*r - Math.cos(angle)*t*40;

            createHeart(x,y,Math.random()*2);
        }
    }
}

function bloomLily(){

    let petals = 6;

    for(let i=0;i<petals;i++){

        let angle = (Math.PI*2/petals)*i - Math.PI/2;

        createPetal(angle);
    }
}

setTimeout(bloomLily,3000);
