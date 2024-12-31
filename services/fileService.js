const fs = require('fs').promises;

class FileService {
    constructor(dataPaths) {
        this.dataPaths = dataPaths;
    }

    async ensureDirectoryExists(dirPath) {
        try {
            await fs.access(dirPath);
        } catch {
            await fs.mkdir(dirPath, { recursive: true });
        }
    }

    async initializeJsonFiles() {
        try {
            for (const [collection, filePath] of Object.entries(this.dataPaths)) {
                try {
                    await fs.access(filePath);
                    // Check if file has correct structure
                    const content = await this.readJsonFile(filePath);
                    if (!content || !content[collection]) {
                        console.log(`Fixing structure for ${collection} file`);
                        const initialData = { [collection]: [] };
                        await fs.writeFile(filePath, JSON.stringify(initialData, null, 2));
                    }
                    console.log(`${collection} file exists at:`, filePath);
                } catch {
                    console.log(`Creating ${collection} file at:`, filePath);
                    const initialData = { [collection]: [] };
                    await fs.writeFile(filePath, JSON.stringify(initialData, null, 2));
                }
            }
        } catch (error) {
            console.error('Error initializing files:', error);
        }
    }

    async readJsonFile(filePath) {
        try {
            const data = await fs.readFile(filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error(`Error reading file ${filePath}:`, error);
            return null;
        }
    }

    async getAllItems(collection) {
        try {
            const filePath = this.dataPaths[collection];
            if (!filePath) return null;
            
            const data = await this.readJsonFile(filePath);
            if (!data || !data[collection]) {
                // If file exists but structure is wrong, fix it
                const initialData = { [collection]: [] };
                await fs.writeFile(filePath, JSON.stringify(initialData, null, 2));
                return [];
            }
            return data[collection];
        } catch (error) {
            console.error(`Error getting items from ${collection}:`, error);
            return null;
        }
    }

    async getItemById(collection, id) {
        const items = await this.getAllItems(collection);
        return items ? items.find(item => item.id === parseInt(id)) : null;
    }
}

module.exports = FileService;