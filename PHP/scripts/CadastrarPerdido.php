<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

require 'conexao.php';

$idPet = $_POST['idPet'];
$usuario = $_POST['usuario'];
$endereco =$_POST['endereco'];
$encontrado = 0;
$response = array();

try {
    $querySelectUsuario = $conexao->prepare("SELECT * FROM usuario WHERE email = :usuario");
    $querySelectUsuario->bindValue(':usuario', $usuario, PDO::PARAM_STR);
    $querySelectUsuario->execute();
    $usuarioResult = $querySelectUsuario->fetch(PDO::FETCH_ASSOC);

    if ($usuarioResult) {
        $idUsuario = intval($usuarioResult['id_usuario']);

        $querySelectPet = $conexao->prepare("SELECT * FROM pets WHERE id_pet = :idPet");
        $querySelectPet->bindValue(':idPet', $idPet, PDO::PARAM_STR);
        $querySelectPet->execute();
        $PetResult = $querySelectPet->fetch(PDO::FETCH_ASSOC);

        if ($PetResult) {
            $filename = $PetResult['filename'];

            $queryInsertPerdido = $conexao->prepare("
                INSERT INTO petperdido (
                    id_usuario,
                    id_pet,
                    visto_ultimo,
                    filename,
                    encontrado,
                    dataPublicacao
                )
                VALUES (
                    :idUsuario,
                    :idPet,
                    :endereco,
                    :filename,
                    :encontrado,
                    NOW()
                )
            ");

            $queryInsertPerdido->bindValue(':idUsuario', $idUsuario, PDO::PARAM_INT);
            $queryInsertPerdido->bindValue(':idPet', $idPet, PDO::PARAM_STR); 
            $queryInsertPerdido->bindValue(':endereco', $endereco, PDO::PARAM_STR);
            $queryInsertPerdido->bindValue(':filename', $filename, PDO::PARAM_STR); 
            $queryInsertPerdido->bindValue(':encontrado', $encontrado, PDO::PARAM_STR);

            if ($queryInsertPerdido->execute()) {
                $response['status'] = 'success';
                $response['message'] = 'Pet cadastrado com sucesso';
            } else {
                $response['status'] = 'error';
                $response['message'] = 'Erro ao cadastrar o pet';
            }
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Pet não encontrado';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Usuário não encontrado';
    }
} catch (Exception $e) {
    $response['status'] = 'error';
    $response['message'] = 'Erro no servidor';
}

echo json_encode($response);
?>