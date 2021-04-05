var d = new Date();
alert("Olá tudo bem com você?\nSinta-se em casa.\n\nMeu nome é Ralf Prézia.\nMuito obrigado por acessar o meu currículo.\n\n " + d);

function trocar(elemento)
{
    elemento.innerHTML = "Clique nas setas para a navegação";
    //document.getElementById("mousemove").innerHTML = "Confirmando mousemove!!!";
    //alert("trocar texto");
    
}

function voltar(elemento)
{
    //elemento.innerHTML = "Passe o mouse aqui!";
    document.getElementById("mousemove").innerHTML ="Seja muito bem vindo(a)";
}

function clicou(elemento)
{
    window. history. back();
}