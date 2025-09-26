<script>
    // 1. Função de Alternância do Menu Hamburguer (Mobile)
    function toggleMenu() {
        const nav = document.querySelector('nav');
        // Adiciona ou remove a classe 'open', que controla a visibilidade do menu no CSS Mobile
        nav.classList.toggle('open');
    }

    // 2. Lógica para Esconder o Menu ao Rolar a Página (Desktop/Scroll)
    // A lógica de esconder só deve ser aplicada se o menu mobile não estiver ativo,
    // mas por simplicidade e para manter seu código original, vamos mantê-la simples.

    let prevScrollpos = window.pageYOffset;
    const navBar = document.querySelector('header'); // Alterado para 'header' para mover o elemento correto
    const navHeight = navBar.offsetHeight;

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        
        // Se a tela for maior que 768px (Desktop), aplica o efeito de esconder/mostrar
        if (window.innerWidth > 768) {
             if (prevScrollpos > currentScrollPos) {
                // ROLANDO PARA CIMA: Mostra o header
                navBar.style.top = "0";
            } else {
                // ROLANDO PARA BAIXO: Esconde o header
                // Usamos navBar.offsetHeight para esconder exatamente o tamanho do header
                navBar.style.top = `-${navHeight}px`;
            }
        } else {
            // Em telas menores, garante que o header fique fixo no topo (0)
            navBar.style.top = "0";
        }

        prevScrollpos = currentScrollPos;
    }
</script>