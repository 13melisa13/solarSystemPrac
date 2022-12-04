let links = document.querySelectorAll("a");
for (const link of links) {
    if (!(link.href).includes("13melisa13.github.io/solarSystemPrac"))
        link.style.color = "red";    
}

let contents = document.querySelector("#contents");

contents.onclick = function (event){
    
    let link = event.target.closest("a");
    if (!link) return;
    href = confirm("Действительно ли вы хотите покинуть страницу и перейти к просмотру?");
    
    if (!href) return false;
};


/*1.Сделайте так, чтобы при клике на ссылки внутри 
элемента id="contents" пользователю выводился 
вопрос о том, действительно ли он хочет покинуть
 страницу, и если он не хочет, то прерывать переход 
по ссылке. (Содержимое #contents может быть загружено
динамически и присвоено при помощи innerHTML. 
Так что найти все ссылки и поставить на них обработчики
нельзя. Используйте делегирование. Содержимое может иметь
вложенные теги, в том числе внутри ссылок, 
например, <a href=".."><i>...</i></a>.) */