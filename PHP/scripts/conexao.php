<?php
try
{
    $servidor = "localhost";
    $database = "sospetdb";
    $usuario = "root";
    $senha = "Sim@2022#";
    
    $conexao = new PDO("mysql:host=$servidor;dbname=$database;charset=utf8", $usuario, $senha);
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erro na conexão com o banco de dados: " . $e->getMessage();
    exit;
}
 
?>