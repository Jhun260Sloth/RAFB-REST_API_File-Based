const express = require('express');
const router = express.Router();

function setupRoutes(controller, dataPaths) {
    // Create routes for each collection
    Object.keys(dataPaths).forEach(collection => {
        router.get(`/${collection}`, (req, res) => {
            req.params.collection = collection;
            controller.getAllItems(req, res);
        });

        router.get(`/${collection}/:id`, (req, res) => {
            req.params.collection = collection;
            controller.getItemById(req, res);
        });
    });

    return router;
}

module.exports = setupRoutes;