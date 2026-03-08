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

function bloom(){

    const petals = 8;
    const radius = 50;

    for(let i=0;i<petals;i++){

        const angle = (i/petals) * Math.PI * 2;

        createPetal(angle, radius, i*0.15);
    }
}

setTimeout(bloom,3000);
