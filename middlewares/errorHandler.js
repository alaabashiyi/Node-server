const errorHandler = (error, req, res) => {
    if (!error.status) {
        error.message = "Something went wrong please try again later";
    }

    res.status(error.status || 500).json({ message: error.message });
    return;
};

module.exports = errorHandler;
