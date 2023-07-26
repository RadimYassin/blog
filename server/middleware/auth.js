const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAuth = async (req, res, next) => {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {

        try {
            token = req.headers.authorization.split(' ')[1]
            // Verify token
            const decoded = jwt.verify(token, "radim");
            req.user = await User.findById(decoded.id).select("-password")
            next();
        } catch (err) {
            return res.status(401).json({ message: "user not authenticated" });
        }

    }


    if (!token) res.status(401).json({ message: "user not authenticated" })

};


module.exports={isAuth}