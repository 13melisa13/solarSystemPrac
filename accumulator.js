
function showNotification(text){
    let alert = document.createElement("div");
    alert.className = "not";
    alert.textContent = text;
    document.querySelector(".notBox").append(alert);
    setTimeout(()=>{
        alert.remove();
    }, 1500)
}

// потенциальная цель переноса, над которой мы пролетаем прямо сейчас


let ol = document.querySelector(".notification ol");
ol.onmousedown = function (event){
   
    return false;
}

ol.addEventListener("click",(event) => {
    let close = event.target.closest(".close");
    if (close) {
        let li = event.target.closest("li");
        index = array.indexOf(li);
        (array.splice(index,1)[0]).remove();  
        document.getElementById('num').innerHTML = array.length; 
    } else {
        let li = event.target.closest("li");
        if (!li) return;
        let newClass;
        if (li.className == "icon")
            newClass = "icon selected";
        else 
            newClass = "icon";

        if (event.ctrlKey || event.metaKey){
            li.className = newClass;
        } else {
            for (const i of array){
                i.className = "icon";
            }
            li.className = newClass;
        }
    }
    });









function create (){
    let liText = new Array();
    while (true){
        let li = document.createElement("li");
        li.className = "icon";
        let l = +prompt("Текст для уведомления");
        let close = document.createElement("div");
        close.className = "close";
        console.log()
        if (l != null && l != "" &&  !isNaN(l)){    
            li.textContent = l;
            liText.push(l);
        } else {
           break;
        }       
        ol.append(li);
        li.append(close);
        array.push(li);
    }
    for (const i of liText) {
        showNotification(i);    
    }
    document.getElementById('num').innerHTML = array.length;
}
document.getElementById("create").addEventListener("click", create);



let list = document.querySelectorAll(".notification ol li");
let array = Array.from(list);

function compare (a, b){
    return a-b;
}
document.getElementById("sort").addEventListener("click",() => {
    let arr = [];
    for (const i of array){
        arr.push(i.textContent);
    }
    //arr = array.slice();
    arr.sort(compare);
    r = "";
    for (const i of arr) {
        r += i;
    }
    console.log(r);
    for (i = 0; i < arr.length; i++ ){
        let close = array[i].lastChild;
        array[i].innerHTML = arr[i];
        array[i].append(close); 
    }
  
})

document.getElementById("filter").addEventListener("click",() => {
    let a = prompt("Меньше или равно");
    let b = prompt("Больше или равно");
    r = "";
    let result = array.filter(item => 
        (item.innerHTML.at(length-1) <= a && item.innerHTML.at(length-1) >= b));
    result.forEach(element => {
        r += (element.innerHTML)+" ";
    });
    alert(r);
})

document.getElementById("swap").addEventListener("click",() => {
    let close0 = array[0].lastChild; 
    let closelength = array[array.length-1].lastChild;  
    
    let temp = array[0].textContent;
    array[0].textContent = array[array.length-1].textContent;
    array[array.length-1].textContent = temp;
    array[0].append(closelength);
    array[array.length-1].append(close0);
    });