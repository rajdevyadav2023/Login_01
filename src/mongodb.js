const mongoose = require('mongoose');

// Connecting to mongodb database 
mongoose.connect("mongodb://127.0.0.1:27017/UserInfo")
.then(()=>{
console.log("MongoDB is connected!")
})
.catch(()=>{
console.log("Failed to connect!")
});

// Creating Schema to define document format 
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
       
    },
    lastName:{
        type: String,
        
    }
    ,
    phoneNumber:{
        type: Number,
        
    },
    email:{
        type: String,
      
    },
    userName:{
        type: String,
        
    },
    password: {
        type: String,
       
    }

});

// Creating collection model
const collection = new mongoose.model("UserDetails", UserSchema);

module.exports = collection ;