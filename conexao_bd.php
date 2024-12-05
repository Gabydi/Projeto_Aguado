<?php
$db_server = 'localhost';
$db_usuario = 'root';
$db_senha = '';
$db_db = 'daysoundwave';

$mysqli = new mysqli($db_server, $db_usuario, $db_senha, $db_db);

if ($mysqli->connect_error) {
    die("Falha de conexão: " . $mysqli->connect_error);
}

?>
