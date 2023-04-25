const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const connection = require("./database/database")

connection
    .authenticate()
    .then(() => {
        console.log("Connected with Database")
    })
    .catch( (err) => {
        console.log(err)
    })

//HTML render EJS
app.set(`view engine`, `ejs`);
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//routes
app.get("/", (req, res) => {
    res.render("index")
});

app.get("/questions", (req, res) => {
    res.render("questions")
});

app.post("/saving", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    res.send("Form received! Title " + title + " " + "description " + description);
})

app.listen(8080, () => {
    console.log("Running on PORT 8080")
})