<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__ . '/../');
$dotenv->load();

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

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'contact@heldernf.com';
        $mail->Password   = getenv('PASSWORD');
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        $mail->setFrom('contact@heldernf.com');
        $mail->addAddress('contact@heldernf.com');
        $mail->addReplyTo($email);
        $mail->isHTML(true);
        $mail->Subject = $assunto;
        $mail->Body = $corpo_email;
        $mail->AltBody = $mensagem;

        $mail->send();
        header("Location: ../html/form_sucesso.html");
    } catch (Exception $e) {
        header("Location: ../html/form_falha.html");
    }
} else {
    header("Location: ../index.html");
}