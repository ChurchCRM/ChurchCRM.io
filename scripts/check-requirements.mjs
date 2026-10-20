import {readdirSync, readFileSync, statSync} from 'node:fs';
import {join} from 'node:path';

const requirements = JSON.parse(readFileSync('data/requirements.json', 'utf8'));
const problems = [];

function scan(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      scan(path);
    } else if (/\.(html|txt|xml|json)$/.test(name) && /@@\w+@@/.test(readFileSync(path, 'utf8'))) {
      problems.push(`${path}: unfilled requirement token`);
    }
  }
}

scan('public');

const llms = readFileSync('public/llms.txt', 'utf8');
for (const [name, label] of [['mysql', 'MySQL'], ['mariadb', 'MariaDB']]) {
  if (!llms.includes(`${label} ${requirements[name]}+`)) {
    problems.push(`public/llms.txt: missing "${label} ${requirements[name]}+" (static/llms.txt must match data/requirements.json)`);
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log('Requirement versions match data/requirements.json.');
