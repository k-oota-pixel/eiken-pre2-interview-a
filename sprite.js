(() => {
  const img = document.getElementById("questionImage");
  if (!img) return;

  // <img> に存在しない 01.webp などを残すと、ブラウザによっては
  // 壊れた画像アイコンが表示されるため、透明な1px画像を常に実体として使う。
  const TRANSPARENT_PIXEL =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

  const style = document.createElement("style");
  style.textContent = `
    #questionImage {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: fill;
      background-repeat: no-repeat;
      background-size: 500% 100%;
      background-position: 0 0;
      background-color: #edf2f5;
    }
  `;
  document.head.appendChild(style);

  let applying = false;

  function applySprite() {
    if (applying) return;

    const src = img.getAttribute("src") || "";
    const match = src.match(/images\/(\d{2})\.webp(?:\?.*)?$/);
    if (!match) return;

    const id = Number(match[1]);
    if (!Number.isInteger(id) || id < 1 || id > 20) return;

    const strip = Math.floor((id - 1) / 5) + 1;
    const position = ((id - 1) % 5) * 25;
    const label = img.getAttribute("alt") || `Question ${id}`;

    applying = true;
    img.style.backgroundImage = `url("images/strip${strip}.webp")`;
    img.style.backgroundPosition = `${position}% 0`;
    img.setAttribute("role", "img");
    img.setAttribute("aria-label", label);
    img.setAttribute("alt", "");
    img.setAttribute("src", TRANSPARENT_PIXEL);
    applying = false;
  }

  const observer = new MutationObserver((records) => {
    if (records.some(record => record.attributeName === "src")) applySprite();
  });
  observer.observe(img, { attributes: true, attributeFilter: ["src"] });
  applySprite();
})();
