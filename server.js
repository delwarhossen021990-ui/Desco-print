const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
origin: "*"
}));

app.get("/", (req,res)=>{
res.send("Backend Running");
});

app.get("/receipt/:meter", (req,res)=>{

const meter = req.params.meter;

res.json([
{
date:"2026-05-20",
name:"DESCO USER",
meter:meter,
amount:"990",
token:"1179-2603-1972-0482-5926"
}
]);

});

const PORT = process.env.PORT || 10000;

app.listen(PORT, ()=>{
console.log("running");
});
