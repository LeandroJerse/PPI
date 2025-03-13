let imagens = document.querySelectorAll('img');
imagens.forEach(imagem => {
    imagem.addEventListener('mouseenter', () => {
        imagem.style.boxShadow = '10px 10px 5px red';
    });
    imagem.addEventListener('mouseleave', () => {
        imagem.style.boxShadow = 'none';
    });
});