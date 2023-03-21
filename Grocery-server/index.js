const express = require('express')
const server = express()

const cors = require('cors')

const dataService = require('./services/dataService')

server.use(cors({
    origin: 'http://localhost:4200'
}))

server.use(express.json())
server.listen(3000,()=>{
    console.log('Server connected at port number 3000');
})



server.get('/all-items', (req,res)=>{
    dataService.allProducts().then((result)=>{
        res.status(result.statusCode).json(result)
    })

})


server.get('/view/:id',(req,res)=>{
    console.log("inside View account");
    dataService.viewProduct(req.params.id).then((result)=>{
        console.log(result);
        
        res.status(result.statusCode).json(result)

    })
})


server.post('/add-to-wishlist',(req,res)=>{
    console.log("To add wishlist");
    dataService.Addwishlist(req.body).then((result)=>{
        console.log(result);
        res.status(result.statusCode).json(result)

    })
})

server.get('/get-wishlist',(req,res)=>{
    console.log("getting wishlist account");
    dataService.getWishlist().then((result)=>{
        console.log(result);
        res.status(result.statusCode).json(result)

    })
})


server.delete('/remove-item-wishlist/:productid',(req,res)=>{
    dataService.deleteWishlist(req.params.productid)
    .then((result)=>{
        res.status(result.statusCode).json(result)

        })
})


server.get('/get-cart',(req,res)=>{
    console.log("getting Cart account");
    dataService.getCart().then((result)=>{
        console.log(result);
        res.status(result.statusCode).json(result)

    })
})


server.post('/add-to-cart',(req,res)=>{
    console.log("To add cart");
    dataService.AddToCart(req.body).then((result)=>{
        console.log(result);
        res.status(result.statusCode).json(result)

    })
})


server.delete('/remove-item-cart/:productid',(req,res)=>{
    dataService.deleteCart(req.params.productid)
    .then((result)=>{
        res.status(result.statusCode).json(result)

        })
})