console.log('Web Serverni boshlash');  
const express = require('express');
const app = express();  
const fs = require("fs");

// MongoDB call
const mongodb = require('mongodb');
const db = require('./server').db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if(err) {
    console.log("ERROR:", err);
  }else {
    user = JSON.parse(data)
  }
});

//1 Kirish code
app.use(express.static('public')); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 


//2 Session code


//3 Views code
app.set('views', 'views'); 
app.set('view engine', 'ejs'); 


//4 Routing code
app.post("/create-item", (req, res) => {
  console.log('user entered /create-item');
   console.log(req.body);
   const new_reja = req.body.reja;
   db.collection('plans').insertOne({reja: new_reja}, (err, data) => {
    res.json(data.ops[0]);
   });
});

app.post('/delete-item', (req, res) => {
 const id = req.body.id;
 db.collection('plans').deleteOne(
   { _id: new mongodb.ObjectId(id) },
   function (err, data) {
    res.json({state: 'success'});
   }
 );
});

app.post('/edit-item', (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection('plans').findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: 'success'});
    }
  );
});

app.post('/delete-all', (req, res) => {
  if(req.body.delete_all) {
    db.collection('plans').deleteMany(function () {
      res.json({ state: 'all plans deleted'});
    });
  }
})

app.get('/author', (req, res) => {
    res.render('author', {user: user});
});

app.get("/", function (req, res) {
  console.log('user entered /');
  db.collection('plans')
  .find()
  .toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end('something went wrong');
    } else {
      console.log(data);
      res.render("reja", {items: data});
    }
  });
});

module.exports = app;
