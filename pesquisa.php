<?php
include 'conexao_bd.php'; 
if(!isset($_GET['pesquisa'])) {
?>
    <tr>
        <td colspan="2">Digite algo para pesquisar...</td>  
    </tr>
<?php
    } else {

        $pesquisa = $mysqli->real_escape_string($_GET['pesquisa']); 
                            
        // $sql_code = "SELECT * FROM daysoundwave WHERE artista LIKE '%$pesquisa%' OR genero LIKE '%$pesquisa%'"; ERRADO
        $sql_code = "SELECT * FROM artista WHERE artista LIKE '%$pesquisa%'"; 
        $sql_code = "SELECT * FROM genero WHERE genero LIKE '%$pesquisa%'";

        $sql_query = $mysqli->query($sql_code) or die("ERRO ao consultar! " . $mysqli->error); 
                            
        if ($sql_query->num_rows == 0) {
        ?>
        <tr>
            <td colspan="2">Nenhum resultado encontrado...</td>
        </tr>
        <?php
        } else {
                    while($dados = $sql_query->fetch_assoc()) {  
        ?>
        <tr>
            <td><?php echo $dados['artista']; ?></td>
            <td><?php echo $dados['genero']; ?></td>
        </tr>
    <?php
    }
}
}
?>
