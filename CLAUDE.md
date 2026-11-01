# What If studio (The Insurance Exam Queen / Fast Path Prep)

This repository is the Remotion studio for the What If animation skill (`~/.claude/skills/what-if-animation`,
installed by the environment's setup script; a copy of that script is in `setup/what-if-setup.sh`). Episodes,
characters and every engine change live here, so commit and push work to keep it.

## At the start of a session

1. If `node_modules/` is missing, run `npm install` here.
2. Run the skill from this folder: it is the "studio folder" that `SKILL.md` refers to. Ignore any
   `/home/user/what-if-studio` copy the setup script made; this repository is the one that is kept.
3. The ElevenLabs key is a network secret (added to requests to `api.elevenlabs.io`); `ELEVENLABS_API_KEY` in the
   environment is only a stand-in so the scripts start. Never print or commit a key.

## Changes from the skill's stock studio

- **The heroine** (`LOOKS.heroine`, `extra: 'dress'` in `src/engine/rig.tsx`): a grown woman in a knee-length purple
  dress with a gold belt and shoes, long brown side-swept hair with a gold clip. She is the star of our episodes, in
  place of Pip in the hoodie. Preview: `npx remotion still src/index.ts CastHeroine out/heroine.png`.
- **Local fonts:** `src/engine/fonts.ts` loads the three faces from `public/fonts/` (copied from `@fontsource`), not
  Google Fonts, which the cloud network blocks.
- **Browser:** `remotion.config.ts` uses the pre-installed headless Chromium in cloud sessions, since Remotion's own
  browser download is blocked. `scripts/stills.mjs` in the skill calls the renderer directly and does not read that
  config; if it fails to download a browser, pass `browserExecutable` the same path.
