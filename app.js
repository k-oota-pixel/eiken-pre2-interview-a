const SUBJECTS = {
  man: { forms: ["a man", "the man", "he"] },
  woman: { forms: ["a woman", "the woman", "she"] },
  boy: { forms: ["a boy", "the boy", "he"] },
  girl: { forms: ["a girl", "the girl", "she"] },
  twoMen: { forms: ["two men", "the two men", "they"] },
  twoWomen: { forms: ["two women", "the two women", "they"] },
  twoBoys: { forms: ["two boys", "the two boys", "they"] }
};

const Q = (id, scene, actions) => ({ id, scene, image: `images/${String(id).padStart(2, "0")}.png`, actions });
const A = (subject, ...phrases) => ({ subject, phrases });

const QUESTIONS = [
  Q(1, "駅・バスターミナル", [
    A("boy", "is waiting for the elevator", "is waiting for an elevator"),
    A("girl", "is checking the timetable", "is looking at the timetable", "is checking a timetable"),
    A("man", "is buying a ticket", "is getting a ticket"),
    A("boy", "is getting off a bus", "is getting off the bus"),
    A("woman", "is getting into a taxi", "is getting into the taxi", "is getting in a taxi")
  ]),
  Q(2, "図書館", [
    A("woman", "is reading a book"),
    A("man", "is taking a book from the shelf", "is taking a book off the shelf", "is getting a book from the shelf"),
    A("girl", "is using a computer", "is using the computer", "is working on a computer"),
    A("boy", "is talking on the phone", "is talking on a phone"),
    A("woman", "is taking something out of her bag", "is taking something out of a bag")
  ]),
  Q(3, "教室", [
    A("man", "is writing something on the blackboard", "is writing on the blackboard", "is writing something on the board"),
    A("boy", "is listening to music"),
    A("boy", "is cutting a piece of paper", "is cutting paper"),
    A("girl", "is drawing a picture", "is drawing"),
    A("boy", "is running")
  ]),
  Q(4, "公園", [
    A("girl", "is walking a dog", "is walking the dog"),
    A("girl", "is running after a dog", "is running after the dog", "is chasing a dog", "is chasing the dog"),
    A("woman", "is reading a book"),
    A("boy", "is feeding birds", "is feeding the birds", "is feeding pigeons", "is feeding the pigeons"),
    A("boy", "is taking a picture", "is taking a photo", "is taking pictures", "is taking photos")
  ]),
  Q(5, "花屋・ガーデンショップ", [
    A("man", "is watering flowers", "is watering the flowers", "is watering plants"),
    A("woman", "is planting flowers", "is planting a flower"),
    A("man", "is putting some flowers on the shelf", "is putting flowers on the shelf", "is putting a flower on the shelf"),
    A("woman", "is choosing a bag", "is looking at a bag"),
    A("man", "is counting money", "is counting some money")
  ]),
  Q(6, "キッチン・ダイニング", [
    A("woman", "is cooking"),
    A("man", "is pouring some juice into a glass", "is pouring juice into a glass", "is pouring orange juice into a glass"),
    A("woman", "is setting the table"),
    A("man", "is washing his hands", "is washing hands"),
    A("boy", "is cutting cake", "is cutting a cake", "is cutting the cake")
  ]),
  Q(7, "スーパー", [
    A("girl", "is looking at a map", "is checking a map", "is looking at the map"),
    A("woman", "is pushing a cart", "is pushing a shopping cart", "is pushing the cart"),
    A("man", "is pulling a cart", "is pulling a shopping cart", "is pulling the cart"),
    A("man", "is putting something into his bag", "is putting something in his bag", "is putting something into a bag"),
    A("woman", "is taking something out of her bag", "is taking something out of a bag")
  ]),
  Q(8, "オフィスロビー", [
    A("woman", "is taking off her jacket", "is taking her jacket off"),
    A("twoMen", "are shaking hands", "are shaking hands with each other"),
    A("man", "is wiping his glasses", "is cleaning his glasses", "is wiping the glasses"),
    A("man", "is cleaning the floor", "is mopping the floor")
  ]),
  Q(9, "店・建物の前", [
    A("woman", "is cleaning a window", "is cleaning the window", "is wiping a window", "is wiping the window"),
    A("man", "is putting a poster on the wall", "is putting up a poster", "is putting up a poster on the wall"),
    A("woman", "is fixing a door", "is fixing the door", "is repairing a door"),
    A("man", "is painting a wall", "is painting the wall"),
    A("man", "is walking up the stairs", "is going up the stairs")
  ]),
  Q(10, "リサイクル・清掃活動", [
    A("woman", "is putting cans into a machine", "is putting a can into a machine", "is putting a can in a machine"),
    A("boy", "is throwing away a can", "is throwing a can away", "is putting a can in the trash"),
    A("man", "is picking up trash", "is picking up some trash", "is picking up litter"),
    A("woman", "is carrying a box", "is carrying the box"),
    A("man", "is lifting a box", "is lifting the box")
  ]),
  Q(11, "牧場", [
    A("man", "is brushing a horse", "is brushing the horse"),
    A("boy", "is running"),
    A("woman", "is doing exercise", "is exercising", "is stretching"),
    A("woman", "is holding a baby", "is carrying a baby"),
    A("girl", "is taking a picture", "is taking a photo", "is taking pictures", "is taking photos")
  ]),
  Q(12, "リビング", [
    A("boy", "is turning on the tv", "is turning the tv on"),
    A("girl", "is watching tv", "is watching the tv", "is watching a movie", "is watching a dvd"),
    A("man", "is playing a video game", "is playing video games", "is playing a game"),
    A("woman", "is putting on sunglasses", "is putting her sunglasses on"),
    A("man", "is opening an umbrella", "is opening his umbrella")
  ]),
  Q(13, "デパート", [
    A("woman", "is choosing a bag", "is looking at a bag"),
    A("man", "is counting money", "is counting some money"),
    A("girl", "is putting something into her bag", "is putting something in her bag", "is putting something into her backpack"),
    A("twoWomen", "are waving to each other", "are waving at each other")
  ]),
  Q(14, "引っ越し・荷造り", [
    A("man", "is carrying a box", "is carrying the box"),
    A("woman", "is lifting a box", "is lifting the box"),
    A("girl", "is wrapping a box", "is wrapping the box", "is packing a box"),
    A("man", "is fixing a door", "is fixing the door", "is repairing a door"),
    A("boy", "is cleaning the floor", "is wiping the floor")
  ]),
  Q(15, "学校の廊下", [
    A("man", "is putting a poster on the wall", "is putting up a poster", "is putting up a poster on the wall"),
    A("girl", "is talking on the phone", "is talking on a phone"),
    A("boy", "is listening to music"),
    A("woman", "is closing a curtain", "is closing the curtain"),
    A("man", "is reading a book")
  ]),
  Q(16, "病院・クリニック", [
    A("woman", "is holding a baby", "is carrying a baby"),
    A("man", "is washing his hands", "is washing hands"),
    A("girl", "is using a computer", "is using the computer"),
    A("boy", "is taking something out of his bag", "is taking something out of a bag", "is taking something out of his backpack"),
    A("man", "is counting money", "is counting some money")
  ]),
  Q(17, "ピクニック", [
    A("girl", "is eating a sandwich", "is eating the sandwich"),
    A("man", "is pouring some juice into a glass", "is pouring juice into a glass", "is pouring orange juice into a glass"),
    A("woman", "is setting the table"),
    A("boy", "is feeding birds", "is feeding the birds", "is feeding pigeons", "is feeding the pigeons"),
    A("woman", "is waving a flag", "is waving the flag")
  ]),
  Q(18, "図工・美術室", [
    A("boy", "is cutting a piece of paper", "is cutting paper"),
    A("girl", "is drawing a picture", "is drawing"),
    A("woman", "is wrapping a box", "is wrapping the box"),
    A("boy", "is using a computer", "is using the computer", "is working on a computer"),
    A("man", "is cleaning the floor", "is mopping the floor")
  ]),
  Q(19, "駐車場・駐輪場", [
    A("man", "is parking his bicycle", "is parking a bicycle", "is parking his bike"),
    A("girl", "is pushing a bicycle", "is pushing her bicycle", "is pushing a bike"),
    A("woman", "is riding a bicycle", "is riding her bicycle", "is riding a bike"),
    A("man", "is getting out of his car", "is getting out of a car", "is getting out of the car"),
    A("boy", "is opening an umbrella", "is opening his umbrella")
  ]),
  Q(20, "校庭・スポーツ広場", [
    A("twoBoys", "are playing soccer", "are playing football"),
    A("woman", "is waving a flag", "is waving the flag"),
    A("man", "is doing exercise", "is exercising", "is stretching"),
    A("girl", "is taking a picture", "is taking a photo", "is taking pictures", "is taking photos")
  ])
];

const $ = (id) => document.getElementById(id);
globalThis.MonstudyMaterial?.setActivityGuard(()=>!$('quizScreen').classList.contains('hidden'));
const state = {
  order: [...QUESTIONS],
  pos: 0,
  answers: {},
  perfect: {},
  revealed: {}
};

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/\bt\.v\.\b/g, "tv")
    .replace(/[^a-z0-9'\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function variantsFor(action) {
  const subjects = SUBJECTS[action.subject].forms;
  const out = [];
  subjects.forEach(s => action.phrases.forEach(p => out.push(normalize(`${s} ${p}`))));
  return [...new Set(out)];
}

function canonical(action) {
  return `${SUBJECTS[action.subject].forms[0]} ${action.phrases[0]}.`;
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}

function tokenSpellCheck(candidate, variant) {
  const c = candidate.split(" ");
  const v = variant.split(" ");
  if (c.length !== v.length) return null;
  const fixes = [];
  for (let i = 0; i < c.length; i++) {
    if (c[i] === v[i]) continue;
    const d = levenshtein(c[i], v[i]);
    const max = Math.min(c[i].length, v[i].length) >= 5 ? 2 : 1;
    if (d > max || c[i].length < 2 || v[i].length < 2) return null;
    fixes.push([c[i], v[i]]);
  }
  if (!fixes.length || fixes.length > 2) return null;
  return fixes;
}

const EXPLICIT_SUBJECTS = [
  ["two women", "twoWomen"], ["the two women", "twoWomen"],
  ["two men", "twoMen"], ["the two men", "twoMen"],
  ["two boys", "twoBoys"], ["the two boys", "twoBoys"],
  ["a woman", "woman"], ["the woman", "woman"],
  ["a man", "man"], ["the man", "man"],
  ["a girl", "girl"], ["the girl", "girl"],
  ["a boy", "boy"], ["the boy", "boy"]
].sort((a,b) => b[0].length - a[0].length);

function splitExplicitSubject(candidate) {
  for (const [text, key] of EXPLICIT_SUBJECTS) {
    if (candidate === text || candidate.startsWith(text + " ")) {
      return { key, rest: candidate.slice(text.length).trim() };
    }
  }
  return null;
}

function classifyAgainst(candidateRaw, action) {
  const candidate = normalize(candidateRaw);
  if (!candidate) return { type: "blank", msg: "英文を入力しよう。" };
  const variants = variantsFor(action);
  if (variants.includes(candidate)) return { type: "correct", msg: "Correct! ✓" };

  const split = splitExplicitSubject(candidate);
  if (split && split.key !== action.subject) {
    const predicateVariants = action.phrases.map(normalize);
    if (predicateVariants.includes(split.rest)) {
      return { type: "person", msg: "動作は合っています。人物（boy / girl / man / woman）を確認しよう。" };
    }
  }

  if (split) {
    const correctIsPlural = action.subject.startsWith("two");
    const firstPredicate = normalize(action.phrases[0]);
    const withoutBe = firstPredicate.replace(/^(is|are)\s+/, "");
    if (split.key === action.subject && split.rest === withoutBe) {
      return { type: "grammar", msg: `be動詞が必要です。${correctIsPlural ? "are" : "is"} を確認しよう。` };
    }
    if (split.key === action.subject) {
      if (!correctIsPlural && split.rest.startsWith("are ")) return { type: "grammar", msg: "主語は1人なので be動詞は is です。" };
      if (correctIsPlural && split.rest.startsWith("is ")) return { type: "grammar", msg: "主語は複数なので be動詞は are です。" };
    }
  }

  for (const variant of variants) {
    const fixes = tokenSpellCheck(candidate, variant);
    if (fixes) {
      const text = fixes.map(([from, to]) => `${from} → ${to}`).join(" / ");
      return { type: "spelling", msg: `Almost! スペルを確認：${text}` };
    }
  }

  const hasBe = /\b(is|are)\b/.test(candidate);
  const hasIng = /\b[a-z]+ing\b/.test(candidate);
  if (!hasBe && hasIng) return { type: "grammar", msg: "進行形には be動詞（is / are）が必要です。" };
  if (hasBe && !hasIng) return { type: "grammar", msg: "動詞を -ing 形にできているか確認しよう。" };

  return { type: "wrong", msg: "Try again. 絵の人物と動作をもう一度確認しよう。" };
}

function evaluateInputs(question, values) {
  const results = new Array(values.length);
  const used = new Set();

  values.forEach((raw, i) => {
    const candidate = normalize(raw);
    if (!candidate) return;
    const matches = question.actions
      .map((a, idx) => ({ idx, ok: variantsFor(a).includes(candidate) }))
      .filter(x => x.ok);
    const free = matches.find(x => !used.has(x.idx));
    if (free) {
      used.add(free.idx);
      results[i] = { type: "correct", msg: "Correct! ✓", actionIndex: free.idx };
    } else if (matches.length) {
      results[i] = { type: "duplicate", msg: "同じ動作を2回書いています。別の人物を説明しよう。" };
    }
  });

  values.forEach((raw, i) => {
    if (results[i]) return;
    if (!normalize(raw)) {
      results[i] = { type: "blank", msg: "英文を入力しよう。" };
      return;
    }
    const candidates = question.actions
      .map((a, idx) => ({ idx, res: classifyAgainst(raw, a) }))
      .filter(x => !used.has(x.idx));
    const priority = { spelling: 1, person: 2, grammar: 3, wrong: 9, blank: 10 };
    candidates.sort((a,b) => (priority[a.res.type] ?? 8) - (priority[b.res.type] ?? 8));
    results[i] = candidates[0]?.res || { type: "wrong", msg: "Try again." };
  });

  return results;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(name) {
  $("startScreen").classList.toggle("hidden", name !== "start");
  $("quizScreen").classList.toggle("hidden", name !== "quiz");
  $("resultScreen").classList.toggle("hidden", name !== "result");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = state.order[state.pos];
  $("problemLabel").textContent = `QUESTION ${state.pos + 1}`;
  $("sceneLabel").textContent = q.scene;
  $("currentNum").textContent = state.pos + 1;
  $("totalNum").textContent = state.order.length;
  $("progressBar").style.width = `${((state.pos + 1) / state.order.length) * 100}%`;
  $("questionImage").src = q.image;
  $("questionImage").alt = `${q.scene}のPicture A練習イラスト`;
  $("prevBtn").disabled = state.pos === 0;
  $("nextBtn").textContent = state.pos === state.order.length - 1 ? "結果を見る →" : "次へ →";
  $("modelAnswers").classList.add("hidden");
  $("revealBtn").textContent = "模範解答";

  const saved = state.answers[q.id] || Array(q.actions.length).fill("");
  const area = $("answerArea");
  area.innerHTML = "";
  q.actions.forEach((_, i) => {
    const row = document.createElement("div");
    row.className = "answer-item";
    row.innerHTML = `
      <div class="answer-num">${i + 1}</div>
      <div class="answer-main">
        <input type="text" autocomplete="off" autocapitalize="sentences" spellcheck="false" aria-label="Answer ${i + 1}" value="${escapeHtml(saved[i] || "")}" placeholder="e.g. A boy is ..." />
        <div class="feedback"></div>
      </div>`;
    area.appendChild(row);
  });

  area.querySelectorAll("input").forEach((input, i) => {
    input.addEventListener("input", saveCurrentInputs);
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        const inputs = [...area.querySelectorAll("input")];
        if (i < inputs.length - 1) inputs[i + 1].focus();
        else checkCurrent();
      }
    });
  });

  $("retryBtn").classList.add("hidden");
  if (state.revealed[q.id]) showModelAnswers(false);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>'"]/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[ch]));
}

function saveCurrentInputs() {
  const q = state.order[state.pos];
  state.answers[q.id] = [...$("answerArea").querySelectorAll("input")].map(x => x.value);
}

function clearFeedback() {
  $("answerArea").querySelectorAll("input").forEach(input => input.classList.remove("correct", "almost", "wrong"));
  $("answerArea").querySelectorAll(".feedback").forEach(f => { f.className = "feedback"; f.textContent = ""; });
}

function checkCurrent() {
  saveCurrentInputs();
  const q = state.order[state.pos];
  const values = state.answers[q.id];
  const results = evaluateInputs(q, values);if(values.some(v=>v.trim()))window.EnglishPlayroomCoins?.recordTitleEvent?.('eiken-pre2-interview-a',{kind:'answer',itemId:String(q.id),score:state.revealed[q.id]?0:results.filter(r=>r.type==='correct').length,total:results.length});
  const inputs = [...$("answerArea").querySelectorAll("input")];
  const feedbacks = [...$("answerArea").querySelectorAll(".feedback")];
  clearFeedback();

  results.forEach((r, i) => {
    const input = inputs[i];
    const fb = feedbacks[i];
    if (r.type === "correct") {
      input.classList.add("correct"); fb.classList.add("good");
    } else if (["spelling", "person", "grammar"].includes(r.type)) {
      input.classList.add("almost"); fb.classList.add("warn");
    } else {
      input.classList.add("wrong"); fb.classList.add("bad");
    }
    fb.textContent = r.msg;
  });

  const allCorrect = results.every(r => r.type === "correct");
  state.perfect[q.id] = allCorrect && !state.revealed[q.id];
  $("retryBtn").classList.toggle("hidden", allCorrect);
  if(values.some(value=>String(value||'').trim()))window.EnglishPlayroomCoins?.recordLearningActivity?.();
  if(results.filter(r=>r.type==='correct').length>=2)window.EnglishPlayroomCoins?.awardPre2A?.(q.id);
}

function showModelAnswers(markRevealed = true) {
  const q = state.order[state.pos];
  if (markRevealed) {
    state.revealed[q.id] = true;
    state.perfect[q.id] = false;
  }
  const box = $("modelAnswers");
  box.innerHTML = `<h3>模範解答</h3><ol>${q.actions.map(a => `<li>${escapeHtml(canonical(a))}</li>`).join("")}</ol>`;
  box.classList.remove("hidden");
  $("revealBtn").textContent = "模範解答を表示中";
}

function go(delta) {
  saveCurrentInputs();
  const next = state.pos + delta;
  if (next < 0) return;
  if (next >= state.order.length) {
    showResults();
    return;
  }
  state.pos = next;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showResults() {
  const perfect = QUESTIONS.filter(q => state.perfect[q.id]).length;
  $("perfectScore").textContent = `${perfect} / ${QUESTIONS.length}`;
  let msg = "最後まで取り組めました。間違えた問題は、絵を見ながらもう一度声に出して練習してみよう。";
  if (perfect >= 18) msg = "Excellent! かなり安定しています。次は入力する前に、まず声に出して答えてみよう。";
  else if (perfect >= 14) msg = "Great job! かなりできています。△になった語や表現をもう一度確認しよう。";
  else if (perfect >= 8) msg = "Good work! 正解できた表現を土台にして、-ing形と前置詞を復習しよう。";
  $("resultText").textContent = msg;
  showScreen("result");
}

function resetSession() {
  state.order = $("shuffleToggle").checked ? shuffle(QUESTIONS) : [...QUESTIONS];
  state.pos = 0;
  state.answers = {};
  state.perfect = {};
  state.revealed = {};
  renderQuestion();
  showScreen("quiz");
}

$("startBtn").addEventListener("click", resetSession);
$("restartBtn").addEventListener("click", () => showScreen("start"));
$("homeBtn").addEventListener("click", () => showScreen("start"));
$("checkBtn").addEventListener("click", checkCurrent);
$("retryBtn").addEventListener("click", () => { clearFeedback(); $("retryBtn").classList.add("hidden"); });
$("revealBtn").addEventListener("click", () => showModelAnswers(true));
$("prevBtn").addEventListener("click", () => go(-1));
$("nextBtn").addEventListener("click", () => go(1));

showScreen("start");
