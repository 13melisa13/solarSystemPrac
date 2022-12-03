let submitButton = document.getElementById("submit");
let activeButton = document.getElementById("signUp");
activeButton.style.background = "#323337";
activeButton.style.color = "#0b0b0c";
var userInput = document.getElementById("input");
let canvas = document.getElementById("canvas");
var answer = new Object();

const numbersGenerator = () => {
    alert("numGen");
    let n1=randomNumber(0,9);
    let n2=randomNumber(0,9);
    answer.numbersGeneration = (n1 + n2).toString();
    answer.textGeneration =  n1.toString() + "+" + n2.toString() + "=";
    alert(answer.textGeneration + answer.numbersGeneration)
};
const textGenerator = () => {
    answer.textGeneration = "";
    let n = randomNumber(3,7);
    let alf = "qwertyuiopasdfghjklzxcvbnm";
    for(i=0;i<n;i++){
        if (randomNumber(0,1) == 0)
            answer.textGeneration += alf[randomNumber(0, alf.length-1)];
        else
            answer.textGeneration += alf[randomNumber(0, alf.length-1)].toUpperCase();
    }
};
const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
function drawStringOnCanvas(string) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const textColor = "#323337";
    const letterSpace = 150 / string.length;
    for (let i = 0; i < string.length; i++) {
        const xInitialSpace = 45;
        ctx.font = "20px Oswald";
        ctx.fillStyle = textColor;
        ctx.fillText(
            string[i],
            xInitialSpace + i * letterSpace,
            40,
            100
        );
    }
}
function isEmpty(obj) {
    for(key in obj){
        return false;
    }
    return true;
}
function triggerFunction() {
    if (isEmpty(answer)){
        textGenerator();
    } else {
        numbersGenerator();
        alert("num");
    }
    console.log(answer.textGeneration);
    drawStringOnCanvas(answer.textGeneration);
}
window.onload = () => triggerFunction();
submitButton.addEventListener("click", () => {
    if (userInput.value == "" || userInput.value == null ){
        alert("Введите значение с картинки!");
        return;
    }
    alert("!"+userInput.value+"! !"+answer.textGeneration+"!");
    if(!("numbersGeneration" in answer) && (answer.textGeneration == userInput.value) || 
                    (answer.numbersGeneration == userInput.value)){
    activeButton.removeAttribute("disabled");
    activeButton.style.background = "white";
    activeButton.style.color = "black";
    } else {
        userInput.value = "";
        triggerFunction();
        alert("Попробуйте еще раз!"); 
    }
});

/*Создайте простую проверку (капчу) для проверки пользователя.
Код должен включать в себя генерацию букв разного регистра. 
Если пользователь вводит правильное значение кнопка отправки 
формы работает. Если же пользователь ошибается ему предлагается
 другая капча с генерацией чисел. Пользователю показывается 
 пример с двумя случайными числами N + M и ему необходимо 
 ввести сумму двух чисел. Если true, кнопка отправки формы 
 становится активной, в противном случае выводится сообщение об ошибке.
   Также, с помощью функции isEmpty(obj), которая возвращает 
   true, если у объекта нет свойств, иначе false, введите 
   проверку на пустой ввод.*/

