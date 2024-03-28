<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $assunto = $_POST['assunto'];
    $mensagem = $_POST['mensagem'];

    // Configurar o e-mail
    $para = "seu_email@example.com";
    $assunto_email = "Novo formulário de contato: $assunto";
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "E-mail: $email\n";
    $corpo_email .= "Telefone: $telefone\n\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    // Enviar o e-mail
    if (mail($para, $assunto_email, $corpo_email)) {
        echo "Obrigado! Sua mensagem foi enviada com sucesso.";
    } else {
        echo "Desculpe, houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.";
    }
} else {
    // Se alguém tentar acessar o script diretamente, redireciona para o formulário
    header("Location: formulario.html");
}
?>
