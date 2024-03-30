<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $assunto = $_POST['assunto'];
    $mensagem = $_POST['mensagem'];

    $corpo_email = "
        <h1 style=\"color: #6A3ED4; text-align: center; font-weight: 800; margin: 0; padding: 15px; font-size: 30px;\">NOVO EMAIL</h1>
        <div style=\"width: 90%; border-radius: 4px; overflow: hidden; margin: 0 auto;\">
            <p style=\"background-color: #6A3ED4; color: #fff; margin: 0; padding: 14px 12px; font-size: 16px; font-weight: 700;\">Nome:</p>
            <p style=\"background-color: #e2e2e2; color: #6A3ED4; margin: 0; padding: 14px 12px; font-size: 14px; font-weight: 600;\">$nome</p>
        </div>
        <div style=\"margin: 15px auto; width: 90%; border-radius: 4px; overflow: hidden;\">
            <p style=\"background-color: #6A3ED4; color: #fff; margin: 0; padding: 14px 12px; font-size: 16px; font-weight: 700;\">Email:</p>
            <p style=\"background-color: #e2e2e2; color: #6A3ED4; margin: 0; padding: 14px 12px; font-size: 14px; font-weight: 600;\">$email</p>
        </div>
        <div style=\"margin: 15px auto; width: 90%; border-radius: 4px; overflow: hidden;\">
            <p style=\"background-color: #6A3ED4; color: #fff; margin: 0; padding: 14px 12px; font-size: 16px; font-weight: 700;\">Telefone:</p>
            <p style=\"background-color: #e2e2e2; color: #6A3ED4; margin: 0; padding: 14px 12px; font-size: 14px; font-weight: 600;\">$telefone</p>
        </div>
        <div style=\"margin: 15px auto; width: 90%; border-radius: 4px; overflow: hidden;\">
            <p style=\"background-color: #6A3ED4; color: #fff; margin: 0; padding: 14px 12px; font-size: 16px; font-weight: 700;\">Assunto:</p>
            <p style=\"background-color: #e2e2e2; color: #6A3ED4; margin: 0; padding: 14px 12px; font-size: 14px; font-weight: 600;\">$assunto</p>
        </div>
        <div style=\"margin: 15px auto; width: 90%; border-radius: 4px; overflow: hidden;\">
            <p style=\"background-color: #6A3ED4; color: #fff; margin: 0; padding: 14px 12px; font-size: 16px; font-weight: 700;\">Mensagem:</p>
            <p style=\"background-color: #e2e2e2; color: #6A3ED4; margin: 0; padding: 14px 12px; font-size: 14px; font-weight: 600;\">$mensagem</p>
        </div>
    ";

    $cabecalho = "MIME-Version: 1.0\r\n";
    $cabecalho .= "Content-type: text/html; charset=iso-8859-1\r\n";

    if (mail("helderneto2005@gmail.com", "Novo Email", $corpo_email, $cabecalho)) {
        echo "Obrigado! Seu e-mail foi enviado com sucesso.";
        header("Location: ../html/form_sucesso.html");
    } else {
        echo "Desculpe, houve um problema ao enviar seu e-mail. Por favor, tente novamente mais tarde.";
        header("Location: ../html/form_falha.html");
    }
} else {
    header("Location: ../index.html");
}
?>
