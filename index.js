const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click", function () {
    alert("AMOR desde el día que respondiste que sí voluntariamente xd lo eres y x siempre lo serás taq feliz día p mi niña hemolsa de mi corazón xd te quiero ctmr y si  amor yo más")
});

const noBtn= document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function () {
    const randomX =parseInt(Math.random()*100);
    const ramdomY=parseInt(Math.random()*100); 
    noBtn.style.setProperty("top",ramdomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setProperty("transform",`translate(-${randomX}%,-${ramdomY}%)`);
})
