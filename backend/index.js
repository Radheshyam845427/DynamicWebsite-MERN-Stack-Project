const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Contact = require("./db/Contact");
const Jwt = require('jsonwebtoken');
const jwtKey = 'dunamicwebsite';
const app = express();

app.use(express.json());
app.use(cors());

/*------------------------Register ke liye Use hai ye components------------------------*/

app.post("/register", async (req, resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(result);
})

/*---------------------------Login ke liye Use hai ye components------------------------*/ 

app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({user}, jwtKey, {expiresIn:"2h"},(err,token)=>{
                if(err){
                    resp.send("Something went wrong")  
                }
                resp.send({user,auth:token})
            })
        } else {
            resp.send({ result: "No User found" })
        }
    } else {
        resp.send({ result: "No User found" })
    }
});

/*----------------------------Contact ke liye use hai ye components---------------------*/

app.post("/contacts", async (req, resp)=>{
    let contact = new Contact(req.body);
    let result = await contact.save();
    resp.send(result);
});

app.listen(5000);