let subtitulos = document.querySelectorAll('h2');
subtitulos.forEach(subtitulo => {
    subtitulo.addEventListener('dblclick', () => {
        let childElements = subtitulo.nextElementSibling;
        while (childElements && childElements.tagName !== 'h2') {
            if (window.getComputedStyle(childElements).display === 'block') {
                childElements.style.display = 'none';
            } else {
                childElements.style.display = 'block';
            }
            childElements = childElements.nextElementSibling;
        }
    });
});

let childElements = document.querySelectorAll('h2 ~ *');
childElements.forEach(element => {
    element.style.display = 'block';
});
