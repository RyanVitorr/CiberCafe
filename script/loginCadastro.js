function showRegistrationForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registrationForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
   
    // Por enquanto, apenas exibiremos os dados no console.
    console.log("E-mail: " + email);
    console.log("Senha: " + password);
    if (email == "" || password == "") {
        alert("Preencha todos os campos")
    } else {
        alert("Login feito com sucesso!");
        document.getElementById("contactForm").reset();
    }
    
}

function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("emailRegister").value;
    var password = document.getElementById("passwordRegister").value;


    // Por enquanto, apenas exibiremos os dados no console.

    console.log("Nome de Usuário: " + username);
    console.log("E-mail: " + email);
    console.log("Senha: " + password);

    if (username == "" || email == "" || password == "") {
        alert("Preencha todos os campos")
    } else {
        alert("Registrado com sucesso!");
        document.getElementById("contactForm").reset();
    }
    
}