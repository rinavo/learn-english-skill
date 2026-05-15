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

const skillFile = path.join(__dirname, '..', 'english-tutor.md');
const targetDir = isLocal
  ? path.join(process.cwd(), '.claude', 'skills')
  : path.join(os.homedir(), '.claude', 'skills');
const targetFile = path.join(targetDir, 'english-tutor.md');

if (isUninstall) {
  if (!fs.existsSync(targetFile)) {
    console.log(`english-tutor skill not found at ${targetFile} — nothing to remove.`);
    process.exit(0);
  }
  fs.unlinkSync(targetFile);
  console.log(`✓ Removed english-tutor skill from ${targetFile}`);
  process.exit(0);
}

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(skillFile, targetFile);

console.log(`✓ Installed english-tutor skill to ${targetFile}`);
console.log('  Use it in Claude Code with /english-tutor or trigger phrases like "correct my english"');
