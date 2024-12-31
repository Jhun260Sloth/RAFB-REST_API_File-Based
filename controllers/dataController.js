class DataController {
    constructor(fileService) {
        this.fileService = fileService;
    }

    getAllItems = async (req, res) => {
        try {
            const { collection } = req.params;
            const items = await this.fileService.getAllItems(collection);
            if (!items) {
                return res.status(500).json({ error: `Error reading ${collection}` });
            }
            res.json(items);
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }

    getItemById = async (req, res) => {
        try {
            const { collection, id } = req.params;
            const item = await this.fileService.getItemById(collection, id);
            if (!item) {
                return res.status(404).json({ error: `${collection} item not found` });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = DataController;