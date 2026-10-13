function renderQuestionGrid() {
  const grid = document.getElementById("questionGrid");
  if (!grid) return;

  grid.innerHTML = "";
  QUESTIONS.forEach((q, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "question-stage";
    if (state.perfect[q.id]) button.classList.add("done");

    button.innerHTML = `
      <span class="stage-number">${q.id}</span>
      <small>${escapeHtml(q.scene)}</small>
      ${state.perfect[q.id] ? '<span class="stage-check">✓</span>' : ''}
    `;

    button.addEventListener("click", () => {
      state.order = [...QUESTIONS];
      state.pos = index;
      renderQuestion();
      showScreen("quiz");
    });

    grid.appendChild(button);
  });
}

function backToQuestionGrid() {
  saveCurrentInputs();
  renderQuestionGrid();
  showScreen("start");
}

const listBtn = document.getElementById("listBtn");
if (listBtn) listBtn.addEventListener("click", backToQuestionGrid);

document.getElementById("homeBtn")?.addEventListener("click", renderQuestionGrid);
document.getElementById("restartBtn")?.addEventListener("click", renderQuestionGrid);

renderQuestionGrid();
