let board = market.querySelector('.board');
let basket = market.querySelector(".basket")

    board.onmousedown = function(event) {
      event.preventDefault(); // предотвратить запуск выделения (действие браузера)
      let product = event.target.closest(".product"); 
      let shiftX = event.clientX - product.getBoundingClientRect().left;
      let shiftY = event.clientY - product.getBoundingClientRect().top;
      
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let top =  product.offsetHeight * (-[...board.children].indexOf(product));
        let x = event.clientX - shiftX - market.getBoundingClientRect().left;
        let y = event.clientY - shiftY - market.getBoundingClientRect().top + top;
        product.style.zIndex = "100";
        product.style.cursor = "grabbing";
       
        if (x < 0) {
          x = 0;
        }
        if (y  < top) {
          y = top;
        }
        let rightEdge = market.offsetWidth - product.offsetWidth;
        let bottomEdge = market.offsetHeight - 
          product.offsetHeight * (1 + [...board.children].indexOf(product));
        if (x > rightEdge) {
          x = rightEdge;
        }
        if (y > bottomEdge) {
          y = bottomEdge;
        }
        product.style.left = x + 'px';
        product.style.top = y + 'px';
      }

      function onMouseUp() {
        product.style.cursor = "grab";
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
      product.ondragstart = function() {
        return false;
      };
    };

    