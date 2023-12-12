import prisma from '../utils/prisma';
import {Request, Response} from 'express';
import {getResponse, Result} from "../utils/Utility";
import {getAccessToken,getRefreshToken} from "../tokens/GenerateToken";
import {MarketPrice} from "@prisma/client";
import fs from "fs";
import path from "path";
const bcrypt = require('bcrypt');
const saltRounds = 10;

export default class FarmerController {
    static async login(req:Request, res:Response) {
        try{
            const {username, password,userType} = req.body;
            console.log(username, password)
            const user = await prisma.user.findUnique({
                where: {
                    username: username
                }
            });
            console.log(user)
            if (user !==null) {
                const match = await bcrypt.compare(password, user.password);
                if (match) {
                    const accessToken = getAccessToken(user);
                    const refreshToken = getRefreshToken(user);
                    const data = {
                        user,
                        accessToken,
                        refreshToken
                    }
                   if (userType === user.userType) {
                          Result(res,getResponse(false,'success',data),200)
                   }else {
                          Result(res,getResponse(true,'user type not correct',null),200)
                   }

                } else {
                    Result(res,getResponse(true,'password incorrect',null),200)
                }
            }else {
                console.log('user not found')
                Result(res,getResponse(true,'user not found',null),200)
            }

        }catch (e) {
            console.log(e)
            // @ts-ignore
            Result(res,getResponse(true,e.message,null),500)
        }

    }

    static async register(req:Request, res:Response) {

        try{
            const  {userData} = req.body;
            //encrypt password using bcrypt
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(userData.password, salt);
            userData.password = hash;

            const user = await prisma.user.create({
                data: {
                    ...userData
                }
            });
            const accessToken = getAccessToken(user);
            const refreshToken = getRefreshToken(user);
            const data = {
                user,
                accessToken,
                refreshToken
            }
            Result(res,getResponse(false,'success',data),200)


        }catch (_e) {
            console.log(_e)
            let e:Error= _e;
            console.log(e.message)
            Result(res,getResponse(true,e.message,null),200)


        }


    }

    static async getMarketPrice(req:Request, res:Response) {
        try{

            const marketPrice = await prisma.marketPrice.findMany({
                where: {
                    state: req.query.state,
                },
                orderBy: {
                    name: 'asc',
                }
            })
            const data:MarketPrice[] = [];
            marketPrice.forEach((item)=>{
                const value = data.find((i)=>i.district === item.district);
                if(value === undefined){
                    data.push(item)
                }
            })
            Result(res,getResponse(false,'success',marketPrice),200)
        }catch (e){
            console.log(e)
            // @ts-ignore
            Result(res,getResponse(true,e.message,null),200)
        }
    }

    static async getDatabaseCrops(req:Request, res:Response) {
        try{

            const crops = await prisma.crops.findMany({
                orderBy: {
                    name: 'asc',
                }
            })

            Result(res,getResponse(false,'success',crops),200)
        }catch (e){
            console.log(e)
            // @ts-ignore
            Result(res,getResponse(true,e.message,null),200)
        }
    }

    static async addCrops(req:Request,res:Response){
            try{
                const clearCrops = await prisma.userCrops.deleteMany({
                    where: {
                        userId: req.body.id
                    }

                })
                const crops = await prisma.userCrops.createMany({
                    data:req.body.crops
                })

                Result(res,getResponse(false,'success',""),200)

            }catch (e){
                console.log(e)
                // @ts-ignore
                Result(res,getResponse(true,e.message,null),200)
            }
    }

    static async getFarmerCrops(req:Request,res:Response){
        try{
            const crops = await prisma.userCrops.findMany({
                where: {
                    userId: req.user.id
                },
                include: {
                    crop: true
                }
            })
            Result(res,getResponse(false,'success',crops),200)
        }catch (e){
            console.log(e)
            // @ts-ignore
            Result(res,getResponse(true,e.message,null),200)
        }
    }

    static async uplodeImage(req:Request,res:Response){
      
      
            if (!req.files || Object.keys(req.files).length === 0) {
                Result(res,getResponse(true,'No files were uploaded.',null),200)
              return;
            }
                  
            console.log('req.files >>>', req.files.file); // eslint-disable-line
                    
            let sampleFile = req.files.file;
            let dir = path.join(__dirname.replace("/dist",""), '../static/images/products/'+req.user.id);
            if (!fs.existsSync(dir)){
              fs.mkdirSync(dir, { recursive: true });
          }
                      
            let uploadPath = `${dir}/${sampleFile.name}`
          
            sampleFile.mv(uploadPath, function(err) {
              if (err) {
                console.log(err);
                Result(res,getResponse(true,'error',null),200)
              }
          
             Result(res,getResponse(false,'success',""),200)
            });
          
          }

          static async addproduct(req:Request,res:Response){
                    try{
                        const {data} = req.body
                        const product = await prisma.product.create({
                            data:data
                        })
                        const inventory = await prisma.inventory.create({
                            data:{
                                productId:product.id,
                                userId:req.user.id,
                                stock:req.body.stock,
                            }
                        })
                        Result(res,getResponse(false,'success',""),200)
                    }catch (e) {
                        console.log(e)
                        // @ts-ignore
                        Result(res,getResponse(true,e.message,null),200)
                    }
          }


          static async getProducts(req:Request,res:Response){
            try{

                const products = await prisma.product.findMany({
                    where: {
                        userId: req.user.id
                    },
                    include: {
                        inventory: true
                    }
                })
                Result(res,getResponse(false,'success',products),200)
            }catch (e) {
                console.log(e)
                // @ts-ignore
                Result(res,getResponse(true,e.message,null),200)
            }
          }

          
          static async getOrdersBySellerId(req:Request,res:Response){
            try{

                const orders = await prisma.orders.findMany({
                    where: {
                        sellerId: req.user.id
                    },
                    include: {
                        product: true,
                        user: true
                    }
                })
                Result(res,getResponse(false,'success',orders),200)
            }catch (e) {
                console.log(e)
                // @ts-ignore
                Result(res,getResponse(true,e.message,null),200)
            }
          }


          static async getshopping(req:Request,res:Response){
                    try{
                        const shop = await prisma.shopping.findMany({
                            orderBy: {
                                name: 'asc',
                            }
                        })
                        Result(res,getResponse(false,'success',shop),200)
                    }catch (e) {
                        console.log(e)
                        // @ts-ignore
                        Result(res,getResponse(true,e.message,null),200)
                    }
          }

          static async getMarketAndCropBasedOnState(req:Request,res:Response){
            try{
                const {state} = req.query
                const market = await prisma.marketPrice.findMany({
                    where: {
                        state: state
                    },
                
                })
                Result(res,getResponse(false,'success',market),200)
            }catch (e) {
                console.log(e)
                // @ts-ignore
                Result(res,getResponse(true,e.message,null),200)
            }

          }

          




}
