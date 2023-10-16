<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X- Request-With');

require 'conexao.php';

$usuario = $_POST['usuario'];

$querySelectUsuario = $conexao->prepare("
        SELECT * FROM usuario WHERE email = :usuario;
");

$querySelectUsuario->bindValue(':usuario', $usuario, PDO::PARAM_STR);
$querySelectUsuario->execute();

$usuarioResult = $querySelectUsuario->fetch(PDO::FETCH_ASSOC);
$idUsuario = $usuarioResult['id_usuario'];

$querySelectpets = $conexao->prepare("
        SELECT * FROM pets WHERE id_usuario = :idUsuario;
");
$querySelectpets->bindValue(':idUsuario', $idUsuario, PDO::PARAM_STR);
$querySelectpets->execute();
$petsResult = $querySelectpets->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($petsResult)
?>