#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const args = process.argv.slice(2);
const isLocal = args.includes('--local');
const showHelp = args.includes('--help') || args.includes('-h');

if (showHelp) {
  console.log(`
Usage: npx learn-english-skill [--local]

Installs the english-tutor skill file into your Claude Code skills directory.

Options:
  --local    Install into ./.claude/skills/ (current project)
             Default: install into ~/.claude/skills/ (global)
  --help     Show this message
`);
  process.exit(0);
}

const skillFile = path.join(__dirname, '..', 'english-tutor.md');
const targetDir = isLocal
  ? path.join(process.cwd(), '.claude', 'skills')
  : path.join(os.homedir(), '.claude', 'skills');
const targetFile = path.join(targetDir, 'english-tutor.md');

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(skillFile, targetFile);

console.log(`✓ Installed english-tutor skill to ${targetFile}`);
console.log('  Use it in Claude Code with /english-tutor or trigger phrases like "correct my english"');
