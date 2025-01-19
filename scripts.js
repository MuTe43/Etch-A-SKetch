let container = document.querySelector(".container")
// container.setAttribute("style","display:flex;")
const body = document.querySelector("body")
for(let i=0; i<16;i++){
    const container2 = document.createElement("div")
    container2.setAttribute("style","display:flex;")
    container2.style.height= container.clientHeight/16 + "px" 
    container.appendChild(container2)
    for(let j=0; j<16;j++){
        const div = document.createElement("div");
        div.classList.add("grid")
        div.setAttribute("style","background-color:white; opacity:1; border:1px solid black; flex:1;");
        container2.appendChild(div);
    }
}

function hoverEffect(){
const div1 = document.querySelectorAll(".grid")

div1.forEach((div) => {
    div.addEventListener("mouseover", (e) =>{
        console.log(e.target.style.color)
        e.target.style.backgroundColor=getRandomColor();
        e.target.style.opacity-=0.1
    })
})
}
hoverEffect()

function getRandomColor(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
const button = document.querySelector("button");

button.addEventListener("click", () =>{
    const input = document.querySelector("input").value;
    if(input<=0 || input>100){
        alert("You have to enter a value between 1 and 100!")
    }
    else{
        container.innerHTML="";
        for(let i=0; i<input;i++){
            const container2 = document.createElement("div")
            container2.setAttribute("style",`display:flex; flex:1;`)
            // gets a porportional height of the total container size to preserve the container original size and not overflow it
            container2.style.height= container.clientHeight/input + "px" 

            container.appendChild(container2)
            for(let j=0; j<input;j++){
                const div = document.createElement("div");
                div.classList.add("grid")
                div.setAttribute("style","background-color:white; opacity:1; border:1px solid black; flex:1;");
                container2.appendChild(div);
            }
        }
        hoverEffect();
}
})