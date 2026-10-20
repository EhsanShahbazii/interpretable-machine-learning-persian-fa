# Coverage control — Chapter 18 (SHAP)

Source: https://christophm.github.io/interpretable-ml-book/shap.html (accessed 2026-10-20)
Raw source: manuscript/shap.qmd, christophM/interpretable-ml-book (master), 536 lines (+ `_box-shap-book.qmd` include)
Author: Christoph Molnar — CC BY-NC-SA 4.0
Persian: chapters/18-shap.md (+ src/chapters/18-shap.md)
Branch: translation/chapter-18-shap (base: main)

Status values: pending / complete / needs-fix / blocked

Note: the pre-existing Persian chapter was condensed and altered (notation changed: `x_1..x_4` instead of park/cat/area/floor, permutation formulas rewritten, 2 figures swapped for a combined PNG, cheat-sheet link wrong, no in-image label translations, no translator notes). It is replaced by a sentence-level translation.

| ID | Source item (qmd lines) | Persian location | Status |
|----|-------------------------|------------------|--------|
| H1 | Title + intro: SHAP definition, read Shapley chapter first (5-7) | intro | pending |
| P1 | History 1953/2011/2014/2017 (10-14) | intro | pending |
| P2 | "Rebranding" paragraph; text and image models (16-17) | intro | pending |
| P3 | "Shapley values 2.0", emphasis of chapter (19-21) | intro | pending |
| B1 | SHAP-book promo callout (box include, 23-27) + cover image | callout | pending |
| S1 | ## SHAP theory (30) | ## نظریهٔ SHAP | pending |
| P4 | Goal, players, superpixels (32-38) | theory | pending |
| M1 | Additive feature attribution formula g(z') + symbols (39-45) | theory | pending |
| P5 | Coalition vector = simplified features; mapping (46-52) | theory | pending |
| M2 | x' all ones; simplified formula (53-60) | theory | pending |
| P6 | Shapley uniqueness; three SHAP properties intro (63-66) | theory | pending |
| A1 | Local accuracy + formulas (68-75) | theory | pending |
| A2 | Missingness + formula + book-keeping quote (77-89) | theory | pending |
| A3 | Consistency + formulas + Supplemental link (91-104) | theory | pending |
| S2 | ## SHAP estimation (106-108) | ## تخمین SHAP | pending |
| S3 | ### KernelSHAP intro (110-116) | KernelSHAP | pending |
| L1 | Five-step list (118-124) | KernelSHAP | pending |
| P7 | Coalition sampling, h_x mapping, tabular (126-136) | KernelSHAP | pending |
| F1 | Fig 18.1 shap-simplified-features.jpg + caption + in-image labels (138) | شکل ۱۸.۱ | pending |
| M3 | h_x marginal expectation formula (141-143) | KernelSHAP | pending |
| P8 | Marginal vs conditional sampling, Aas 2021 (145-152) | KernelSHAP | pending |
| W1 | Callout warning: conditional Shapley values (154-161) | ⚠️ | pending |
| P9 | Images mapping h_x (164-165) | KernelSHAP | pending |
| F2 | Fig 18.2 shap-superpixel.jpg + caption + in-image labels (167) | شکل ۱۸.۲ | pending |
| P10 | SHAP vs LIME weighting, intuition (170-180) | KernelSHAP | pending |
| M4 | SHAP kernel formula + symbols + LIME remark (182-186) | KernelSHAP | pending |
| P11 | Sampling trick, 2M coalitions (189-193) | KernelSHAP | pending |
| M5 | Weighted linear model g, loss L, Z (196-208) | KernelSHAP | pending |
| P12 | Regularization, L1, caveat (211-214) | KernelSHAP | pending |
| S4 | ### TreeSHAP (216-249) incl. complexity, 2 versions, interventional, path-dependent | TreeSHAP | pending |
| S5 | ### Permutation Method intro (251-254) | روش جایگشت | pending |
| P13 | Penguin-free example: park, cat, area, floor; forward/backward lists (256-275) | روش جایگشت | pending |
| P14 | Model-call reduction, p! permutations, formulas, antithetic, efficiency, default 10 (277-298) | روش جایگشت | pending |
| S6 | ## Example (300-316) | ## مثال | pending |
| W2 | Callout tip: cheatsheet (319-334) + image | 💡 | pending |
| F3 | Fig 18.3 force plots (two images) + caption + in-image labels (339-361) | شکل ۱۸.۳ | pending |
| S7 | ## SHAP aggregation plots (363-372) | تجمیع | pending |
| S8 | ### SHAP Feature Importance + formula + Fig 18.4 (374-392) | اهمیت ویژگی | pending |
| F4 | Fig 18.4 shap-importance.jpg + labels (386) | شکل ۱۸.۴ | pending |
| S9 | ### Summary plot + Fig 18.5 (397-409) | نمودار خلاصه | pending |
| S10 | ### Dependence plot + Fig 18.6 (413-429) | نمودار وابستگی | pending |
| S11 | ### Interaction values + formulas + Fig 18.7 + tip callout (432-458) | تعامل | pending |
| S12 | ### Clustering + Fig 18.8 (461-479) | خوشه‌بندی | pending |
| S13 | ## Strengths (482-499) | نقاط قوت | pending |
| S14 | ## Limitations (501-522) | محدودیت‌ها | pending |
| S15 | ## Software (526-535) | نرم‌افزار | pending |
| X1 | Citations: Lundberg 2017/2019, Štrumbelj 2011/2014, Aas 2021, Sundararajan 2020, Janzing 2020, Mitchell 2022, Muschalik 2024, Slack 2020 | links to Appendix D | pending |
