# Coverage control — Chapter 16 (Scoped Rules / Anchors)

Source: https://christophm.github.io/interpretable-ml-book/anchors.html (accessed 2026-10-18)
Raw source: manuscript/anchors.qmd, christophM/interpretable-ml-book (master), 328 lines
Authors: Tobias Goerke & Magdalena Lang (with later edits from Christoph Molnar) — CC BY-NC-SA 4.0
Persian: chapters/16-anchors.md (+ src/chapters/16-anchors.md)
Branch: translation/chapter-16-anchors (base: main)

Status values: pending / complete / needs-fix / blocked (all items verified sentence-by-sentence against anchors.qmd on 2026-10-18)
Note: the pre-existing 124-line Persian chapter was condensed (dropped sentences, untranslated English words such as "wisely"/"thus"/"additionally", missing callout and strengths/limitations items, missing Fig 16.1-16.4 caption wording). It is being replaced by a sentence-level translation.

| ID | Source item (qmd lines) | Persian location | Status |
|----|-------------------------|------------------|--------|
| H1 | Title + authors line (1-5) | header | complete |
| P1 | Intro: anchors definition, RL + graph search, Ribeiro 2018, same researchers as LIME (7-10) | intro | complete |
| P2 | Like predecessor: perturbation-based, IF-THEN rules, scoped, coverage, bandit, model-agnostic (12-19) | intro | complete |
| P3 | LIME vs anchors comparison, faithful by design (21-26) | intro | complete |
| F1 | Fig 16.1 anchors-visualization.jpg + caption + in-image labels (28) | شکل ۱۶.۱ | complete |
| P4 | Titanic anchor example intro (31-35) | مثال تایتانیک | complete |
| T1 | Table 16.1 example to be explained (37-46) | جدول ۱۶.۱ | complete |
| P5 | Anchor IF-THEN rule, precision 97%, coverage 15%, interpretation (48-56) | قانون ۹۷٪/۱۵٪ | complete |
| M1 | Formal definition of anchor + symbol list (58-68) | تعریف رسمی | complete |
| P6 | Verbal restatement blockquote (70-73) | بازگویی کلامی | complete |
| W1 | Callout tip: Carefully set precision (75-82) | 💡 دقت را با احتیاط تنظیم کنید | complete |
| S1 | Section "Finding anchors": infeasibility, delta, probabilistic definition (85-94) | ## یافتن انکرها | complete |
| M2 | Coverage definition, final max-coverage formula, precision/coverage trade-off (96-112) | ## یافتن انکرها | complete |
| P7 | Four components: Candidate Generation, Best Candidate Identification (KL-LUCB), Precision Validation, Modified Beam Search (114-138) | چهار مؤلفه | complete |
| F2 | Fig 16.2 anchors-process.jpg + caption + in-image labels (140-142) | شکل ۱۶.۲ | complete |
| P8 | Closing paragraph of finding-anchors section (144-147) | پایان بخش یافتن انکرها | complete |
| S2 | Section "Complexity and runtime", O(...) formula, efficiency note (149-161) | ## پیچیدگی و زمان اجرا | complete |
| S3 | Section "Tabular data example": bike data, perturbation function (165-177) | ## مثال داده‌های جدولی | complete |
| C1 | R code chunks (hidden, eval:false in source) + results text, tau=0.9, discretization (179-246) | متن نتایج (کد R در وب‌سایت نمایش داده نمی‌شود) | complete |
| F3 | Fig 16.3 anchors1-1.jpg + caption + in-image labels (256) | شکل ۱۶.۳ | complete |
| P9 | Instances near decision boundary (258-260) | قبل از شکل ۱۶.۴ | complete |
| F4 | Fig 16.4 anchors2-1.jpg + caption + in-image labels (269) | شکل ۱۶.۴ | complete |
| P10 | Default perturbation space bias, class imbalance, custom space, delta/epsilon (271-279) | بعد از شکل ۱۶.۴ | complete |
| W2 | Callout tip: Check for class imbalance (281-288) | 💡 نامتوازنی کلاس‌ها | complete |
| S4 | Strengths: 6 items (291-304) | ## نقاط قوت | complete |
| S5 | Limitations: 4 items (306-321) | ## محدودیت‌ها | complete |
| S6 | Software and alternatives + 4 links (323-328) | ## نرم‌افزار و جایگزین‌ها | complete |
| R1 | References: ribeiro2018anchors, kaufmann2013information -> Appendix D entries exist | links | complete |
| X1 | Translator notes / worked examples (added, flagged purple) | ۱۱ توضیح مترجم + ۴ یادداشت متن تصویر + ۲ «برای درک بهتر» | complete |

Notes on source:
- The R chunks in the qmd (lines 179-240) are `eval: false`/`results: hide` setup code and are not rendered on the website; the same applies to the two `fig-anchors*-prepare` chunks. They are not part of the visible chapter and are recorded here only for traceability. The website shows only the prose + the two pre-rendered figures.
