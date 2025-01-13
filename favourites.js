document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los botones de desplegable
    var dropdownBtns = document.querySelectorAll('.dropdown-btn');
    
    // Añadir evento a cada botón
    dropdownBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Alternar la clase activa para mostrar/ocultar el contenido
            this.classList.toggle('active');
            
            // Obtener el contenido desplegable
            var dropdownContent = this.nextElementSibling;

            // Cerrar todos los dropdowns si el contenido no está abierto
            document.querySelectorAll('.dropdown-content').forEach(function(content) {
                // Solo cerramos si no es el contenido actual
                if (content !== dropdownContent) {
                    content.style.display = 'none';
                }
            });

            // Mostrar u ocultar el contenido del desplegable actual
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    });
});
