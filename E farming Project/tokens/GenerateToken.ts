import {User} from "../utils/types";

const jwt = require("jsonwebtoken");
const Constants = require("../utils/Constants");
export const getAccessToken = (user:User)=>{
    const accessToken = jwt.sign({
        email: user.username,
        id:user.id
    }, Constants.APP_SECRET, {
        expiresIn: '80d',
    });
    return accessToken;
}
export const getRefreshToken = (user:User)=>{
    const refreshToken = jwt.sign({
        email: user.username,
        id:user.id
    }, Constants.APP_SECRET, {
        expiresIn: '180d',
    });
    return refreshToken;
}