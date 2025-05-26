import express from "express"

const app = express();

app.get("/signup", (req,res) =>{
    res.send("hello world!");
})

app.get("/signin", (req,res) =>{
    res.send("hello world!");
})

app.get("/login", (req,res) =>{
    res.send("hello world!");
})

app.listen(5001, () =>{
    console.log("server is running on port 5001")
})