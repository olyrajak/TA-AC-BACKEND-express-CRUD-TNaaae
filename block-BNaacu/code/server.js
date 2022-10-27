var express = require('express');
var path = require('path');

var studentRouter = require("./route/student");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/students", studentRouter);

app.use((req, res, next) => {
    res.send("Page Not Found");
    // res.sendFile(__dirname + "/notfound.html");
});


app.listen(4000, () => {
    console.log("Server started on port 4000");
});