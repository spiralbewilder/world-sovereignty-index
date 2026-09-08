# World Sovereignty Index 2026 — public demo

Static GitHub Pages demo of the World Sovereignty Index public site.

**Demo URL (after Pages is enabled):** https://spiralbewilder.github.io/world-sovereignty-index/

This repository is the public HTML site only. It does **not** contain the scoring engine, country investigation records, or unpublished ledgers. Scores on the pages are transcribed from published scorecards; they are not computed in the browser.

Top navigation: Overview, About the Index, Factors, Methodology, Rankings & Data, FAQ. Country profiles are reached from the rankings table, not the top menu.

## Enable GitHub Pages (one click)

GitHub Actions cannot create the Pages site on a new repo (`Resource not accessible by integration`). Enable it once:

1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**, *or* **Deploy from a branch** `main` / `(root)`.
3. Re-run the **Deploy GitHub Pages** workflow, or push again.

## Local preview

```
python3 -m http.server 8765 --directory .
```

Then open http://127.0.0.1:8765/
