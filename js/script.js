// Detectar el movimiento del mouse sobre la imagen
document.getElementById("imagen").addEventListener("mousemove", showDescription);

function showDescription(e) {
    let x = e.pageX; // Obtener la posición X del mouse respecto al documento
    let y = e.pageY; // Obtener la posición Y del mouse respecto al documento

    // Ocultar todas las descripciones
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => desc.style.display = 'none');

    // Mostrar la descripción correspondiente según la posición del cursor
    let descriptionElement = null;

    if (e.offsetX > 214 && e.offsetX < 469 && e.offsetY > 0 && e.offsetY < 145) {
        descriptionElement = document.getElementById("description1");
    } else if (e.offsetX > 0 && e.offsetX < 200 && e.offsetY > 145 && e.offsetY < 350) {
        descriptionElement = document.getElementById("description2");
    } else if (e.offsetX > 450 && e.offsetX < 650 && e.offsetY > 125 && e.offsetY < 350) {
        descriptionElement = document.getElementById("description3");
    } else if (e.offsetX > 170 && e.offsetX < 350 && e.offsetY > 350 && e.offsetY < 500) {
        descriptionElement = document.getElementById("description4");
    }

    // Si se ha detectado una descripción, ajusta la posición
    if (descriptionElement) {
        descriptionElement.style.display = "block";
        let descriptionHeight = descriptionElement.offsetHeight;
        let descriptionWidth = descriptionElement.offsetWidth;

        // Posición a la derecha del cursor
        let posX = x + 10;

        // Posición arriba del cursor
        let posY = y - descriptionHeight - 10;

        // Asegurarse de que la descripción no salga del área visible
        if (posY < 0) { // Si se va demasiado arriba
            posY = y + 10; // Colocarla abajo del cursor en su lugar
        }
        if (posX + descriptionWidth > window.innerWidth) { // Si se va demasiado a la derecha
            posX = x - descriptionWidth - 10; // Colocarla a la izquierda del cursor
        }

        descriptionElement.style.left = posX + "px";  // Posicionar horizontalmente
        descriptionElement.style.top = posY + "px";   // Posicionar verticalmente
    }
}

// Al mover el mouse fuera de la imagen, ocultar todas las descripciones
document.getElementById("imagen").addEventListener("mouseleave", () => {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => desc.style.display = 'none');
});
