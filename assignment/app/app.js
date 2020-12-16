const express = require('express');
const bodyParser = require("body-parser");
const app = express()
const port = 3000

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE"
    );
    next();
});

app.get('/', (req, res) => {
  var cityarray = {
    "result":[
        {
           "Id ":"1",
           "city ":"kolkata" 
        },
        {
           "Id ":"2",
           "city ":"delhi"
        },
        {
           "Id ":"3",
           "city ":"jaipur"
        },
        {
           "Id ": "4",
           "city ": "chennai"
        }
    ]
  };
  res.send(cityarray);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})