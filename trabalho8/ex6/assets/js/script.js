window.onload = () => {
    // Seleciona todos os links de navegação
    const navigators = document.querySelectorAll('.container-navegacao-principal a');
  
    // Adiciona um evento de clique a cada link
    navigators.forEach((nav, index) => {
      nav.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        changeTab(index); // Chama a função para mudar a aba
      });
    });
  
    // Abre a primeira aba por padrão
    openTab(0);
  };
  
  function changeTab(index) {
    // Remove a classe 'tabActive' de todas as seções
    const tabs = document.querySelectorAll('.tabs section');
    tabs.forEach(tab => tab.classList.remove('tabActive'));
  
    // Remove a classe 'navActived' de todos os links de navegação
    const navActivated = document.querySelectorAll('.container-navegacao-principal a');
    navActivated.forEach(nav => nav.classList.remove('navActived'));
  
    // Adiciona a classe 'tabActive' à seção correspondente
    tabs[index].classList.add('tabActive');
  
    // Adiciona a classe 'navActived' ao link de navegação correspondente
    navActivated[index].classList.add('navActived');
  }
  
  function openTab(index) {
    // Chama a função changeTab para abrir a aba correspondente
    changeTab(index);
  }