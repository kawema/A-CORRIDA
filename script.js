document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    botoesProximo.forEach(botao => {
        botao.addEventListener('click', () => {
            const proximoPasso = botao.getAttribute('data-proximo');
            passos.forEach(passo => passo.classList.remove('ativo'));
            document.getElementById(`passo-${proximoPasso}`).classList.add('ativo');
        });
    });
});
