# World Sovereignty Index 2026 — public demo

Static GitHub Pages demo of the World Sovereignty Index public site.

**Live demo:** https://spiralbewilder.github.io/world-sovereignty-index/

This repository contains only the public HTML site. It does **not** contain the scoring engine, country investigation records, or unpublished ledgers. Scores on the pages are transcribed from published scorecards; they are not computed in the browser.

Top navigation: Overview, About the Index, Factors, Methodology, Rankings & Data, FAQ. Country profiles are reached from the rankings table, not the top menu.

## Local preview

```
python3 -m http.server 8765 --directory .
```

Then open http://127.0.0.1:8765/
