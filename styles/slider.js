let thumb = slider.querySelector('.thumb');
thumb.style.left = 10 + 'px';

    thumb.onmousedown = function(event) {
      event.preventDefault(); // предотвратить запуск выделения (действие браузера)
        
      let shiftX = event.clientX - thumb.getBoundingClientRect().left;
      thumb.removeEventListener("dblclick", animateSlider)
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let position = event.clientX - shiftX - slider.getBoundingClientRect().left;
        thumb.style.cursor = "grabbing";
        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (position < 0) {
          position = 0;
          
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (position > rightEdge) {
          position = rightEdge;
          
        }
       // console.log(thumb.style.left);
        thumb.style.left = position + 'px';
      }

      function onMouseUp() {
        thumb.style.cursor = "grab";
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
        thumb.addEventListener("dblclick", animateSlider);
      }

    };

    thumb.ondragstart = function() {
      return false;
    };
    function animate({timing, draw, duration}){
      let start = performance.now();
      requestAnimationFrame (function animate(time){
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
          let progress = timing(timeFraction);
          //console.log(progress);
          draw(progress);
          if (timeFraction < 1) requestAnimationFrame(animate);
      })
  }
function animateSlider(){
  animate({
      duration: 10000, 
      timing: bounceEaseOut,
      draw: function (progress){
        thumb.style.left = 300*progress + "px";
      }
  });
}
function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

let bounceEaseOut = makeEaseOut(bounce);
thumb.addEventListener("dblclick", animateSlider);

