const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res) => {
    res.send("Hello World");
})

app.post("/bfhl",(req,res) => {
    var Response = {};
    const is_success = true;
    const data = req.body.data;
    var letters = [];
    var numbers = [];


    data.forEach((element)=> {
        if(!isNaN(element))
            numbers.push(element);
        else{
            if(element>="A" && element<="Z" || element>="a"&&element<="z"){
                letters.push(element);
            }
        }   
    })

    Response = {
        is_success:is_success,
        user_id: "eshamathur_14082001",
        email: "eshamathurcs19@acropolis.in",
        roll_number: "0827CS191086",
        numbers: numbers,
        alphabets:letters
    };
    res.json(Response);
})
app.listen(port, ()=>{
    console.log("Server is running at 3000");
});
