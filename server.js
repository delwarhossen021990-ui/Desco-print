const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/receipt/:meter", async(req,res)=>{

const meter = req.params.meter;

const data = [
{
date:"2026-05-20",
name:"DESCO USER",
meter:meter,
amount:"990",
token:"1179-2603-1972-0482-5926"
}
];

res.json(data);

});

app.listen(10000,()=>{
console.log("running");
});
