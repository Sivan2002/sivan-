import prisma from '../utils/prisma';
const csv = require('csv-parser')
const fs = require('fs')
interface Market {
    commodity_name: string,
    state: string,
    district: string,
    market: string,
    min_price: string,
    max_price: string,
    modal_price: string,
}
async function main() {
    /*const user = await prisma.user.create({
        data: {
            name: 'Arjun',
            password:'$2b$10$Xe9MGMrKYGJcYTWsDCCFmOiNnrC0V5yaKlPjBEr8JEwSozK0kmiam',
            createdAt: new Date(),
            username: 'imarjunraj',
            userType: 'Customer',
            phone: '9345856524',
        }
    })

    const crops = await prisma.crops.createMany({
        data:[
            {
                name: 'Tomato',
                image:'tomato.png',
            },
            {
                name: 'Potato',
                image:'potato.png',
            },
            {
                name: 'Onion',
                image:'onion.png',
            },
            {
                name: 'Cabbage',
                image:'cabbage.png',
            },
            {
                name: 'Apple',
                image:'apple.png',
            },
            {
                name: 'Banana',
                image:'banana.png',
            },
            {
                name: 'Barley',
                image:'barley.png',
            },
            {
                name: 'Beans',
                image:'beans.png',
            },
            {
                name: 'Brinjal',
                image:'brinjal.png',
            },
            {
                name: 'Chilli',
                image:'chilli.png',
            },
            {
                name: 'Cotton',
                image:'cotton.png',
            },
            {
                name: 'Cucumber',
                image:'cucumber.png',
            },
            {
                name: 'Mango',
                image:'mango.png',
            },
            {
                name: 'SoyBean',
                image:'soybean.png',
            },
            {
                name: 'SugarCane',
                image:'sugarcane.png',
            },
            {
                name: 'Sunflower',
                image:'sunflower.png',
            }
        ]
    })*/



}
const marketData = async  ()=>{
    /*const results:Market[] = [];

    fs.createReadStream('/home/mohan/WebstormProjects/efarmingbackend/agridata.csv')
        .pipe(csv())
        .on('data', (data:Market) => results.push(data))
        .on('end', () => {
            // @ts-ignore
            results.forEach(async (data) => {
                const market = await prisma.marketPrice.create({
                    data:{
                        name: data.commodity_name,
                        state: data.state,
                        district: data.district,
                        market: data.market,
                        min_price: data.min_price,
                        max_price: data.max_price,
                        modal_price: data.modal_price,
                    }
                })
            })
            // [
            //   { NAME: 'Daffy Duck', AGE: '24' },
            //   { NAME: 'Bugs Bunny', AGE: '22' }
            // ]
        });*/

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })