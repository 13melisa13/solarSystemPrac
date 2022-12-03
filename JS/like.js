let isPressed = false;

like . onclick = function(){
    if (like.style.backgroundColor == 'blanchedalmond'){
        isPressed = true;
        const paint = document.getElementById('paint');
        const context = paint.getContext('2d');
        like.style.backgroundColor = 'brown';
        like.style.color = 'blanchedalmond';
        
        paint.addEventListener('mousemove', (e) => {
          let ClientRect = paint.getBoundingClientRect();
          if(isPressed == true)
            context.drawImage(img,(e.clientX-ClientRect.left),
            (e.clientY-ClientRect.top),5,5);
        });
       
    } else {
        isPressed = false;
        like.style.backgroundColor = 'blanchedalmond';
        like.style.color = 'brown';
    }
}
const img = new Image();
img.src ='image/pic.png';