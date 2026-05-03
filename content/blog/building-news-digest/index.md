---
title: News Digest
date: "2026-05-03"
description: "Personal archive that turns daily AI-generated news digests into a static Astro site. The digest is produced from a prompt and topic list, scheduled through Taskdeck, and can run through different coding agents such as Codex or Claude."
technologies: "Astro, Markdown, GitHub Pages, GitHub Actions, Codex, Claude, Taskdeck"
---

## A small archive for daily context

I wanted a way to keep the daily news summaries I was generating without losing them inside a chat thread or a Telegram history. The result is [News Digest](https://santos-luis.github.io/news-digest/), a small static archive where each day is just a Markdown file.

The content model is deliberately simple:

```text
src/digests/2026-05-02.md
```

Each Markdown file becomes one article page. The filename gives the route and date, while the first line of the file becomes the display title. That means the generator does not need to know anything about Astro frontmatter, routing, or page metadata. It only needs to write a clean digest.

## Feeding the archive

The digest is produced from a prompt and a topic list. The prompt describes the output format, and the topics file keeps the areas I care about in one place: software engineering, macro and markets, enterprise AI strategy, and developer tools.

The command can be run by different agent environments. With Codex, the shape is:

```shell
codex exec --sandbox read-only --ephemeral -o src/digests/2026-05-02.md "$(cat generator/digest.md)"
```

With Claude, the same idea can be expressed through `claude --print`, piping or redirecting the result into the daily Markdown file. The useful part is not the specific agent. The useful part is that the archive treats the agent as a replaceable producer of Markdown.

## Scheduling with Taskdeck

[Taskdeck](https://github.com/Santos-Luis/taskdeck) is the local-first scheduler I use to run shell-command jobs. It stores jobs in SQLite, runs them from a Fastify process, records run history, and provides a React UI for managing the jobs.

That makes it a good fit for this workflow. Taskdeck can own the daily schedule, execute the chosen agent command, and leave the output in `src/digests/`. From there, the static site is just a normal Astro build and GitHub Pages deployment.

The nice property of this setup is that each piece has a narrow responsibility:

- Taskdeck decides when the job runs.
- Codex, Claude, or another agent produces the Markdown.
- News Digest renders and archives the result.
- GitHub Pages hosts the static output.

## Why this shape works

The system avoids a database, CMS, or custom backend. Markdown is the source of truth, Git is the history, and the static site is the archive.

It also keeps the workflow portable. If I want to run the generator locally, from Taskdeck, from GitHub Actions, or through a different agent, the site does not need to change. As long as something writes `YYYY-MM-DD.md`, the archive can publish it.
