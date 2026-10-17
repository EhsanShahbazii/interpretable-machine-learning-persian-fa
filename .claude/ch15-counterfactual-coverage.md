# Coverage control — Chapter 15 (Counterfactual Explanations)

Source: https://christophm.github.io/interpretable-ml-book/counterfactual.html (accessed 2026-10-17)
Raw source: manuscript/counterfactual.qmd, christophM/interpretable-ml-book (master), 400 lines
Authors: Susanne Dandl & Christoph Molnar — CC BY-NC-SA 4.0
Persian: chapters/15-counterfactual.md (+ src/chapters/15-counterfactual.md)
Branch: translation/chapter-15-counterfactual (base: main)

Status values: pending / complete / needs-fix / blocked
Note: the pre-existing 204-line Persian chapter was a condensed version (formulas altered, sentences dropped, footnote replaced, links missing); it is being replaced by a sentence-level translation.

| ID | Source item (qmd lines) | Persian location | Status |
|----|-------------------------|------------------|--------|
| H1 | Title + authors line (1-5) | header | pending |
| P1 | Definition of counterfactual explanation, coffee example, Y/X, "smart humans" (7-12) | intro | pending |
| P2 | Use in IML, footnote on overloaded term, Fig 15.1 intro, inputs as cause (14-17, fn 400) | intro | pending |
| F1 | Fig 15.1 graph.jpg + caption + in-image labels (19) | شکل ۱۵.۱ | pending |
| P3 | Simulating counterfactuals, relevant change, bold definition (22-25) | | pending |
| P4 | Model-agnostic vs model-specific; focus on model-agnostic (27) | | pending |
| P5 | Use cases announcement (29) | | pending |
| P6 | Peter loan example (31-38) | | pending |
| P7 | Anna rent example (40-49) | | pending |
| W1 | Callout warning: no causal claims (51-56) | | pending |
| P8 | Human-friendly, Rashomon effect, report all or criterion (59-66) | | pending |
| P9 | Criterion 1: prediction as close as possible; rare/frequent class; 2% -> 10% (68-76) | | pending |
| W2 | Callout tip: use probabilities (78-84) | | pending |
| P10 | Criterion 2: similarity, Manhattan/Gower, L0 (86-89) | | pending |
| P11 | Criterion 3: diversity, loan example (91-94) | | pending |
| P12 | Criterion 4: likely feature values, rooms/m2 (96-99) | | pending |
| H2 | Generating counterfactual explanations (101) | ## | pending |
| P13 | Trial and error; loss function; methods differ (103-110) | | pending |
| P14 | Two methods announced (112) | | pending |
| H3 | Method by Wachter et al. (115) | ### | pending |
| E1 | Loss L(x,x',y',lambda) (119) + explanation (121-124) | | pending |
| E2 | d(x,x') weighted Manhattan with MAD (126-128) | | pending |
| E3 | MAD_j formula (132) + median/MAD explanation, robustness, scaling (129-141) | | pending |
| P15 | lambda trade-off, tolerance epsilon (143-148) | | pending |
| E4 | Constraint \|f(x')-y'\| <= eps (151) | | pending |
| E5 | Optimizers (Nelder-Mead, ADAM), argmin max lambda (153-158) | | pending |
| L1 | Recipe, 5 steps with sub-bullets (160-169) | | pending |
| P16 | Disadvantages: criteria 1-2 only, no sparsity, 10x1 vs 1x10 (171-174) | | pending |
| P17 | Categorical features, combinatorial explosion, 6 features x 10 levels = 1M runs (176-178) | | pending |
| H4 | Method by Dandl et al. (183) | ### | pending |
| E6 | Four-objective loss L(x,x',y',X^obs) (187-189) | | pending |
| E7 | o1 (190-215; html+epub variants = same formula) | | pending |
| E8 | o2 Gower, delta_G, range R_j (217-245) | | pending |
| E9 | o3 L0 norm (247-252) | | pending |
| E10 | o4 likelihood via nearest observed point (254-259) | | pending |
| P18 | No weighting terms vs Wachter, optimise all four simultaneously (261-262) | | pending |
| P19 | NSGA-II, fitness, four steps announced (264-271) | | pending |
| F2 | Fig 15.2 cfexp-nsgaII.jpg + caption + in-image labels (273) | شکل ۱۵.۲ | pending |
| P20 | First generation, initialisation, selection, recombination, mutation (275-281) | | pending |
| P21 | Nondominated + crowding distance sorting (283-286) | | pending |
| P22 | Next generation, summary of counterfactuals (287-290) | | pending |
| H5 | Example (292) | ## | pending |
| P23 | German credit data, kaggle link, SVM, 522 obs, 9 features (294-297) | | pending |
| T1 | Table 15.1 customer (299-305) | جدول ۱۵.۱ | pending |
| P24 | SVM 24.2%, >50%, Table 15.2 intro (307-310) | | pending |
| T2 | Table 15.2 ten counterfactuals (312-325) | جدول ۱۵.۲ | pending |
| P25 | Nondominated, trade-offs; interpretation of results (327-334) | | pending |
| H6 | Strengths, 7 paragraphs (336-362) | ## | pending |
| H7 | Limitations, 2 paragraphs (364-377) | ## | pending |
| H8 | Software and alternatives: MOC, Alibi, MACE, DiCE, Growing Spheres, Anchors (379-397) | ## | pending |
| R1 | Refs wachter2018, dandl2020, deb2002, vanlooveren2021, karimi2020, mothilal2020, laugel2017, ribeiro2018 -> Appendix D | links | pending |
| C1 | R code chunks: none in this qmd | n/a | no content |
| X1 | Translator additions (to be listed on completion) | various | pending |
