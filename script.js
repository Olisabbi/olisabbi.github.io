function mudarDeCor(elemento) {
    var cor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    elemento.style.color = cor;
};

function emiteAlerta() {
    alert('Você clicou no botão')
};

function perguntaEndereco() {
    do {
        endereco = prompt("Insira o seu endereço:");
        confirma = confirm("Seu endereço é: " + endereco);
    } while (!confirma);
    alert("A página será alterada...");
    document.write("Seu endereço é " + endereco + ".");
}