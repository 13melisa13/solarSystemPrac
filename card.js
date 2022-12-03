
/*Для карточек с текстом необходимо создать функцию truncate(str, maxlength), 
которая проверяет длину строки str и, если она превосходит maxlength, 
заменяет конец str на "…", так, чтобы её длина стала равна maxlength. 
Результатом функции должна быть та же строка, если усечение не требуется,
либо, если необходимо, усечённая строка.*/
function truncate(str, maxlength){
    if (str.length > maxlength){
        return str.substr(0, maxlength - "...".length) + "...";
    } else {
        return str;
    }
}

let dd = document.querySelectorAll('dt dd:nth-child(1)');
let elements = document.querySelectorAll('section .box .content p');
for (i = 0; i < elements.length; i++) {
    elements[i].innerHTML = truncate(elements[i].innerHTML, 50);
}