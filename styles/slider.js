let thumb = slider.querySelector('.thumb');

    thumb.onmousedown = function(event) {
      event.preventDefault(); // предотвратить запуск выделения (действие браузера)
        
      let shiftX = event.clientX - thumb.getBoundingClientRect().left;

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

        thumb.style.left = position + 'px';
      }

      function onMouseUp() {
        thumb.style.cursor = "grab";
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };

    thumb.ondragstart = function() {
      return false;
    };