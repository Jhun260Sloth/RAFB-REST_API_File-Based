const express = require('express');
const { JSON_DIR, PORT } = require('./config/config');
const { discoverJsonFiles } = require('./utils/pathUtils');
const FileService = require('./services/fileService');
const DataController = require('./controllers/dataController');
const setupRoutes = require('./routes/api');
const requestLogger = require('./middleware/logger');

async function startServer() {
    try {
        const app = express();
        
        // Discover JSON files
        const dataPaths = await discoverJsonFiles(JSON_DIR);
        
        // Initialize services and controllers
        const fileService = new FileService(dataPaths);
        await fileService.ensureDirectoryExists(JSON_DIR);
        await fileService.initializeJsonFiles();
        
        const dataController = new DataController(fileService);
        
        // Middleware
        app.use(requestLogger);
        
        // Routes
        app.use('/api', setupRoutes(dataController, dataPaths));
        
        // Start server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            console.log('Using JSON files from:');
            Object.entries(dataPaths).forEach(([key, path]) => {
                console.log(`${key}: ${path}`);
            });
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();