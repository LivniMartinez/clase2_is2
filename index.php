<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <title>Manipulación del DOM</title>
</head>
<body>
    <h1 id="tituloPagina" class="text-success fw-bold">MANIPULACIÓN DEL DOM</h1>
    <br>
    <button id="botonClick">Click</button>
    <br>
    <div id="cajaTexto">
        <!-- comentario html -->
        <p id="parrafo1" class="text-success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo sed nemo autem facere! Autem molestiae cumque magnam odio voluptatum necessitatibus eos eligendi tempora ducimus. Necessitatibus consequuntur blanditiis assumenda eaque.</p>
        <p id="parrafo2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo sed nemo autem facere! Autem molestiae cumque magnam odio voluptatum necessitatibus eos eligendi tempora ducimus. Necessitatibus consequuntur blanditiis assumenda eaque.</p>
        <p id="parrafo3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo sed nemo autem facere! Autem molestiae cumque magnam odio voluptatum necessitatibus eos eligendi tempora ducimus. Necessitatibus consequuntur blanditiis assumenda eaque.</p>
        <p id="parrafo4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo sed nemo autem facere! Autem molestiae cumque magnam odio voluptatum necessitatibus eos eligendi tempora ducimus. Necessitatibus consequuntur blanditiis assumenda eaque.</p>
        <p id="parrafo5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo sed nemo autem facere! Autem molestiae cumque magnam odio voluptatum necessitatibus eos eligendi tempora ducimus. Necessitatibus consequuntur blanditiis assumenda eaque.</p>
    </div>
    <br>
    <div class="row">
        <div class="col">
            <form >
                <label for="email">Correo electrónico</label>
                <input type="email" name="email" id="email" value="texto de prueba ">
            </form>
        </div>
    </div>
    <a href="https://www.google.com">Ir a google</a>
    <a href="https://www.facebook.com">Ir a facebook</a>
    <a href="http://www.mipagina.com">Mi pagina</a>
    <script src="scripts.js"></script>
</body>
</html>