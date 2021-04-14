const express = require("express");
const postRouter = require("./router/postRouter");

//connect to database
require("./config/dbConnect");

const app = express();

//for JSON format
app.use(express.json());

//for FORM format
app.use(express.urlencoded());

app.use("/posts", postRouter);

app.listen(4000, () => console.log("server is up and running!"));
