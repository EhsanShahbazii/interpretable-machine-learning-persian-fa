# CLAUDE.md

Authoritative reference for Claude Code sessions working in this repository. Keep this file
in sync whenever conventions, structure, or workflow change.

## Project

Persian (Farsi) translation of Christoph Molnar's *Interpretable Machine Learning* (3rd
Edition), original at https://christophm.github.io/interpretable-ml-book/. Licensed
CC BY-NC-SA 4.0, same as the source. Translator: Maryam Mahmoudi.

## Repository structure

```
chapters/        canonical chapter markdown (translation source of truth)
src/chapters/    duplicate of chapters/ consumed by the mdbook build (src/SUMMARY.md
                 references files as "chapters/<file>.md", relative to src/)
src/SUMMARY.md   mdbook table of contents
book.toml        mdbook config (MathJax on, language "fa")
book/            mdbook build output (generated, git-ignored, rebuilt by CI; do not hand-edit)
scripts/         one-off Python maintenance scripts (math-escaping fixes, index-link fixes)
Paper/, code/    supplementary/non-chapter material
```

### Critical duplication rule

**`chapters/*.md` and `src/chapters/*.md` must always be kept byte-identical.** This is not
optional — mdbook builds only from `src/chapters/`, but `chapters/` is treated in commit
history as the canonical copy and both are edited together in the same commit. Historically
this repo had `src/chapters/` as a filesystem junction to `chapters/`; that was replaced with
two real, separately-tracked directories (see commit `5c054f2`), so **nothing keeps them in
sync automatically anymore** — every edit must be applied (or copied) to both paths before
committing. Images live under `chapters/images/` with `src/chapters/images/` mirroring them.

If you only edit one copy, `git status`/`diff` between the two paths before committing to
catch drift (this has happened before — see the ch07 fix in this history).

## Git workflow

1. Sync with latest `main` (`git checkout main && git pull`).
2. Create a feature branch. Never commit directly to `main`. Observed naming conventions:
   - `feat/chapter-{N}-{topic}` for new chapter integration (e.g. `feat/chapter-25-surrogate`)
   - `{chNN}-{short-description}` for targeted fixes to an existing chapter
     (e.g. `ch06-restore-missing-sections`, `ch07-faithful-intro-linear-vs-logistic`)
   - `docs-{topic}` for repo-level documentation changes
3. Make all requested edits to **both** `chapters/` and `src/chapters/` copies.
4. Review the diff for Markdown validity, intact links/images, and no duplicated content.
5. Commit with Conventional Commits. Observed patterns:
   - `feat(chapter-{N}): ...` — new chapter/appendix translation
   - `fix(ch{NN}): ...` — correcting/re-translating existing content to be faithful
   - `docs(ch{NN}): ...` — additive explanatory content (translator notes, worked examples)
   - `docs: ...` — repo-level documentation
6. Push the branch, then fast-forward merge into `main` when possible; push `main`.
   If fast-forward isn't possible, open a PR instead of a forced/non-linear merge.

## Translation conventions

- Preserve the original author's meaning, technical accuracy, structure, LaTeX, code blocks,
  figures, and links exactly. Do not simplify or drop explanations from the source text.
- Translate faithfully and completely — do not summarize/condense the English original.
  When comparing against the upstream `.qmd`/HTML source, every sentence and clause should
  have a corresponding Persian sentence; nothing should be silently dropped (tips/callouts,
  footnote-marked asides, secondary references like "explained on Stackoverflow", etc.).
- Chapter files start with a standard header block. The first three blockquote lines
  (`عنوان اصلی`, `منبع`, `نویسنده`) **must end with two trailing spaces** (a Markdown hard
  line break) — without it, mdbook/CommonMark merges the whole blockquote into a single
  run-on paragraph instead of four separate lines. The last line (`مترجم`) doesn't need the
  trailing spaces since a blank line follows it. This was missed in `001-about-book.md` and
  `10-decision-rules.md` in one pass and had to be fixed retroactively — check for it
  whenever adding or editing a header block (trailing spaces are invisible in most editors,
  so `grep -n '  $'` or `cat -A` on lines 3-5 is the reliable way to verify):
  ```
  # فصل N: عنوان فارسی

  > **عنوان اصلی:** English Title··
  > **منبع:** [source URL](source URL)··
  > **نویسنده:** Christoph Molnar··
  > **مترجم:** مریم محمودی
  ---
  ```
  (`··` above denotes the two trailing spaces — do not type literal `··`.)
- Figure captions are translated in full and numbered per chapter (`شکل N.M`); the image
  itself keeps its original source URL (local copies live in `chapters/images/` +
  `src/chapters/images/` when downloaded rather than hotlinked).
- Reference lists are centralized in `chapters/appendix-D-references.md` /
  `src/chapters/appendix-D-references.md` rather than repeated per chapter; in-chapter
  citations should point there or to the original external source. Do not fabricate
  citations — only add ones that genuinely support the statement, preferring the original
  paper/documentation over secondary sources, and match the citation style already used in
  Appendix D.

### Translator notes

Use exactly this blockquote marker when a clarification is genuinely needed (ambiguous
statement, implicit assumption, missing context for a Persian reader):

> **توضیح مترجم:**

Use sparingly — only when it adds real value, not on every paragraph.

### Example enhancements

When a worked example would help intuition, add a supplementary block immediately after the
original example (never replacing it):

> **برای درک بهتر (توضیح مترجم):**

Keep it simple, concrete, and faithful to the original example's numbers/setup where
possible (e.g. the ch06 categorical-encoding notes reuse one consistent salary example across
treatment/effect/dummy coding).

### Visually distinguishing translator additions (purple)

Every translator-added block (`توضیح مترجم` and `برای درک بهتر`) must stay inside a
Markdown blockquote (`>`) whose first bold line contains one of the exact marker phrases
`توضیح مترجم`, `برای درک بهتر`, or `مثال مترجم`, **and that marker line must be wrapped in
an inline purple span**:

```
> <span style="color:#7C3AED">**توضیح مترجم:**</span> متن توضیح اینجا می‌آید...
```

This is not optional styling — it's how readers tell the translator's voice apart from
Christoph Molnar's original text, and it must render correctly everywhere the chapter files
are read: raw in an editor, in Obsidian, on GitHub, and in the built mdbook site. Only the
mdbook site can run JavaScript/CSS, so the inline `<span style="color:#7C3AED">` on the
marker itself is the one mechanism that works in all of them — apply it directly in the
Markdown source, in both `chapters/` and `src/chapters/` copies, every time a translator
block is added. `#7C3AED` is the fixed color; do not use a different shade between chapters.

The mdbook build additionally colors the *entire* blockquote (not just the marker) purple
at render time, as a bonus for site readers:

- `src/theme/custom.js` (`markTranslatorNotes`) scans every rendered blockquote on page
  load and adds the `translator-note` class to any whose text contains one of the marker
  phrases above.
- `src/theme/custom.css` (`.content blockquote.translator-note`) applies the purple
  background/border/text color to elements with that class.

If you change the marker wording or add a new kind of translator block, update the inline
span example above, `TRANSLATOR_MARKERS` in `custom.js`, and this section together.

## Markdown / Obsidian conventions

- Standard Markdown headings (`#`, `##`, `###`) mirror the original book's section hierarchy.
- Math: LaTeX inside `$...$` / `$$...$$`; underscores in subscripts must be escaped
  (`x\_1`) — this repo hit real rendering bugs from unescaped `_`/`\` in chapter 6, fixed via
  `scripts/fix-ch06-math.py` and generalized in `scripts/fix-math-all-chapters.py`. Run the
  general script (or check its logic) if you introduce new formulas with subscripts/`\left(`
  style escapes.
- Internal links: prefer linking to existing chapter files/anchors over duplicating content.
- RTL/Persian typography: use Persian digits (۰۱۲...) in prose and figure numbers; keep
  English technical terms (SHAP, LIME, ICE, etc.) in Latin script inline.

## Local Claude workspace (`.claude/`)

`.claude/` holds scratch/planning material for Claude Code sessions: progress notes, task
checklists, reusable prompts. `.claude/summary.md` is the running progress log for the
chapter-by-chapter integration effort — read it first when resuming translation work, and
append to it (Progress / Key Decisions / Next Steps) rather than replacing it.

**Known deviation from a "never commit `.claude/`" policy:** `.claude/settings.json` and
`.claude/settings.local.json` already exist in git history as the shared Claude Code
permission allowlist for this repo (not scratch state), and `.claude/summary.md` is likewise
already tracked and contains real cross-session project history. `.gitignore` now includes a
`.claude/` rule so *new* scratch files aren't picked up by accident, but the already-tracked
files were deliberately **not** untracked (`git rm --cached`), since doing so would silently
change shared repo behavior (permissions) without the user's explicit sign-off. If you want
these fully untracked going forward, do it as its own reviewed commit, not as a side effect
of a documentation task.

## Lessons learned / assumptions

- `chapters/` vs `src/chapters/`: always diff both before assuming a chapter is fully fixed;
  at least one prior session (ch07) edited only `src/chapters/`, leaving `chapters/` stale.
- mdBook (`book.toml`, `src/`) is the only build/publish system; `.github/workflows/deploy.yml` builds
  it on every push to `main` and deploys `./book` to GitHub Pages. MkDocs and the old second workflow
  were removed; `book/` is git-ignored, so use `mdbook build -d <tmp>` to preview.
- Appendix D is the single source of truth for references; avoid re-introducing per-chapter
  bibliographies.
