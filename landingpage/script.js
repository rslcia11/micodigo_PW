// Selecciona los elementos
const photoInput = document.getElementById('photoInput');
const defaultPhoto = document.getElementById('defaultPhoto');

// Escucha el evento de cambio en el input
photoInput?.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        // Cuando la imagen esté lista
        reader.onload = (e) => {
            defaultPhoto.src = e.target.result;
        };

        // Lee el archivo como una URL
        reader.readAsDataURL(file);
    }
});
