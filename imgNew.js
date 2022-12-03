let container = document.querySelector(".imgNew div");
container.style.height = "500px";
container.style.width = "500px";
container.style.cursor = "poiner";
container.style.position = "relative";
container.style.backgroundColor = "white";
let img = document.createElement("img");
img.setAttribute("src", "image/img6.jfif");
container.append(img);
img.style.position="absolute";
img.setAttribute("height", "10px");
img.setAttribute("width", "10px");
let sizes = [
    {height:"100px",width:"100px"},
    {height:"200px",width:"100px"},
    {height:"100px",width:"200px"},
    {height:"250px",width:"250px"},
];

function newImg(){
    let i = Math.floor(Math.random() * 4);
    let size = sizes [i];
    img.setAttribute("height", size.height);
    img.setAttribute("width", size.width);
    console.log(container.clientWidth/2-img.width/2);
    img.style.left=(container.clientWidth/2-img.width/2)+"px";
    img.style.top=(container.clientHeight/2-img.height/2)+"px";
}
container.addEventListener("click",(event)=>{
    alert(event.clientX+" "+ event.clientY);
})
setInterval(newImg,2000);


