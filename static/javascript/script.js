function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

html = '<h6 style="width: 100%;"><i class="bi bi-info-circle"></i> Estás usando un TIPO</h6>';
if (isMobileDevice()) {
    document.getElementById('tipo-navegador').innerHTML = html.replace('TIPO', 'navegador de dispositivo móvil');
} else {
    document.getElementById('tipo-navegador').innerHTML = html.replace('TIPO', 'navegador de escritorio');
}