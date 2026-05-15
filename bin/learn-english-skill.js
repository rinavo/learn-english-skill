#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const { version } = require('../package.json');

const args = process.argv.slice(2);
const isLocal = args.includes('--local');
const isUninstall = args.includes('--uninstall');
const showHelp = args.includes('--help') || args.includes('-h');
const showVersion = args.includes('--version') || args.includes('-v');

if (showVersion) {
  console.log(version);
  process.exit(0);
}

if (showHelp) {
  console.log(`
Usage: npx learn-english-skill [options]

Installs (or removes) the english-tutor skill for Claude Code.

Options:
  --local      Install/uninstall in ./.claude/skills/ (current project)
               Default: ~/.claude/skills/ (global, all projects)
  --uninstall  Remove the skill instead of installing it
  --version    Print the package version
  --help       Show this message
`);
  process.exit(0);
}

const skillSrcDir = path.join(__dirname, '..', 'english-tutor');
const skillSrcFile = path.join(skillSrcDir, 'SKILL.md');
const baseDir = isLocal
  ? path.join(process.cwd(), '.claude', 'skills')
  : path.join(os.homedir(), '.claude', 'skills');
const targetDir = path.join(baseDir, 'english-tutor');
const targetFile = path.join(targetDir, 'SKILL.md');

if (isUninstall) {
  if (!fs.existsSync(targetDir)) {
    console.log(`english-tutor skill not found at ${targetDir} — nothing to remove.`);
    process.exit(0);
  }
  fs.rmSync(targetDir, { recursive: true, force: true });
  console.log(`✓ Removed english-tutor skill from ${targetDir}`);
  process.exit(0);
}

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(skillSrcFile, targetFile);

console.log(`✓ Installed english-tutor skill to ${targetFile}`);
console.log('  Use it in Claude Code with /english-tutor or trigger phrases like "correct my english"');
