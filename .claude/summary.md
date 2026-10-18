## Goal
- Integrate provided Persian translations of interpretable-ml-book chapters into the project codebase while preserving structure, formatting, images, formulas, and references.

## Constraints & Preferences
- Branch naming: `feat/chapter-{number}-{topic}` (e.g. `feat/chapter-25-surrogate`)
- Commit messages: `feat(chapter-{number}): {summary}` with optional body
- Images must be downloaded from original source URLs and placed in `chapters/images/`
- `mdbook build` must succeed before final commit
- `src/chapters/` is a junction to `chapters/` — both paths must be staged separately
- All formulas (LaTeX), section hierarchy, references, figures, and captions must be preserved
- The translation is provided; no translation work is done by the assistant
- Each chapter lives on its own branch; all feature branches are now merged to `main`

## Progress
### Done
- **Chapter 25 (Surrogate Models):** Integrated full translation, downloaded 2 images, committed on `feat/chapter-25-surrogate`
- **Chapter 26 (Prototypes & Criticisms):** Integrated full translation, downloaded 4 images, committed on `feat/chapter-26-prototypes`
- **Chapter 27 (Learned Features):** Integrated full translation, downloaded 6 images, committed on `feat/chapter-27-cnn-features`
- **Chapter 28 (Saliency Maps):** Integrated full translation, downloaded 3 images, committed on `feat/chapter-28-saliency-maps`
- **Chapter 29 (Detecting Concepts / TCAV):** Integrated full translation, downloaded 1 image, committed on `feat/chapter-29-detecting-concepts`
- **Chapter 30 (Adversarial Examples):** Integrated full translation, downloaded 4 images, committed on `feat/chapter-30-adversarial`
- **Chapter 31 (Influential Instances):** Integrated full translation, downloaded 6 images, committed on `feat/chapter-31-influential`
- **Chapter 32 (Evaluation):** Integrated full translation (no images), committed on `feat/chapter-32-evaluation`
- **Chapter 33 (Story Time):** Integrated full translation, downloaded 3 images (`hospital.jpg`, `access-denied.jpg`, `burnt-earth.jpg`), committed on `feat/chapter-33-storytime`
- **Chapter 34 (Future of Interpretability):** Integrated full translation (no images), committed on `feat/chapter-34-future`
- **Appendix A (ML Terms):** Integrated full translation, downloaded 2 images (`programing-ml.jpg`, `iml.jpg`), reused existing `learner.jpg`, committed on `feat/appendix-A-ml-terms`
- **Appendix B (Math Terms):** Integrated full translation (table only, no images), committed on `feat/appendix-B-math`
- **Appendix C (R Packages):** Integrated full translation (table + reference list, no images), committed on `feat/appendix-C-packages`
- **Appendix D (References):** Created full reference list with 160+ entries, added to `SUMMARY.md`, committed on `feat/appendix-D-references`
- **Image fix:** Committed missing images to `src/chapters/images/` (88 files) — was missing from the `src/` directory that `mdbook` reads from, causing figures to be absent from the build output. Commit `3d0a2c7` on `main`.
- **Content fix:** restored full Persian translations to all 39 `src/chapters/*.md` files — they contained only stubs (just headings) while `chapters/*.md` had the real content. Copied all markdown files from `chapters/` to `src/chapters/`. Commit `5c054f2` on `main`.
- **Ch07 faithfulness pass:** fixed condensed intro/linear-vs-logistic section (`ff336d6`), synced stale `chapters/` copy + added `CLAUDE.md` (`d356dcb`), hyperlinked the cheat-sheet and Stackoverflow references (`287824b`), made the Theory section literal (`9cfe9d5`), and did a full pass over Interpretation/Example/Strengths/Limitations/Software (`98d353f`): added the missing footnote, the "multiplicative" callout box, the literal odds-ratio derivation steps, the "why odds ratios not odds" paragraph (moved before the feature-type bullets per source order), the model-agnostic/PDP tip, the "chonky" aside, and dropped a fabricated closing summary paragraph that had no source counterpart. Chapter 7 should now be checked complete against Molnar's source. All on `main`.
- **Ch13 (ICE) audit pass** on branch `translation/chapter-13-ice`: re-checked every sentence against `ice.qmd`; switched the 4 figures to local `images/` copies, translated in-image labels (plus notes on the source's missing boxplots in Fig 13.2 and the `P(Adelie)` caption vs `P(female)` axis in Fig 13.3), added a tip-box wording note, and three worked examples (ICE line, c-ICE, d-ICE) and a correlation note.

### In Progress
- (none)

### Blocked
- (none)

## Key Decisions
- Use local relative image paths (`images/filename`) instead of external URLs from the translation
- Preserve original LaTeX formulas exactly as provided
- Keep all figures, captions, notes, and references in same logical order as original chapter
- Include the full reference list at the end of each chapter (now centralized in Appendix D)
- Internal cross-references to other chapters kept as external URLs (Persian versions not hosted)
- Glossary and package tables included as markdown tables
- Both `chapters/` and `src/chapters/` (junction-linked) are staged for each chapter

## Next Steps
- (none — all chapters and appendices integrated, book builds successfully with all images)

## Critical Context
- `src/chapters/` is a real directory with markdown + image files tracked by git; was previously a junction to `chapters/`
- `src/chapters/images/` now has a local junction pointing to `chapters/images/` to avoid data duplication
- All 10 main chapters (25–34) and all 4 appendices (A–D) are now translated and committed on `main`
- The project uses `mdbook` with MathJax (`mathjax-support = true`) and Persian language (`language = "fa"`)
- No images needed for chapters 32, 34, Appendix B; all other chapter images downloaded and committed
- Appendix D (References) replaces per-chapter reference lists and is registered in `SUMMARY.md`

## Relevant Files
- `chapters/25-surrogate.md` through `chapters/34-future.md`: all main chapter translations
- `chapters/appendix-A-ml-terms.md` through `chapters/appendix-D-references.md`: all appendix translations
- `chapters/images/`: shared image directory with all downloaded figures (88 images)
- `src/chapters/images/`: junction-linked mirror for mdbook build (88 images committed)
- `src/SUMMARY.md`: chapter listing (all chapters and appendices registered)
- `book.toml`: mdbook config with MathJax and RTL support

## Ch14 (LIME) full re-translation — branch `translation/chapter-14-lime`
- Replaced the condensed 70-line chapter with a complete, sentence-level translation of `lime.qmd` (intro, formula, recipe, K-feature selection, tabular/text/image sections, strengths, limitations, software).
- Added 4 local figures + in-image label notes, 3 tables, translator notes/worked examples; coverage in `.claude/ch14-lime-coverage.md`.
- Source inconsistencies flagged in a translator note (Fig 14.3 text says bill length but image shows bill depth; penguin link points to #bike-data).

## Ch15 (Counterfactual Explanations) full re-translation — branch `translation/chapter-15-counterfactual`
- Replaced the condensed 204-line chapter (altered formulas, dropped sentences, replaced footnote) with a sentence-level translation of `counterfactual.qmd`: intro + footnote, Peter/Anna examples, warning/tip callouts, four-plus criteria, Wachter and Dandl methods (all formulas), NSGA-II, German credit example (Tables 15.1/15.2), Strengths, Limitations, Software.
- 2 local figures (graph.jpg, cfexp-nsgaII.jpg) with in-image label notes; translator notes + 3 worked examples (MAD, Gower, NSGA-II); coverage in `.claude/ch15-counterfactual-coverage.md`.
- Gotcha: `\` row breaks in `cases` must be written as 4 backslashes in the .md or mdbook collapses them.
- Next: merge/PR is left to the maintainer; no push done.

## Ch16 (Anchors) full re-translation — branch `translation/chapter-16-anchors`
- Replaced the condensed 124-line chapter (English leaks like "wisely"/"thus"/"additionally", missing strengths/limitations items, missing tip callout for class imbalance, no label translations) with a sentence-level translation of `anchors.qmd`: intro, formal definition + symbols, finding anchors (δ, coverage, final max formula), four components, complexity, tabular example, Strengths (6 items), Limitations (4), Software.
- 4 local figures (all already in images/) with in-image label translations; translator notes + 2 worked examples; coverage in `.claude/ch16-anchors-coverage.md`.
- The hidden R chunks in the qmd (eval: false) are not shown on the website and were not reproduced.
- Built with `mdbook build -d <tmp>` (no book/ output committed). Merge/PR left to the maintainer; no push done.
