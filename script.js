const flower = document.getElementById("flower");

function createPetal(angle, distance, delay){

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";

    heart.style.setProperty("--x", x);
    heart.style.setProperty("--y", y);
    heart.style.animationDelay = delay + "s";

    flower.appendChild(heart);
}

function bloomLily(){

    const petals = 8;
    const distance = 40;

    for(let i=0;i<petals;i++){

        const angle = (i / petals) * Math.PI * 2;

        createPetal(angle, distance, i*0.2);
    }
}

setTimeout(bloomLily,3000);
