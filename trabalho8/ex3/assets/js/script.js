let itemCount = 0;

document.getElementById('interestInput').addEventListener('keypress', function(event) {
    // Verifica se a tecla pressionada é Enter
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita o comportamento padrão do Enter

        // Obtém o valor do campo de entrada
        const interest = event.target.value.trim();

        // Verifica se o valor não está vazio
        if (interest) {
            // Incrementa o contador de itens
            itemCount++;

            // Cria um novo item de lista
            const li = document.createElement('li');
            li.textContent = `${itemCount}. ${interest}`;

            // Cria o botão de remoção
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'X';
            removeBtn.className = 'remove-btn';

            // Adiciona o botão de remoção ao item de lista
            li.appendChild(removeBtn);

            // Adiciona o item de lista à lista ordenada
            document.getElementById('interestList').appendChild(li);

            // Limpa o campo de entrada
            event.target.value = '';

            // Adiciona um evento de clique ao botão de remoção
            removeBtn.addEventListener('click', function() {
                // Remove o item de lista quando o botão é clicado
                li.remove();
                // Reordena os itens restantes
                reorderList();
            });
        }
    }
});

function reorderList() {
    const listItems = document.querySelectorAll('#interestList li');
    itemCount = 0;
    listItems.forEach(li => {
        itemCount++;
        const interestText = li.textContent.slice(li.textContent.indexOf(' ') + 1, li.textContent.lastIndexOf('X')).trim();
        li.firstChild.textContent = `${itemCount}. ${interestText}`;
    });
}