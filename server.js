console.log('Web Serverni boshlash');  //shunchaki print qildik
const express = require('express'); //web server yaratish uchun require qildk
const app = express(); //Initializes an Express application.
const http = require('http'); // Imports the built-in HTTP module to work with HTTP servers.
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if(err) {
    console.log("ERROR:", err);
  }else {
    user = JSON.parse(data)
  }
});

//1 Kirish code
app.use(express.static('public')); // public fayl uchun dostup
app.use(express.json()); // json formatdagi datani arrayga perevod qiladi
app.use(express.urlencoded({extended: true})); //Extracts form data from POST requests and makes it accessible in req.body.


//2 Session code


//3 Views code
app.set('views', 'views'); //Specifies the folder named 'views' for template files.
app.set('view engine', 'ejs'); // Sets 'ejs' as the template engine for rendering views.


//4 Routing code
app.post("/create-item", (req, res) => {
   console.log(req.body);
   res.json({test: "success" });
});

app.get('/author', (req, res) => {
    res.render('author', {user: user});
});

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function ()  {
    console.log(`The server is running succesfully on port: ${PORT}`)
});
