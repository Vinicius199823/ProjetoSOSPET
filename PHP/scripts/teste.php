<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X- Request-With');

require 'conexao.php';


$querySelect = $conexao->prepare("
    SELECT usuario.nome_usuario,
           pets.nome_pet,
           pets.raca,
           pets.filename,
           petperdido.encontrado,
           petperdido.visto_ultimo
    FROM petperdido
    INNER JOIN usuario ON usuario.id_usuario = petperdido.id_usuario
    INNER JOIN pets ON pets.id_pet = petperdido.id_pet
");

$querySelect->execute();

$Results = $querySelect->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($Results);
?>