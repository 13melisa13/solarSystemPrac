let links = document.querySelectorAll("a");
for (const link of links) {
    if (!(link.href).includes("13melisa13.github.io/solarSystemPrac"))
        link.style.color = "red";    
}
