document.addEventListener('DOMContentLoaded', function() {
    // Função para lidar com o envio do formulário de pesquisa
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchInput = document.querySelector('.search-input').value;
        const dateInput = document.querySelector('.date-input').value;
        const guestsInput = document.querySelector('.guests-input').value;
        
        alert(`Pesquisa realizada:\nHotel: ${searchInput}\nData: ${dateInput}\nHóspedes: ${guestsInput}`);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou redirecionar para uma página de resultados
    });

    // Animação suave ao scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Carregar dados do gráfico de preços (exemplo simplificado)
    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer) {
        const precosPorMes = {
            'JAN': 250, 'FEV': 270, 'MAR': 270, 'ABR': 210, 'MAI': 190,
            'JUN': 200, 'JUL': 200, 'AGO': 210, 'SET': 220, 'OUT': 200,
            'NOV': 250, 'DEZ': 270
        };

        let chartHTML = '<ul class="price-chart-list">';
        for (const [mes, preco] of Object.entries(precosPorMes)) {
            chartHTML += `
                <li class="price-chart-item">
                    <div class="price-bar" style="height: ${preco / 3}px;"></div>
                    <span class="month">${mes}</span>
                    <span class="price">R$${preco}</span>
                </li>
            `;
        }
        chartHTML += '</ul>';

        chartContainer.innerHTML = chartHTML;
    }

    // Toggle para menu mobile (adicione uma classe 'mobile-menu' ao seu nav)
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰';
    document.querySelector('.main-header').prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show-mobile-menu');
    });
});