# Coverage control — Chapter 17 (Shapley Values)

Source: https://christophm.github.io/interpretable-ml-book/shapley.html (accessed 2026-10-19)
Raw source: manuscript/shapley.qmd, christophM/interpretable-ml-book (master), 488 lines (+ `_box-shap-book.qmd` include)
Author: Christoph Molnar — CC BY-NC-SA 4.0
Persian: chapters/17-shapley.md (+ src/chapters/17-shapley.md)
Branch: translation/chapter-17-shapley (base: main)

Status values: pending / complete / needs-fix / blocked (all items verified against shapley.qmd on 2026-10-19; mdbook build checked: 6 images resolve, links resolve, 21 translator blocks styled)

Note: the pre-existing Persian chapter was a condensed translation (altered notation such as `v`/`x^{+j}`, different heading structure with "Estimating" nested under Theory, bullet-ized algorithm, callouts without the project's callout format, no in-image label translations, no translator notes). It is being replaced by a sentence-level translation.

| ID | Source item (qmd lines) | Persian location | Status |
|----|-------------------------|------------------|--------|
| H1 | Title + intro paragraph: player/payout analogy (1-6) | header + intro | complete |
| B1 | SHAP-book promo callout (box include, 9-13) + cover image | 💡 callout after intro | complete |
| S1 | Section "General idea" (15) | ## ایدهٔ کلی | complete |
| P1 | Apartment scenario, €300,000 vs €310,000 average (17-23) | ایدهٔ کلی | complete |
| F1 | Fig 17.1 shapley-instance.jpg + caption + in-image labels (25) | شکل ۱۷.۱ | complete |
| P2 | Linear case, LIME, Shapley 1953, coalition (27-34) | ایدهٔ کلی | complete |
| P3 | Players/Game/Payout mapping, difference -€10,000 (36-44) | ایدهٔ کلی | complete |
| P4 | Example answer: +30k, +10k, 0, -50k (46-48) | ایدهٔ کلی | complete |
| P5 | "How do we calculate…" + marginal contribution definition (50-53) | ایدهٔ کلی | complete |
| P6 | Walk-through of Fig 17.2 (55-64) | ایدهٔ کلی | complete |
| F2 | Fig 17.2 shapley-instance-intervention.jpg + caption + in-image labels (67) | شکل ۱۷.۲ | complete |
| P7 | Repeat for all coalitions, exponential time, sampling (69-72) | ایدهٔ کلی | complete |
| P8 | Fig 17.3 walk-through + 8 coalition list (74-86) | ایدهٔ کلی | complete |
| P9 | Weighted average, replacing absent values, complete distribution (88-91) | ایدهٔ کلی | complete |
| F3 | Fig 17.3 shapley-coalitions.jpg + caption + in-image labels (93) | شکل ۱۷.۳ | complete |
| S2 | Section "Examples and interpretation" (97) | ## مثال‌ها و تفسیر | complete |
| P10 | Interpretation of phi_j; classification/regression (111-113) | مثال‌ها | complete |
| P11 | Penguins RF intro + numbers (hidden R values 0.21/0.51/-0.31) (115-119) | مثال‌ها | complete |
| F4 | Fig 17.4 fig-shapley-penguins-plot-1.png + caption + in-image labels (122-131) | شکل ۱۷.۴ | complete |
| P12 | Reference dataset, same-species subset (133-138) | مثال‌ها | complete |
| F5 | Fig 17.5 fig-shapley-penguins-plot-species-1.png + caption + in-image labels (140-157) | شکل ۱۷.۵ | complete |
| W1 | Callout tip: Pick the reference data (159-166) | 💡 | complete |
| P13 | Bike data RF intro (187-188) | مثال‌ها | complete |
| F6 | Fig 17.6 fig-shapley-bike-plot-1.png + caption + in-image labels (190-198) | شکل ۱۷.۶ | complete |
| P14 | Bike result text (4945 / 4524 / 422) (200-203) | مثال‌ها | complete |
| W2 | Callout warning: Shapley values are not counterfactuals (208-216) | ⚠️ | complete |
| S3 | Section "Shapley value theory" intro (218-221) | ## نظریهٔ مقدار شپلی | complete |
| M1 | Linear model prediction formula + symbols (223-231) | نظریه | complete |
| M2 | Linear contribution phi_j formula + explanation (233-241) | نظریه | complete |
| M3 | Sum of contributions derivation (HTML align + epub variant) (243-266) | نظریه | complete |
| P15 | Interpretation of sum; model-agnostic motivation; game theory (269-277) | نظریه | complete |
| S4 | ### Definition: value function, Shapley formula (280-286) | ### تعریف | complete |
| M4 | Symbol list for formula, val_x(S) integral (288-291) | تعریف | complete |
| M5 | Multi-integration + 4-feature concrete example (293-297) | تعریف | complete |
| P16 | "Similar to linear model" (299) | تعریف | complete |
| W3 | Callout note: many uses of "value" (301-309) | 📝 | complete |
| P17 | Four properties intro (311) | تعریف | complete |
| A1 | Efficiency + formula (313-316) | تعریف | complete |
| A2 | Symmetry + formulas (318-330) | تعریف | complete |
| A3 | Dummy + formulas (332-344) | تعریف | complete |
| A4 | Additivity + formula + random-forest paragraph (346-352) | تعریف | complete |
| W4 | Callout note: Intuitive understanding (354-362) | 📝 | complete |
| S5 | ## Estimating Shapley values: exponential, Strumbelj 2014 formula (365-371) | ## تخمین مقادیر شپلی | complete |
| P18 | Frankenstein's Monster description, ordering trick (373-379) | تخمین | complete |
| AL1 | Algorithm: output/required/loop/steps/final average (381-394) | تخمین | complete |
| W5 | Callout tip: Reduce sample size (396-402) | 💡 | complete |
| P19 | Repeat for every feature; pointer to SHAP chapter (404-405) | تخمین | complete |
| S6 | Strengths: fair distribution, contrastive, solid theory (407-420) | ## نقاط قوت | complete |
| S7 | Limitations: computing time, misinterpretation, not local (Bilodeau), sparse, no prediction model, unrealistic instances (423-472) | ## محدودیت‌ها | complete |
| W6 | Callout tip: Combine with ceteris paribus and ICE (444-450) | 💡 | complete |
| S8 | Software and alternatives (475-487) | ## نرم‌افزار و جایگزین‌ها | complete |
