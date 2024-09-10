<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode Toggle</title>
    <style>
        body {
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            transition: background-color 1s ease, color 1s ease;
        }

        #fundo {
            padding: 20px;
            text-align: center;
            border-radius: 10px;
            transition: background-color 1s ease;
        }

        #botao {
            background-color: #fff;
            font-size: 16px;
            color: black;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
        }

        .light-mode #botao:hover {
            box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.8); 
        }

        .dark-mode #botao:hover {
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8); 
        }

        .dark-mode {
            background-color: black;
            color: white;
        }
        .dark-mode #botao {
            background-color: #fff;
            color: black;
        }

        .light-mode {
            background-color: white;
            color: black;
        }

        .light-mode #botao {
            background-color: black;
            color: white;
        }

    </style>
</head>
<body>
        <button id="botao">
            Mudar de Cor
        </button>

    <script>
        let darkMode = false;
        const botao = document.getElementById('botao');
        const body = document.body;

        botao.addEventListener('click', function() {
            darkMode = !darkMode;

            if (darkMode) {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
            } else {
                body.classList.add('light-mode');
                body.classList.remove('dark-mode');
            }
        });
    </script>
</body>
</html>
