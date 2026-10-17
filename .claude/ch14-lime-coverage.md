# Coverage control — Chapter 14 (LIME)

Source: https://christophm.github.io/interpretable-ml-book/lime.html (accessed 2026-10-17)
Raw source: manuscript/lime.qmd, christophM/interpretable-ml-book (master)
Author: Christoph Molnar (image section: Verena Haunschmid) — CC BY-NC-SA 4.0
Persian: chapters/14-lime.md (+ src/chapters/14-lime.md)

Status values: complete / needs-fix / blocked (all items verified sentence-by-sentence against lime.qmd + rendered HTML on 2026-10-17)

Old values: pending / complete / needs-fix / blocked

| ID | Source item (qmd lines) | Persian location | Status |
|----|-------------------------|------------------|--------|
| H1 | Title "LIME" (1) | line 1 | complete |
| P1 | Intro: local surrogate models, LIME, Ribeiro 2016 (178-180) | intro | complete |
| P2 | Intuition: probe the black box, perturbed dataset, weighted interpretable model, local fidelity (182-191) | intro | complete |
| E1 | Formula explanation(x)=argmin L+Omega (195) | $$ | complete |
| P3 | Formula symbol explanation, loss/G/pi/Omega, complexity chosen by user (197-201) | after E1 | complete |
| L1 | Recipe, 5 bullets (203-209) | list | complete |
| P4 | K features, Lasso, forward/backward selection (211-221) | | complete |
| P5 | How to get variations: text/image/tabular (223-226) | | complete |
| H2 | LIME for tabular data (228) | ## | complete |
| P6 | Tabular data def., sampling from mass center (230-233) | | complete |
| F1 | Fig 14.1 + caption A-D + in-image labels (fig-lime-fitting) | شکل ۱۴.۱ | complete |
| P7 | Neighborhood, kernel, kernel width, 0.75*sqrt(p), elephant, Fig 14.2 intro (379-391) | | complete |
| F2 | Fig 14.2 + caption + in-image labels (fig-lime-fail) | شکل ۱۴.۲ | complete |
| P8 | One feature only, high-dim, distance units (429-433) | | complete |
| P9 | Penguin example, 2 features, higher body mass/longer bills (440-445) | | complete |
| F3 | Fig 14.3 + caption + in-image labels (penguin explain) | شکل ۱۴.۳ | complete |
| H3 | LIME for text data (473) | ## | complete |
| P10 | Text perturbation by removing words, binary features (475-479) | | complete |
| P11 | YouTube TubeSpam data, 1956 comments, 5 videos, Alberto 2015, links (481-494) | | complete |
| T1 | Table 14.1 two comments (267 / 173) | جدول ۱۴.۱ | complete |
| P12 | Black box deep tree on document-word matrix; RNN/SVM alternatives (496-499) | | complete |
| P13 | Variations of comment, binary matrix description, weight 1-1/7=0.86 (529-535) | | complete |
| T2 | Table 14.2 variations, prob, weight (5 rows) | جدول ۱۴.۲ | complete |
| P14 | Explanations: "channel", no non-zero weight for non-spam (544-546) | | complete |
| T3 | Table 14.3 LIME explanations (6 rows) | جدول ۱۴.۳ | complete |
| H4 | LIME for image data (562) | ## | complete |
| P15 | Author note: Verena Haunschmid (564) | | complete |
| P16 | Superpixels, gray, probability of turning off (566-571) | | complete |
| P17 | Inception V3, bagel 0.77, strawberry 0.04, green/red (573-579) | | complete |
| F4 | Fig 14.4 + caption (lime-images-package-example-1.jpg) | شکل ۱۴.۴ | complete |
| P18 | Bagel explanation reasonable, hole missing (583) | | complete |
| H5 | Strengths, 7 paragraphs (586-610) | ## | complete |
| H6 | Limitations, 6 paragraphs + conclusion (612-635) | ## | complete |
| H7 | Software: lime, PiML, eli5, iml, DALEX (637-641) | ## | complete |
| R1 | Refs ribeiro2016why, alberto2015tubespam, melis2018robustness, slack2020fooling -> Appendix D | links | complete |
| C1 | R code chunks (not shown in HTML) | n/a | no content to translate |
| X1 | Translator additions: surrogate-term note, Lasso/K example, elephant idiom note, text weight example, instability example, 4 in-image-label notes, source-inconsistency note (bill depth vs length; #bike-data link) | various | complete |

Verification: all 4 figures (3 png + 1 jpg) local in chapters/images and src/chapters/images; 3 tables; mdbook build OK (3 <table>, 4 <img>, 11 purple markers in rendered HTML); chapters/ == src/chapters/ (cmp); header lines 3-5 end with two spaces.
Note: the previous 70-line ch14 was a condensed version (missing text/image sections, strengths, limitations, software); it was replaced by a full translation.
