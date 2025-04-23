document.addEventListener("DOMContentLoaded", () => {
    /* Efeito de rolagem suave */
    const sections = document.querySelectorAll("section");

    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    }

    /* Botão de Voltar ao Topo */
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerText = "↑ Topo";
    scrollTopBtn.id = "scrollTopBtn";
    document.body.appendChild(scrollTopBtn);

    // Estilo do botão
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 18px;
        font-size: 16px;
        background: #00ffcc;
        color: #1a1a1a;
        border: none;
        border-radius: 50px;
        box-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;

    // Evento de clique no botão
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Mostrar ou ocultar o botão com base na rolagem
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = "1";
            scrollTopBtn.style.visibility = "visible";
        } else {
            scrollTopBtn.style.opacity = "0";
            scrollTopBtn.style.visibility = "hidden";
        }
    });
});
{/* Estilo CSS para o botão de rolagem suave */
const style = document.createElement("style");
style.innerHTML = `
    #scrollTopBtn {
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    }
    #scrollTopBtn:hover {
        background: #00cc99;
        box-shadow: 0 0 15px rgba(0, 204, 153, 0.7);
    }
`;
    document.head.appendChild(style);
/* Fim do estilo CSS */
}
{/* Fim do código JavaScript */}