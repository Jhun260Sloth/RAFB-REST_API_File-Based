function requestLogger(req, res, next) {
    console.log(`${req.method} ${req.url} at ${new Date()}`);
    next();
}

module.exports = requestLogger;