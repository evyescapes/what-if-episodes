import { loadFont } from '@remotion/fonts';
import { staticFile } from 'remotion';
import { STUDIO } from '../studio.config';

// Three faces: a heavy display face for the title card, a mono for on-screen readouts (timers, labels, chips),
// and a handwriting face for chalk and notes. All three load from public/fonts (copied from the @fontsource
// packages), so renders work offline and behind a network that blocks Google Fonts.

const local = (family: string, file: string, weight: string) => loadFont({ family, url: staticFile(`fonts/${file}.woff2`), weight });
for (const w of ['600', '700', '800']) local('Bricolage Grotesque', `bricolage-grotesque-latin-${w}-normal`, w);
local('Fragment Mono', 'fragment-mono-latin-400-normal', '400');
for (const w of ['400', '700']) local('Kalam', `kalam-latin-${w}-normal`, w);
if (STUDIO.titleFont) loadFont({ family: STUDIO.titleFont.family, url: staticFile(STUDIO.titleFont.file), weight: STUDIO.titleFont.weight });

export const FONT = {
  title: STUDIO.titleFont ? STUDIO.titleFont.family : 'Bricolage Grotesque',
  ui: 'Fragment Mono',
  hand: 'Kalam',
};
