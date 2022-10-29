var express = require('express');
var path = require('path');

var studentRouter = require("./route/user");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", studentRouter);

app.use((req, res, next) => {
    res.send("Page Not Found");
    // res.sendFile(__dirname + "/notfound.html");
});


app.listen(4004, () => {
    console.log("Server started on port 4004");
});
