const express = require("express");
const app = express()

//HTML render EJS
app.set(`view engine`, `ejs`);

app.get("/", (req, res) => {
    res.render("index")
});

app.listen(8080, () => {
    console.log("Running on PORT 8080")
})