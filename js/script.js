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

    if (e.offsetX > 214 && e.offsetX < 469 && e.offsetY > 0 && e.offsetY < 210) {
        descriptionElement = document.getElementById("description1");
    } else if (e.offsetX > 0 && e.offsetX < 219 && e.offsetY > 200 && e.offsetY < 410) {
        descriptionElement = document.getElementById("description2");
    } else if (e.offsetX > 507 && e.offsetX < 800 && e.offsetY > 131 && e.offsetY < 422) {
        descriptionElement = document.getElementById("description3");
    } else if (e.offsetX > 247 && e.offsetX < 454 && e.offsetY > 403 && e.offsetY < 605) {
        descriptionElement = document.getElementById("description4");
    }

    // Si se ha detectado una descripción, se muestra justo debajo del mouse
    if (descriptionElement) {
        descriptionElement.style.display = "block";
        descriptionElement.style.left = (x + 10) + "px";  // Ajuste de 10px para que no quede justo bajo el puntero
        descriptionElement.style.top = (y + 10) + "px";   // Ajuste de 10px para separar el texto del puntero
    }
}

// Al mover el mouse fuera de la imagen, ocultar todas las descripciones
document.getElementById("imagen").addEventListener("mouseleave", () => {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => desc.style.display = 'none');
});
