const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString = "mongodb+srv://reja_user:YourSecureRejaPass123@cluster0.wetuy.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
    connectionString, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, 
(err, client) => {
    if(err) console.log('ERROR on connection MongDB');
    else {
        console.log('MongoDB connection succeed');
        module.exports = client;
        const app = require('./app');
        const server = http.createServer(app);
        let PORT = 5006;
        server.listen(PORT, function ()  {
            console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
        }); 
    }
});


