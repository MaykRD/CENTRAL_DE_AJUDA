document.addEventListener('DOMContentLoaded', () => {
            const faqQuestions = document.querySelectorAll('.faq-q');
            const searchInput = document.getElementById('s-in');
            const faqItems = document.querySelectorAll('.faq-i');

            // Funcionalidade de Acordeão
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const icon = question.querySelector('.faq-ic');

                    // Fecha outras respostas abertas
                    document.querySelectorAll('.faq-a.open').forEach(openAnswer => {
                        if (openAnswer !== answer) {
                            openAnswer.classList.remove('open');
                            openAnswer.previousElementSibling.querySelector('.faq-ic').classList.remove('rotate');
                        }
                    });

                    // Alterna a resposta e o ícone do item clicado
                    answer.classList.toggle('open');
                    icon.classList.toggle('rotate');
                });
            });

            // Funcionalidade de Busca
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                faqItems.forEach(item => {
                    const questionText = item.querySelector('.faq-q').textContent.toLowerCase();
                    if (questionText.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });