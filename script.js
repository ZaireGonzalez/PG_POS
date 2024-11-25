// Función para mostrar el módulo seleccionado y ocultar los demás
function showModule(moduleName) {
    // Primero, ocultar todos los módulos
    const modules = document.querySelectorAll('.module-container');
    modules.forEach(module => {
        module.classList.remove('active');
    });

    // Luego, mostrar el módulo correspondiente
    const activeModule = document.getElementById(moduleName);
    activeModule.classList.add('active');
}

// Asegurarse de que el módulo de "Ventas" sea el primero en aparecer por defecto
document.addEventListener('DOMContentLoaded', () => {
    showModule('ventas');
});
<script src="script.js"></script>
