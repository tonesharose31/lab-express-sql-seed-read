const checkName = (req, res, next) => {
    // Check if the request body has a 'name' field
    if (req.body.name) {
        console.log("Name is valid");
        next(); 
    } else {
        res.status(400).json({ error: "Name is required!" });
    }
};

const checkBoolean = (req, res, next) => {
    // Check if 'is_favorite' is a boolean value
    if (typeof req.body.is_favorite === "boolean") {
        next(); 
    } else {
        res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
};

module.exports = {
    checkName,
    checkBoolean
};
