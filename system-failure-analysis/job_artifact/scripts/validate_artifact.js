const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const publicRoot = 'job_artifact';
const receiptsDir = path.join(root, 'receipts');
const reportPath = path.join(receiptsDir, 'validation_report.json');

const cases = ['dolibarr', 'github-desktop', 'langflow', 'n8n', 'open-webui'];
const rootRequired = [
  'README.md',
  'PORTFOLIO_SUMMARY.md',
  'CASE_INDEX.md',
  'ARTIFACT_VERIFICATION_STATUS.md',
  'cases',
  'scripts',
  'receipts'
];
const caseRequired = [
  'README.md',
  'CASE_CARD.md',
  'FAILURE_TRACE.md',
  'ROOT_CAUSE.md',
  'PATCH_SUMMARY.md',
  'VERIFICATION.md',
  'INTERVIEW_NOTES.md',
  'evidence_needed.md',
  path.join('receipts', 'manifest.json')
];

function exists(targetPath) {
  return fs.existsSync(targetPath);
}

function nonEmptyMarkdown(targetPath) {
  if (!exists(targetPath)) {
    return false;
  }
  if (path.extname(targetPath).toLowerCase() !== '.md') {
    return true;
  }
  const text = fs.readFileSync(targetPath, 'utf8').trim();
  return text.length > 0;
}

const missing = [];
const emptyMarkdown = [];
const checked = [];

for (const item of rootRequired) {
  const target = path.join(root, item);
  checked.push(target);
  if (!exists(target)) {
    missing.push(target);
  }
}

for (const file of rootRequired.filter((item) => item.endsWith('.md'))) {
  const target = path.join(root, file);
  if (exists(target) && !nonEmptyMarkdown(target)) {
    emptyMarkdown.push(target);
  }
}

for (const slug of cases) {
  const caseDir = path.join(root, 'cases', slug);
  checked.push(caseDir);
  if (!exists(caseDir)) {
    missing.push(caseDir);
    continue;
  }

  for (const item of caseRequired) {
    const target = path.join(caseDir, item);
    checked.push(target);
    if (!exists(target)) {
      missing.push(target);
      continue;
    }
    if (path.extname(target).toLowerCase() === '.md' && !nonEmptyMarkdown(target)) {
      emptyMarkdown.push(target);
    }
  }
}

const pass = missing.length === 0 && emptyMarkdown.length === 0;
const report = {
  root: publicRoot,
  checkedCount: checked.length,
  pass,
  missing: missing.map((target) => path.relative(root, target).replace(/\\/g, '/')),
  emptyMarkdown: emptyMarkdown.map((target) => path.relative(root, target).replace(/\\/g, '/'))
};

fs.mkdirSync(receiptsDir, { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n', 'utf8');

console.log(`Artifact validation: ${pass ? 'PASS' : 'FAIL'}`);
console.log(`Checked paths: ${checked.length}`);
console.log(`Missing: ${missing.length}`);
console.log(`Empty markdown: ${emptyMarkdown.length}`);
console.log(`Report: ${reportPath}`);

process.exit(pass ? 0 : 1);
