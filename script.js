document.addEventListener("DOMContentLoaded", () => {
    /* Efeito de rolagem suave */
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    /* Botão de Voltar ao Topo */
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerText = "↑ Topo";
    scrollTopBtn.id = "scrollTopBtn";
    document.body.appendChild(scrollTopBtn);

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
    `;

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

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
