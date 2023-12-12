import {Router} from 'express';

import FarmerController from "../controller/FarmerController";
import CustomerController from "../controller/CustomerController";
import {userJWT} from "../tokens/Tokens";

const router = Router();
//check if working
router.get('/', (req, res) => {
    return res.send('its working!');
})
router.get('/getmarketprice',userJWT,FarmerController.getMarketPrice);
router.get('/getdatabasecrops',userJWT,FarmerController.getDatabaseCrops);
router.get('/getfarmercrops',userJWT,FarmerController.getFarmerCrops);
router.get('/getproducts',userJWT,FarmerController.getProducts);
router.get('/getstore',userJWT,CustomerController.getProducts);
router.get('/getrecommendedproducts',userJWT,CustomerController.getRecommendedProducts);
router.get('/getcustomerorders',userJWT,CustomerController.getOrders);
router.get('/getfarmerorders',userJWT,FarmerController.getOrdersBySellerId);
router.get('/getshopping',userJWT,FarmerController.getshopping);
router.get('/getmarketpricebasedquery',userJWT,FarmerController.getMarketAndCropBasedOnState);
router.get('/getproductsbyquery',userJWT,CustomerController.getproductsbyquery);


router.post('/login', FarmerController.login);
router.post('/register', FarmerController.register);
router.post('/addcrops',userJWT,FarmerController.addCrops);
router.post('/addorder',userJWT,CustomerController.addorder);

router.post('/uploadimage',userJWT,FarmerController.uplodeImage)
router.post('/addproduct',userJWT,FarmerController.addproduct)


export default router;