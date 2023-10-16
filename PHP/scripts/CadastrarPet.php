<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

require 'conexao.php';

$NomePet = $_POST['NomePet'];
$Raca = $_POST['Raca'];
$Pelagem =$_POST['Pelagem'];
$Filename =$_POST['Filename'];
$usuario = $_POST['usuario'];

$querySelectUsuario = $conexao->prepare("
        SELECT * FROM usuario WHERE email = :usuario;
");

$querySelectUsuario->bindValue(':usuario', $usuario, PDO::PARAM_STR);
$querySelectUsuario->execute();

$usuarioResult = $querySelectUsuario->fetch(PDO::FETCH_ASSOC);
$idUsuario = $usuarioResult['id_usuario'];

$queryInsertUsuario = $conexao->prepare("
        INSERT INTO pets (
            id_usuario,
            nome_pet,
            raca,
            pelagem,
            filename,
            dataCadastro
        )
        VALUES (
            :idUsuario,
            :NomePet,
            :Raca,
            :Pelagem,
            :Filename,
            NOW()
        ); 
    ");

$queryInsertUsuario->bindValue(':idUsuario', $idUsuario, PDO::PARAM_INT);
$queryInsertUsuario->bindValue(':NomePet', $NomePet, PDO::PARAM_STR);
$queryInsertUsuario->bindValue(':Raca', $Raca, PDO::PARAM_STR);
$queryInsertUsuario->bindValue(':Filename', $Filename, PDO::PARAM_STR);
$queryInsertUsuario->bindValue(':Pelagem', $Pelagem, PDO::PARAM_STR);

$queryInsertUsuario->execute();
$response = array('status' => 'success', 'message' => 'Pet cadastrado com sucesso');
echo json_encode($response);

?>







