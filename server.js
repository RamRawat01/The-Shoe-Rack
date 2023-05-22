const express = require("express");
const request = require("request");
const app = express();
const bodyParser = require("body-parser");  
const https = require("https");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    
    res.sendFile(__dirname + "/index.html");
});
app.get("/index.html",function(req,res){
    
    res.sendFile(__dirname + "/index.html");
});
app.get("/cart.html",function(req,res){
    
    res.sendFile(__dirname + "/cart.html");
});

app.get("/products.html",function(req,res){
    
    res.sendFile(__dirname + "/products.html");
});

app.get("/product-details.html",function(req,res){
    
    res.sendFile(__dirname + "/product-details.html");
});


app.get("/account.html",function(req,res){
    
    res.sendFile(__dirname + "/account.html");
    
});


app.post("/account.html",function(req,res){
    var signin = req.body.logname;
    var  Email = req.body.mail;
    var password = req.body.pass;

    console.log(signin, Email ,password);
   
    const data = {
        memebers:[
            {
                name :signin,
                email_address : Email,
                password : password,
                status: "Subscribed",
            }
        ]
    }

const jsondata = JSON.stringify(data);
const url = "https://us21.api.mailchimp.com/3.0/lists/718245c16e";

const options = {
    method: "POST",
    auth : "ram1:03c825b69d258e69262a7f6279834320-us21"
}

const request = https.request(url,options,function(response){
    response.on("data",function(data){
        console.log(JSON.parse(data));
    })
})

request.write(jsondata);
request.end();
});
