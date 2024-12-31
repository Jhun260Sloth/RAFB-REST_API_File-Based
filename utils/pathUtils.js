const path = require('path');
const fs = require('fs').promises;

async function discoverJsonFiles(jsonDir) {
    try {
        const files = await fs.readdir(jsonDir);
        const jsonFiles = files.filter(file => file.endsWith('.json'));
        
        const dataPaths = {};
        for (const file of jsonFiles) {
            const collection = path.basename(file, '.json');
            dataPaths[collection] = path.join(jsonDir, file);
        }
        return dataPaths;
    } catch (error) {
        console.error('Error discovering JSON files:', error);
        return {};
    }
}

module.exports = {
    discoverJsonFiles
};