<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Ideias Inovadoras</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css">
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="img/logo.png" alt="Logo">
        </div>
        <h1>Cadastro de Ideias Inovadoras - RSC</h1>
        <?php
        session_start();
        if (isset($_SESSION['success']) && $_SESSION['success'] == 1):
            echo '<script>
                    document.addEventListener("DOMContentLoaded", function() {
                        swal({
                            title: "Sucesso!",
                            text: "Nova ideia cadastrada com sucesso!",
                            type: "success"
                        }).then(function() {
                            window.location = "index.php";
                        });
                    });
                  </script>';
            unset($_SESSION['success']);
        endif;
        ?>
        <form id="ideiaForm" action="cadastrar.php" method="POST">
            <label for="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo" required>

            <label for="descricao">Descrição:</label>
            <textarea id="descricao" name="descricao" required></textarea>

            <label for="autor">Autor:</label>
            <input type="text" id="autor" name="autor" required>

            <button type="submit">Cadastrar Ideia</button>
        </form>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
</body>
</html>
