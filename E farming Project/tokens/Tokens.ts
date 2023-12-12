const jwt = require('jsonwebtoken');
import prisma from '../utils/prisma';
import {Request,Response,NextFunction} from "express";
const Constants = require("../utils/Constants");
export const userJWT = (req:Request,res:Response,next:NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token
    jwt.verify(token, Constants.APP_SECRET, (err:any, user:any) => {
        if (err) return res.sendStatus(403)
        // @ts-ignore
        req.user = user
        next() // pass the execution off to whatever request the client intended
    })

}