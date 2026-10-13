(() => {
  const img = document.getElementById("questionImage");
  if (!img) return;

  const style = document.createElement("style");
  style.textContent = `
    #questionImage {
      width: 100%;
      height: 100%;
      display: block;
      background-repeat: no-repeat;
      background-size: 500% 100%;
      background-position: 0 0;
      background-color: #edf2f5;
    }
  `;
  document.head.appendChild(style);

  function applySprite() {
    const src = img.getAttribute("src") || "";
    const match = src.match(/images\/(\d{2})\.webp(?:\?.*)?$/);
    if (!match) return;

    const id = Number(match[1]);
    if (!Number.isInteger(id) || id < 1 || id > 20) return;

    const strip = Math.floor((id - 1) / 5) + 1;
    const position = ((id - 1) % 5) * 25;
    const label = img.getAttribute("alt") || `Question ${id}`;

    img.style.backgroundImage = `url("images/strip${strip}.webp")`;
    img.style.backgroundPosition = `${position}% 0`;
    img.setAttribute("role", "img");
    img.setAttribute("aria-label", label);
    img.setAttribute("alt", "");
    img.removeAttribute("src");
  }

  const observer = new MutationObserver((records) => {
    if (records.some(record => record.attributeName === "src")) applySprite();
  });
  observer.observe(img, { attributes: true, attributeFilter: ["src"] });
  applySprite();
})();
