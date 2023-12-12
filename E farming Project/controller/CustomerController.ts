import prisma from '../utils/prisma';
import {Request, Response} from 'express';
import {getResponse, Result} from "../utils/Utility";
import {getAccessToken,getRefreshToken} from "../tokens/GenerateToken";
import {MarketPrice} from "@prisma/client";
import fs from "fs";
import path from "path";
const bcrypt = require('bcrypt');
const saltRounds = 10;

export default class CustomerController {











    static async getProducts(req:Request,res:Response){
        try{

            const products = await prisma.product.findMany({
                orderBy: {
                    name: 'asc'
                },

                include: {
                    inventory: true,
                    user: true
                }
            })
            Result(res,getResponse(false,'success',products),200)
        }catch (e) {
            console.log(e)
            // @ts-ignore
            Result(res,getResponse(true,e.message,null),200)
        }
    }

    static async getRecommendedProducts(req:Request,res:Response){
        try{
            
            const products = await prisma.product.findMany({
                orderBy: {
                    name: 'asc'
                },

                include: {
                    inventory: true,
                    user: true
                }
            })
            const data = products.sort(() => 0.5 - Math.random()).slice(0, 4)
            console.log(data)
            Result(res,getResponse(false,'success',data),200)
        }catch (e) {
            console.log(e)
            // @ts-ignore
            Result(res,getResponse(true,e.message,null),200)
        }
    }

    static async addorder(req:Request,res:Response){
        try{
            const {data} = req.body;
            console.log(data)
            const order = await prisma.orders.create({
                data: data
            })
            Result(res,getResponse(false,'success',""),200)
        }catch (e) {
            console.log(e)
            Result(res,getResponse(true,e.message,null),200)
        }
    }

    static async getOrders(req:Request,res:Response){
        try{

            const orders = await prisma.orders.findMany({
                where: {
                    userId: req.user.id
                },
                include: {
                    product: {
                        include: {
                            user: true
                        }
                    }
                }
            })
            Result(res,getResponse(false,'success',orders),200)
        }catch (e) {
            console.log(e)
            Result(res,getResponse(true,e.message,null),200)
        }
    }


    static async getproductsbyquery(req:Request,res:Response){
        try{
            const {search} = req.query
            const market = await prisma.product.findMany({
                where: {
                    name: {
                        contains: search
                    }
                },
                include: {
                    inventory: true
                }
            })
            Result(res,getResponse(false,'success',market),200)
        }catch (e) {
            console.log(e)
            // @ts-ignore
            Result(res,getResponse(true,e.message,null),200)
        }

      }

     



}