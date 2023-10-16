<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

if(isset($_FILES["image"])) {
    $file = $_FILES["image"];
    $fileName = $file["name"];
    $fileTmpName = $file["tmp_name"];
    $fileError = $file["error"];

    // Verifica se houve algum erro no upload
    if($fileError === UPLOAD_ERR_OK) {
        $uploadDir = "upload/" . $_POST["email"]; // Diretório onde as imagens serão salvas
        if(!is_dir($uploadDir)){
            mkdir($uploadDir, 0777, true);
        }
        $destination = $uploadDir . "/" . $fileName;
        
        // Move o arquivo temporário para o destino final
        if(move_uploaded_file($fileTmpName, $destination)) {
            $imageName = $fileName;
            $response["message"] =  $imageName;
            $response["path"] = $destination;
            
        } else {
            $response["error"] = "Falha ao mover o arquivo.";
        }
    } else {
        $response["error"] = "Erro no upload: " . $fileError;
    }
} else {
    $response["error"] = "Nenhum arquivo foi enviado.";
}
 
 echo json_encode($response);
?>




