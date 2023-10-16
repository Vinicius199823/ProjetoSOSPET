<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

if (isset($_POST["email"])) {
    $email = $_POST["email"];
    $uploadDir = "upload/" . $email; // Diretório onde as imagens estão salvas

    // Verifica se o diretório existe
    if (is_dir($uploadDir)) {
        $images = scandir($uploadDir);
        $images = array_diff($images, array('.', '..')); // Remove os elementos '.' e '..' da lista

        $response = array("images" => $images);
    } else {
        $response = array("error" => "Diretório não encontrado para o email: " . $email);
    }
} else {
    $response = array("error" => "Nenhum email foi fornecido.");
}

echo json_encode($response);
?>