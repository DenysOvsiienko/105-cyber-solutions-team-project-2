document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const modalSvg = document.querySelector(".modal-svg");

    document.querySelectorAll(".benefits-item").forEach(item => {
        item.addEventListener("click", () => {
            modalTitle.textContent = item.getAttribute("data-modal-title");
            modalText.textContent = item.getAttribute("data-modal-text");

            const svgIcon = item.querySelector("svg").cloneNode(true);
            modalSvg.innerHTML = "";
            modalSvg.appendChild(svgIcon);

            modal.style.display = "flex";
        });
    });

    document.querySelector(".close").addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
