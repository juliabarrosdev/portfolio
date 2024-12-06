// Função para adicionar ou remover a classe 'active' de acordo com a seção visível
function setActiveLink() {
    const sections = document.querySelectorAll('section'); // Seleciona todas as seções
    const navLinks = document.querySelectorAll('nav a'); // Seleciona todos os links dentro de <nav>

    let currentSection = ''; // Variável para armazenar a seção ativa

    // Verifica em qual seção o usuário está
    sections.forEach((section) => {
        const sectionTop = section.offsetTop; // Posição do topo da seção
        const sectionHeight = section.offsetHeight; // Altura da seção

        // Verifica se a rolagem está dentro da seção
        if (
            window.scrollY >= sectionTop - 100 && // Ajuste para considerar margens
            window.scrollY < sectionTop + sectionHeight - 100
        ) {
            currentSection = section.getAttribute('id'); // Captura o ID da seção visível
        }
    });

    // Adiciona a classe 'active' ao link correspondente e remove dos outros
    navLinks.forEach((link) => {
        const linkHref = link.getAttribute('href').substring(1); // Remove o "#" do href do link
        if (linkHref === currentSection) {
            link.classList.add('active'); // Adiciona a classe ao link correspondente
        } else {
            link.classList.remove('active'); // Remove de links que não estão ativos
        }
    });
}

// Função para abrir/fechar o menu móvel
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');

    // Alterna a classe 'menu-active' no menu e no overlay
    menu.classList.toggle('menu-active');
    overlay.classList.toggle('overlay-active');
}

// Função para fechar o menu móvel
function closeMenu() {
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');

    menu.classList.remove('menu-active');
    overlay.classList.remove('overlay-active');
}

// Fecha o menu móvel ao clicar em um link
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', () => {
        closeMenu(); // Fecha o menu móvel
    });
});

// Event listener para detectar rolagem e definir o link ativo
window.addEventListener('scroll', setActiveLink);
