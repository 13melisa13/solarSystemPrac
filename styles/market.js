let board = market.querySelector('.board');
let basket = market.querySelector(".basket");

    board.onmousedown = function(event) {
      event.preventDefault(); // предотвратить запуск выделения (действие браузера)
      let product = event.target.closest(".product"); 
      let shiftX = event.clientX - product.getBoundingClientRect().left;
      let shiftY = event.clientY - product.getBoundingClientRect().top;
      
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let currentDropable = null;
      function onMouseMove(event) {
        let top =  product.offsetHeight * (-[...board.children].indexOf(product));
        let x = event.clientX - shiftX - market.getBoundingClientRect().left;
        let y = event.clientY - shiftY - market.getBoundingClientRect().top + top;
        product.style.zIndex = "100";
        product.style.cursor = "grabbing";
        document.documentElement.style.setProperty('--content', "#e0ae3a");
        let lastX = product.style.left;
        let lastY = product.style.top;
        if (x < 0) {
          x = 0;
          y = lastY;
        }
        if (y  < top) {
          y = top;
          x = lastX;
        }
        let rightEdge = market.offsetWidth - product.offsetWidth;
        let bottomEdge = market.offsetHeight - 
          product.offsetHeight * (1 + [...board.children].indexOf(product));
        if (x > rightEdge) {
          x = rightEdge;
          y = lastY;
        }
        if (y > bottomEdge) {
          y = bottomEdge;
          x = lastX;
        }
        product.style.left = x + 'px';
        product.style.top = y + 'px';

        // product.hidden = true;
         let basketFind = null;//document.elementFromPoint(event.clientX,event.clientY);
        // product.hidden = false;

        if (event.clientX <= basket.getBoundingClientRect().right &&
        event.clientX >= basket.getBoundingClientRect().left &&
        event.clientY >= basket.getBoundingClientRect().top &&
        event.clientY <= basket.getBoundingClientRect().bottom){
          basketFind = basket;
          document.documentElement.style.setProperty('--content', "green");
        }
            
        if (currentDropable != basketFind){
            if (currentDropable){
              document.documentElement.style.setProperty('--content', "red");  
              basket.textContent = 
              +market.querySelector(".basket").textContent - +product.textContent;
              //alert(market.querySelector(".basket").textContent);
            }
            currentDropable = basketFind;
            if (currentDropable){
              document.documentElement.style.setProperty('--content', "green");
              basket.textContent = +basket.textContent + +product.textContent;
              //alert(basket.textContent);
            }
        }

        
      }

      function onMouseUp() {
        product.style.cursor = "grab";
        document.documentElement.style.setProperty('--content', "");
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
      product.ondragstart = function() {
        return false;
      };
    };

    