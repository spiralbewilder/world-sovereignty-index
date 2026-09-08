(function () {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  document.querySelectorAll(".bar[data-v], .track[data-v]").forEach(function (el) {
    const v = Number(el.getAttribute("data-v"));
    if (Number.isFinite(v)) {
      const fill = el.querySelector("i");
      if (fill) fill.style.width = Math.max(0, Math.min(1, v)) * 100 + "%";
    }
  });

  document.querySelectorAll("[data-factor-scores]").forEach(function (host) {
    let scores = {};
    try {
      scores = JSON.parse(host.getAttribute("data-factor-scores") || "{}");
    } catch (err) {
      scores = {};
    }
    const label = host.getAttribute("data-score-label") || "This country";
    host.querySelectorAll(".fc-card[data-code]").forEach(function (card) {
      const code = card.getAttribute("data-code");
      if (!(code in scores)) return;
      const slot = card.querySelector(".fc-score");
      if (!slot) return;
      const val = scores[code];
      slot.hidden = false;
      slot.textContent = label + " · " + code + " score " + val;
    });
  });
})();
