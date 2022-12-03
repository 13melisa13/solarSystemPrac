function Counter(startingValue) {
    this.value = startingValue;
    this.increase = function(){
            this.value++;
    }
}
let start = 0;
let counter = new Counter(start);
function updateNotification(){
    document.getElementById('num').innerHTML = counter.value;
}
function newNotification() {
    counter.increase();
    updateNotification();
}
updateNotification();
let interval = setInterval(newNotification, 1000);
let delayInterval = 0;
function reset(time, timeout){
        clearInterval(time);
        clearTimeout(timeout);
}  
function delay(f, ms) {
    return function(...args) {
      let savedThis = this; 
      reset(interval,delayInterval);
      delayInterval = setTimeout(function() {
        interval = f.apply(savedThis, args); 
      }, ms);
    };
}
let delayAgain = delay (setInterval, 5000);

let click = document.getElementById('notification');
click.addEventListener("click",() => {
    delayAgain(newNotification, 1000);
});

function updateList(array){
    array.forEach(element => {
        if (i < array.length){
            element.innerHTML = "again"+array.at(i).innerHTML;
            console.log("we"+array.at(i).innerHTML);  
         }
         else 
            element.remove();
    });
    let i = 0;
    list.forEach(element => {   
         if (i < array.length){
            element.innerHTML = "again"+array.at(i).innerHTML;
            console.log("we"+array.at(i).innerHTML);  
         }
         else 
            element.remove();
        i++;
     });
     list = document.querySelectorAll(".notification ol span:nth-child(2)");     
}

let list = document.querySelectorAll(".notification ol span:nth-child(2)");
let array = [...list];
document.getElementById("delete").addEventListener("click",() => {
    array.shift();
    r = "";
    for (const i of array) {
        r += i.innerHTML;
    }
    alert(r);    
})
function compare (a, b){
    if (a.innerHTML < b.innerHTML) return -1;
    if (a.innerHTML == b.innerHTML) return 0;
    return 1;
}
document.getElementById("sort").addEventListener("click",() => {
    array.sort(compare);
    r = "";
    for (const i of array) {
        r += i.innerHTML;
    }
    alert(r);
    updateList(array);
})

document.getElementById("filter").addEventListener("click",() => {
    let a = prompt("Меньше или равно");
    let b = prompt("Больше или равно");
    r = "";
    let result = [...list].filter(item => 
        (item.innerHTML <= a && item.innerHTML >= b));
    result.forEach(element => {
        r += (element.innerHTML)+" ";
    });
    alert(r);
})

document.getElementById("swap").addEventListener("click",() => {
    [[...list][0],[...list][[...list].length-1]]=[[...list][[...list].length-1],[...list][0]];   
});