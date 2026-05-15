# learn-english-skill

A Claude Code skill for English learners. It performs **grammar correction** and **native expression upgrades** on any English text you submit.

## Installation

Copy `english-tutor.md` into your project's `.claude/skills/` directory:

```
cp english-tutor.md /path/to/your/project/.claude/skills/english-tutor.md
```

Or drop it in your global skills folder:

```
cp english-tutor.md ~/.claude/skills/english-tutor.md
```

## Usage

Type `/english-tutor` followed by your text, or just paste text and use one of the trigger phrases:

```
/english-tutor I am very happy to meeting you yesterday.
```

```
correct my english: She don't likes to go shopping on weekend.
```

```
Is this natural? "I want to ask you a question regarding about the project."
```

## What it does

### Pass 1 — Grammar Correction
Catches subject-verb agreement, tense errors, wrong articles, incorrect prepositions, and sentence structure problems.

### Pass 2 — Native Expression Upgrade
Identifies word-for-word translations, overly formal textbook phrasing, and unnatural collocations — then offers idiomatic native alternatives at the right register (casual, formal, or written).

### Output
Every run produces:
- **Corrected Version** — the full text with all fixes applied
- **Grammar Notes** — a table of each error, the rule, and the fix
- **Native Expression Suggestions** — a table of each unnatural phrase with 1–2 natural alternatives
- **Summary** — a short encouraging note on patterns to watch

## Example

**Input:**
> I very excited to told you that I got the job. My boss say I have a good performance.

**Output:**

---
### Corrected Version
I'm very excited to tell you that I got the job. My boss says I have good performance.

---
### Grammar Notes
| # | Original | Issue | Correction |
|---|----------|-------|------------|
| 1 | "I very excited" | Missing linking verb "be" | "I'm very excited" |
| 2 | "to told you" | Infinitive requires base form, not past tense | "to tell you" |
| 3 | "My boss say" | Third-person singular needs -s | "My boss says" |
| 4 | "a good performance" | "Performance" in this sense is uncountable | "good performance" |

---
### Native Expression Suggestions
| # | Original phrase | More natural alternative(s) | Note |
|---|-----------------|----------------------------|------|
| 1 | "have a good performance" | "perform well" / "be doing well" | The original is grammatically acceptable but sounds translated |

---
### Summary
Watch out for missing "be" verbs (a common gap for speakers of pro-drop languages) and third-person -s agreement. Your vocabulary choice is solid!
