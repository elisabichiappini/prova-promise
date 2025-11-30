const path = require('path');
const fs = require('fs');

async function loadJsonData(nomeFile) {
    const filePath = path.join(__dirname, nomeFile);
    const data = await fs.promises.readFile(filePath);
    return JSON.parse(data);
}

async function main() {
    const data = await loadJsonData('data.json');
    console.log(data);
}

main();