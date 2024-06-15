<?php
session_start();

$servername = "localhost";
$username = "restic";
$password = "r3st1c@2024";
$dbname = "restic";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titulo = $_POST['titulo'];
    $descricao = $_POST['descricao'];
    $autor = $_POST['autor'];

    $sql = "INSERT INTO ideias (titulo, descricao, autor) VALUES ('$titulo', '$descricao', '$autor')";

    if ($conn->query($sql) === TRUE) {
        $_SESSION['success'] = 1;
        header("Location: index.php");
        exit();
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
