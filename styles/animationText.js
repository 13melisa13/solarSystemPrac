


dl = document.querySelector("dl")
dl.onclick = function (event){
    dd = event.target.closest("dd");
    if (!dd) return;
    animateDD(dd);

}

function animateDD(htmlElement){
    let text = htmlElement.textContent;
    //console.log(text);
    let to = text.length, from = 0;
    animate({
        duration: 10000, 
        timing: bounce,
        draw: function (progress){
            let result = (to - from) * progress + from;
            htmlElement.textContent = text.substr(0, Math.ceil(result));
        }
    });
}
function bounce(timeFraction){
    for (let a = 0, b = 1; 1 ; a += b, b /= 2){
        if (timeFraction >= (7 - 4*a)/11){
            return - Math.pow((11 - 6*a - 11*timeFraction) / 4, 2)
            + Math.pow(b,2);
        }
    }
}
function animate({timing, draw, duration}){
    let start = performance.now();
    requestAnimationFrame (function animate(time){
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing(timeFraction);
        draw(progress);
        if (timeFraction < 1) requestAnimationFrame(animate);
    })
}