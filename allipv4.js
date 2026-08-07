const fs = require('fs');
const path = require('path');

const downloadsDir = path.join(__dirname, 'downloads');
const ipv4Prefixes = new Set();

const files = fs.readdirSync(downloadsDir).filter((file) => file.endsWith('.json'));

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(downloadsDir, file), 'utf8'));
  for (const prefix of data.prefixes) {
    if (prefix.ipv4Prefix) {
      ipv4Prefixes.add(prefix.ipv4Prefix);
    }
  }
}

const sortedPrefixes = [...ipv4Prefixes].sort();

for (const prefix of sortedPrefixes) {
  console.log(prefix);
}
