const containerEl = document.querySelector(".container");


for (let index = 0; index < 30; index++) {
    const colorcontainerEl = document.createElement("div");
    colorcontainerEl.classList.add("color-container");
    containerEl.appendChild(colorcontainerEl);
}

const colorcontainerEls = document.querySelectorAll(".color-container");


generatecolors();



function generatecolors(){
    colorcontainerEls.forEach((colorcontainerEl)=>{
        const newcolorcode = randomColor();
        colorcontainerEl.style.backgroundColor= "#" + newcolorcode;
        colorcontainerEl.innerText= "#" + newcolorcode;
    });
}

function randomColor(){
    const chars ="0123456789abcdef";
    const colorcodelength = 6;
    let colorcode ="";
    for (let index = 0; index < colorcodelength; index++) {
        const randomnum = Math.floor(Math.random()* chars.length);
        colorcode+= chars.substring(randomnum, randomnum + 1);
    }
    return colorcode;
}