<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X- Request-With');

require 'conexao.php';

$NomeCompleto = $_POST['NomeCompleto'];
$Email= $_POST['Email'];
$Ciencia= $_POST['Ciencia'];
$Senha = $_POST['Senha'];
$ConfirmaSenha= $_POST['ConfirmaSenha'];

if ($Senha == $ConfirmaSenha) {
    $senhaHash = hashSenha($Senha); // Gera o hash da senha
    $queryInsertUsuario = $conexao->prepare("
        INSERT INTO usuario (
            nome_usuario,
            email,
            senha,
            ciencia,
            dataCadastro
        )
        VALUES (
            :NomeCompleto,
            :Email,
            :Senha,
            :Ciencia,
            NOW()
        ) 
    ");

    $ciencia = $Ciencia ? 1 : 0;

    $queryInsertUsuario->bindValue(':NomeCompleto', $NomeCompleto, PDO::PARAM_STR);
    $queryInsertUsuario->bindValue(':Email', $Email, PDO::PARAM_STR);
    $queryInsertUsuario->bindValue(':Senha', $senhaHash, PDO::PARAM_STR);
    $queryInsertUsuario->bindValue(':Ciencia', $ciencia, PDO::PARAM_STR);
    $queryInsertUsuario->execute();

    
} 
function hashSenha($senha) {
    $hash = password_hash($senha, PASSWORD_DEFAULT);
    return $hash;
  }
?>