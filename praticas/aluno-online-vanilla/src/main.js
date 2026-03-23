import './style.css'

const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const senha = document.getElementById("senha");

const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // NÃO recarrega a página

    let valido = true;

    // Validação email
    if (email.value.trim() === "") {
        erroEmail.textContent = "O campo de email é obrigatório.";
        valido = false;
    } else {
        erroEmail.textContent = "";
        
    }

    // Validação senha
    if (senha.value.trim() === "") {
        erroSenha.textContent = "O campo de senha é obrigatório.";
        valido = false;
    } else {
        erroSenha.textContent = "";
    }

    // Se estiver tudo certo
    if (valido) {
        window.location.href = "index.html";
    }
});

// Remove erro ao digitar
email.addEventListener("input", () => {
    if (email.value.trim() !== "") {
        erroEmail.textContent = "";
    }
});

senha.addEventListener("input", () => {
    if (senha.value.trim() !== "") {
        erroSenha.textContent = "";
    }
});
