const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const session = require('express-session')
const User = require('./models/user')
const Product = require('./models/products')

mongoose.connect('mongodb+srv://neelbavarva:Neel@9427@cluster0.mcg8e.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log("Mongo Connection Open")
    })
    .catch(err => {
        console.log("Nope, it won't work")
    })

const requireLogin = (req,res,next) => {
    if(!req.session.user_id){
        return res.redirect('/login')
    }
    next();
}

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'cookie_secret',
    proxy: true,
    resave: true,
    saveUninitialized: true

}))


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

let usersession = "";

app.get('/', requireLogin, (req, res) => {
    res.render('home')
})

app.get('/register', (req,res) => {
    res.render('register')
})

app.post('/register', async (req,res) => {
    const {username, email, password} = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = await new User ({
        username,
        email,
        password: hash
    })
    await user.save()
    req.session.user_id = user._id;
    usersession = user._id;
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
   
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword) {
        req.session.user_id = user._id;
        usersession = user._id;
        console.log(usersession)
        res.redirect('/secret');
    } else {
        res.redirect('/login');
    }
})

app.post('/logout', (req, res) => {
    req.session.destroy();
    usersession = "";
    res.redirect('/login');
})

// app.get('/secret', requireLogin, (req, res) =>{
//     res.render('home')
// })

app.post('/addproduct',requireLogin, async (req, res) =>{
    const {url, site, price} = req.body;
    const username = usersession;
    const product = await new Product ({
        username,
        url,
        site,
        price
    })
    
    await product.save();

    res.redirect('/');
})

app.get('/product', (req, res) => {
    res.render('product')
})

app.get('/allproduct', async (req, res) => {
    const product = await Product.find();
    
    res.send({product});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log(`Server Running at port ${PORT}`));