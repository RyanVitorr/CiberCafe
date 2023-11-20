function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Por enquanto, apenas exibiremos os dados no console.
    console.log("Nome: " + name);
    console.log("E-mail: " + email);
    console.log("Mensagem: " + message);

    if (name == "" || email == "" || message == "") {
        alert("Preencha todos os campos")
    } else {
        alert("Mensagem enviada com sucesso!");
    document.getElementById("contactForm").reset();
    }
    
}