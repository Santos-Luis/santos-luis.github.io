---
title: Loci
date: "2026-06-09"
description: "A local-first desktop app that acts as a second memory. Drop in notes, organise them by topic, and have normal conversations with a personal assistant grounded in everything you have saved. A background agent writes daily summaries and weekly cross-topic syntheses so you stay on top of your own information. All data lives on your machine, and there is no API key — Loci drives the Claude Code CLI as a subprocess."
technologies: "Electron, React, TypeScript, SQLite, FTS5, Claude Code CLI, node-cron"
---

## The name, and the idea

The _method of loci_ is the old memory-palace trick: you remember things by placing them somewhere. The name fits, because [Loci](https://github.com/Santos-Luis/loci) is meant to be a second memory — a place to put the things you care about and then actually find them again.

In practice that means three plain ideas. You drop in notes. You organise them into topics. And you have normal conversations with an assistant that already knows what you have saved. Nothing leaves your machine, there is no account to create, and there is no API key to manage.

## A place to put things

The content model is deliberately small. There are notes, written in markdown and free-floating or attached to a topic. There are topics, which are just the areas you care about. And there are conversations, which are saved automatically and can be tagged to a topic too.

All of it lives in a single SQLite database on your own machine (`~/.loci` by default). No cloud storage, no hosting, no telemetry. The database is the source of truth, and it never leaves the laptop it was created on.

## An assistant that knows your context

The interesting part is the Ask view, where you talk to Loci like any other assistant — except its answers are grounded in your own memory.

There are no embeddings and no vector database. Memory is built at query time: when you send a message, Loci runs a full-text search across your notes, past messages, and generated insights, takes the most relevant results, adds the recent turns of the current conversation, and feeds that bundle in as context. It is intelligent retrieval at sub-millisecond cost, with no extra model call just to remember.

The answer itself comes from the Claude Code CLI, which Loci spawns as a subprocess and streams back token by token. So the reasoning is first-class, but the billing model is whatever Claude Code subscription you already have — not per-token API usage.

## Staying on top of it

The other half of Loci runs while you are not looking. A background agent, scheduled with `node-cron`, does two things.

Each day it looks at the topics with recent activity and writes a concise summary of what changed. Once a week it steps back, reads those summaries, and looks for connections across topics — surfacing a few thought-provoking questions along the way. Both land in an Insights view and fire a desktop notification when they are ready.

This is the part that turns a pile of notes into something you can stay on top of. Instead of re-reading everything, you get a short daily digest and a weekly synthesis that points out the threads you might have missed.

## Why this shape works

Loci is the generalised, open-source version of an idea I had already been living with: a personal Claude-driven assistant that remembers what I care about. It sits naturally alongside [taskdeck](https://github.com/luissh-5/taskdeck) and [news-digest](https://santos-luis.github.io/news-digest/).

The common thread across all of them is ownership. Markdown and SQLite are the source of truth, the data stays local, and the agent is a replaceable engine sitting on top. A second memory is only useful if you trust it completely — and the easiest way to earn that trust is to keep everything on your own machine.
