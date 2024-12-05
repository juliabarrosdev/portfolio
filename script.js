// Função para adicionar ou remover a classe 'active' de acordo com a seção visível
function setActiveLink() {
    const sections = document.querySelectorAll('section'); // Seleciona todas as seções
    const navLinks = document.querySelectorAll('nav a'); // Seleciona todos os links dentro de <nav>

    let currentSection = '';

    // Verifica em qual seção o usuário está
    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Posição do topo da seção
        const sectionHeight = section.clientHeight; // Altura da seção

        // Verifica se a rolagem está dentro da seção
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSection = section.getAttribute('id'); // Pega o ID da seção visível
        }
    });

    // Adiciona a classe 'active' ao link correspondente
    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove a classe 'active' de todos os links
        const linkHref = link.getAttribute('href').substring(1); // Remove o "#" do href do link
        if (linkHref === currentSection) {
            link.classList.add('active'); // Adiciona a classe 'active' ao link correspondente
        }
    });
}

function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMenu() {
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    menu.classList.remove('active');
    overlay.classList.remove('active');
}
