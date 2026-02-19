
const errorHandler = ((req, res, next) => {
    res.status(500).json({ staus: "Fail", message: error.message });
})

module.exports = errorHandler;
