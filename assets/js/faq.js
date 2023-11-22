
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Alternar entre adicionar e remover a classe "ativa",para destacar o botão que controla o painel*/
        this.classList.toggle("active");
        /* Alterna entre ocultar e mostrar o painel ativo */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}