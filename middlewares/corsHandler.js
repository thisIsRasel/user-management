const corsHandler = (req, res, next) => {
    const whilelist = [
        "http://localhost:3000",
    ];

    const origin = req.get("origin");

    const isWhiteListed = whilelist.includes(origin);

    if (isWhiteListed) {
        req.originSource = 'Whitelisted Origin';
    } else {
        req.originSource = 'Unknown Origin'; // Attatch the origin to request object
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);

    if (req.method === "OPTIONS") {
        req.sendStatus(200);
    } else {
        next();
    }
};

module.exports = corsHandler;