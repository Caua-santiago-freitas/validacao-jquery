const form01 = document.getElementById("form01");

form01.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");

    if (nome.value.trim() == "") {
    nome.classList.remove("is-valid");
    nome. classList.remove("is-valid");
} else {
    nome.classList.add("is-invalid");
    nome. classList.remove("is-valid");
}

if (cpf.value.trim() == "") {
    cpf.classList.add("is-valid");
    cpf.classList.remove("is-invalid");
} else {
    cpf.classList.add("is-invalid");
    cpf.classList.remove("is-valid");
}

if (email.value.trim() == "") {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
} else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
}

if (telefone.value.trim() == "") {
    telefone.classList.add("is-valid");
    telefone.classList.remove("is-invalid");
} else {
    telefone.classList.add("is-invalid");
    telefone.classList.remove("is-valid");
}

console.log("nome: " + nome.value);
console.log("cpf: " + cpf.value);
console.log("email: " + email.value);
console.log("telefone " + telefone.value);

});