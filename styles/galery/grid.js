let containerGalery = document.querySelector(".grid div");
containerGalery.onclick = function (event){
    let newImg = event.target.closest(".img");  
    if (!newImg) return;
    let shower = document.querySelector(".grid div .main img");
    let imgSrc = newImg.querySelector("img").src;
    console.log(shower.scr);
    shower.setAttribute("src", imgSrc);
}