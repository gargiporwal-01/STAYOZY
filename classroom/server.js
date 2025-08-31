const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "namaste");
    res.cookie("madeIn", "India");
    res.send("sent you some cookies!!");
});

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("sent you some cookies");
});

app.listen(3000, () => {
    console.log("server is listening at 3000");
});