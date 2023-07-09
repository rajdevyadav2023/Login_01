const express = require('express');
const hbs = require('hbs');
const path = require('path');
const collection = require('./mongodb');

// Creating App
const app = express();


app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// get method on login page 
app.get('/', (req, res)=>{
    res.render('login')
});

// post method on login page 
app.post('/login', async(req, res)=>{
    try{
const check = await collection.findOne({username:req.body.username});
if(check.password===req.body.password){
    res.render('dashboard');
} else{
    res.render('wrong_password')
}
    }
    catch{
res.render('user_not_found')
    }
})


// get method on signup page 
app.get('/signup', (req, res)=>{
    res.render('login')
});


// post method on signup page 
app.post('/signup', async (req, res)=>{
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
    }

    await collection.insertMany([data]);
    res.render('dashboard')
})

// Creating Server 
app.listen(3005, ()=>{
    console.log("Server is working.")
})
