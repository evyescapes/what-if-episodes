#!/bin/bash
# What If animation skill + studio, installed fresh in every new session.
# Pinned to the version that was reviewed on 2026-10-28; change COMMIT only after reviewing a newer one.
set -e
COMMIT=3725a22d2d101320cae5b7d761af8d75120c4987
SKILL="$HOME/.claude/skills/what-if-animation"
STUDIO=/home/user/what-if-studio

if [ ! -f "$SKILL/SKILL.md" ]; then
  rm -rf "$SKILL" && mkdir -p "$SKILL"
  git -C "$SKILL" init -q
  git -C "$SKILL" fetch -q --depth 1 https://github.com/kelano86/what-if-animation "$COMMIT"
  git -C "$SKILL" checkout -q FETCH_HEAD
  rm -rf "$SKILL/.git"
fi

if [ ! -d "$STUDIO/node_modules" ]; then
  mkdir -p "$STUDIO"
  cp -rn "$SKILL/studio/." "$STUDIO/"
  (cd "$STUDIO" && npm install --no-audit --no-fund)
fi
