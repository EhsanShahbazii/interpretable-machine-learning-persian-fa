# Coverage control — Chapter 15 (Counterfactual Explanations)

Source: https://christophm.github.io/interpretable-ml-book/counterfactual.html (accessed 2026-10-17)
Raw source: manuscript/counterfactual.qmd, christophM/interpretable-ml-book (master), 400 lines
Authors: Susanne Dandl & Christoph Molnar — CC BY-NC-SA 4.0
Persian: chapters/15-counterfactual.md (+ src/chapters/15-counterfactual.md)
Branch: translation/chapter-15-counterfactual (base: main)

Status values: pending / complete / needs-fix / blocked (all items verified sentence-by-sentence against counterfactual.qmd on 2026-10-17)
Note: the pre-existing 204-line Persian chapter was a condensed version (formulas altered, sentences dropped, footnote replaced, links missing); it is being replaced by a sentence-level translation.

| ID | Source item (qmd lines) | Persian location | Status |
|----|-------------------------|------------------|--------|
| H1 | Title + authors line (1-5) | header | complete |
| P1 | Definition of counterfactual explanation, coffee example, Y/X, "smart humans" (7-12) | intro | complete |
| P2 | Use in IML, footnote on overloaded term, Fig 15.1 intro, inputs as cause (14-17, fn 400) | intro | complete |
| F1 | Fig 15.1 graph.jpg + caption + in-image labels (19) | شکل ۱۵.۱ | complete |
| P3 | Simulating counterfactuals, relevant change, bold definition (22-25) | | complete |
| P4 | Model-agnostic vs model-specific; focus on model-agnostic (27) | | complete |
| P5 | Use cases announcement (29) | | complete |
| P6 | Peter loan example (31-38) | | complete |
| P7 | Anna rent example (40-49) | | complete |
| W1 | Callout warning: no causal claims (51-56) | | complete |
| P8 | Human-friendly, Rashomon effect, report all or criterion (59-66) | | complete |
| P9 | Criterion 1: prediction as close as possible; rare/frequent class; 2% -> 10% (68-76) | | complete |
| W2 | Callout tip: use probabilities (78-84) | | complete |
| P10 | Criterion 2: similarity, Manhattan/Gower, L0 (86-89) | | complete |
| P11 | Criterion 3: diversity, loan example (91-94) | | complete |
| P12 | Criterion 4: likely feature values, rooms/m2 (96-99) | | complete |
| H2 | Generating counterfactual explanations (101) | ## | complete |
| P13 | Trial and error; loss function; methods differ (103-110) | | complete |
| P14 | Two methods announced (112) | | complete |
| H3 | Method by Wachter et al. (115) | ### | complete |
| E1 | Loss L(x,x',y',lambda) (119) + explanation (121-124) | | complete |
| E2 | d(x,x') weighted Manhattan with MAD (126-128) | | complete |
| E3 | MAD_j formula (132) + median/MAD explanation, robustness, scaling (129-141) | | complete |
| P15 | lambda trade-off, tolerance epsilon (143-148) | | complete |
| E4 | Constraint \|f(x')-y'\| <= eps (151) | | complete |
| E5 | Optimizers (Nelder-Mead, ADAM), argmin max lambda (153-158) | | complete |
| L1 | Recipe, 5 steps with sub-bullets (160-169) | | complete |
| P16 | Disadvantages: criteria 1-2 only, no sparsity, 10x1 vs 1x10 (171-174) | | complete |
| P17 | Categorical features, combinatorial explosion, 6 features x 10 levels = 1M runs (176-178) | | complete |
| H4 | Method by Dandl et al. (183) | ### | complete |
| E6 | Four-objective loss L(x,x',y',X^obs) (187-189) | | complete |
| E7 | o1 (190-215; html+epub variants = same formula) | | complete |
| E8 | o2 Gower, delta_G, range R_j (217-245) | | complete |
| E9 | o3 L0 norm (247-252) | | complete |
| E10 | o4 likelihood via nearest observed point (254-259) | | complete |
| P18 | No weighting terms vs Wachter, optimise all four simultaneously (261-262) | | complete |
| P19 | NSGA-II, fitness, four steps announced (264-271) | | complete |
| F2 | Fig 15.2 cfexp-nsgaII.jpg + caption + in-image labels (273) | شکل ۱۵.۲ | complete |
| P20 | First generation, initialisation, selection, recombination, mutation (275-281) | | complete |
| P21 | Nondominated + crowding distance sorting (283-286) | | complete |
| P22 | Next generation, summary of counterfactuals (287-290) | | complete |
| H5 | Example (292) | ## | complete |
| P23 | German credit data, kaggle link, SVM, 522 obs, 9 features (294-297) | | complete |
| T1 | Table 15.1 customer (299-305) | جدول ۱۵.۱ | complete |
| P24 | SVM 24.2%, >50%, Table 15.2 intro (307-310) | | complete |
| T2 | Table 15.2 ten counterfactuals (312-325) | جدول ۱۵.۲ | complete |
| P25 | Nondominated, trade-offs; interpretation of results (327-334) | | complete |
| H6 | Strengths, 6 paragraphs (336-362) | ## | complete |
| H7 | Limitations, 2 paragraphs (364-377) | ## | complete |
| H8 | Software and alternatives: MOC, Alibi, MACE, DiCE, Growing Spheres, Anchors (379-397) | ## | complete |
| R1 | Refs wachter2018, dandl2020, deb2002, vanlooveren2021, karimi2020, mothilal2020, laugel2017, ribeiro2018 -> Appendix D | links | complete |
| C1 | R code chunks: none in this qmd | n/a | no content to translate |
| X1 | Translator additions: counterfactual-term note, causal-vs-model note, contrastive/selective/Rashomon note, criteria-numbering note (source inconsistency), loss/Manhattan note, MAD worked example, Nelder-Mead/ADAM note, y' notation-ambiguity note, Gower worked example + symbols note, nondominated terminology note, in-image label notes for Fig 15.1 and 15.2, NSGA-II worked example, Table 15.1 column glossary, Table 15.2 reading note, results-interpretation note, recourse + source-typo note | various | complete |

Notes:
- The qmd contains an HTML-commented sentence (lines 137-139, about sparsity) and duplicate epub-only formula variants (lines 205-215, 231-242); the commented text is not rendered on the website and is not translated; the epub variants are the same formulas and are used in `	ext{if } ...` form to avoid nested `$` inside display math.
- Source quirks kept and flagged: criteria numbering ("four criteria" vs five stated requirements); `inf_{y' in y'}` notation; "just data newly created data instances" typo; the Table 15.1 header has an empty 9th cell (no content).
- Verification: chapters/ == src/chapters/ (cmp); header lines 3-5 end with two spaces; mdbook build OK (2 tables, 2 img, 18 purple markers, 4 internal-link targets resolve: 02#anchor, 14-lime, 16-anchors, appendix-D); cases row breaks verified surviving the build (4 backslashes in source).
- Not verified: visual rendering in a browser (RTL/mobile/MathJax); only the generated HTML was inspected.
