const path = require('path');

module.exports = {
    JSON_DIR: path.join(process.cwd(), 'json_s'),
    PORT: process.env.PORT || 3000
};