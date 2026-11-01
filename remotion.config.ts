import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('png');
Config.setOverwriteOutput(true);
Config.setEntryPoint('src/index.ts');

// In a cloud session whose network blocks Remotion's browser download, use the pre-installed headless Chromium.
import { existsSync } from 'fs';
const CLOUD_SHELL = '/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell';
if (existsSync(CLOUD_SHELL)) Config.setBrowserExecutable(CLOUD_SHELL);
