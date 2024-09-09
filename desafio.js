<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            background-color: #A48885;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        #fundo {
            background-color:beige;
            padding: 100%;
            text-align: center;
        }

        #botao {
            background-color: #fff;
            font-size: 8px;
        }
    </style>
</head>
<body>
    <div id="fundo">
        <button id="botao">
            <h1>Mudar de Cor</h1>
        </button>
    </div>

    <script>
let corOriginal = 'beige'

    document.getElementById('botao').addEventListener('click', function() {
            document.getElementById('fundo').style.backgroundColor = 'grey';
        });

      


    </script>
</body>
</html>
