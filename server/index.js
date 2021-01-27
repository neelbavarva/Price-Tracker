const express = require('express');
const mongoose = require('mongoose');
const Info = require('./models/Info')
const Url = require('./models/Url')
const app = express();
const cheerio = require('cheerio');
const request = require('request');
const bodyParser = require('body-parser')


const URL = "mongodb+srv://neelbavarva:Neel@9427@cluster0.mcg8e.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", ()=>{
    console.log("Connected to Mongo")
})

mongoose.connection.on("error", (err)=>{
    console.log("Error: ", err)
})



app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());




app.get('/', (req, res) => {
    const arr = ["list", "op", "req"];
    res.send(arr)
})

app.get('/getinfo', async (req, res) => {
    const info = await Info.find({});
    res.send(info);     
})

app.post('/postinfo', async (req, res) => {
    await Info.findByIdAndUpdate(req.body.id, { 
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

// request('https://www.amazon.in/Apple-Dual-core-10th-Generation-Intel-Core-i3-Processor/dp/B0864KFD7Y/ref=sr_1_1_sspa?crid=1PL9HQ9TML2UM&dchild=1&keywords=macbook+air&qid=1609048647&sprefix=macb%2Caps%2C598&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNUpFUzJXU0k2WDdIJmVuY3J5cHRlZElkPUEwNzAxNjk1MzZVTVNDWVVOSEhQUCZlbmNyeXB0ZWRBZElkPUEwNjkwMTEwWlBQSjA4SEFCNlJPJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==', (error, 
// response, html) => {
//     if(!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);

//         const name = $('#productTitle').text().trim();
//         console.log(name);

//         const price = $('#priceblock_ourprice').text();
//         console.log(price);
        
//     }

// });

let name = [];
let price = [];
let site = [];
let check = [];

app.get('/getAllProducts', async(req, res) => {
    
    let product = [];
    let price0 = "";
    const getproducts = await Url.find({});
    getproducts.map(item => {
        request(item.url, (error, 
        response, html) => {
            if(!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                
                const name0 = $('#productTitle').text().trim();
                if(!name.includes(name0)) {
                    name.push(name0);

                    price0 = $('#priceblock_ourprice').text()
                    price.push(price0);
                    console.log(price);

                    site.push(item.site);
                    console.log(site);

                    console.log(price0.substring(2));
                    if(parseInt(price0.substring(2)) > item.price){
                        console.log("Costly")
                    }
                }
                if(parseInt(price0.substring(2)) > 20){
                    console.log("Costly")
                }

            }

        });
    })

    res.send("OK");
})

app.get('/getname' , (req, res) => {
    res.send(price);
})

app.get('/geturl', async(req, res) => {
    const geturl = await Url.find({});
    res.send(geturl);
})

app.post('/posturl',(req, res) => {
    const newurl = new Url({
        site : req.body.site,
        url: req.body.url,
        price: req.body.price
    })
    newurl.save()
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));