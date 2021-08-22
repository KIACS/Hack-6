require('./models/User');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/authRoutes.js');


app.use(bodyParser.json());
app.use(authRoutes);

mongoURI = 'mongodb+srv://Admin:pass@cluster0.9zg8f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected',() => {
    console.log('connected to instance');
});
mongoose.connection.on('error',(err) => {
    console.error('Error conectting to mongo',err);
});
app.get('/', function (req, res) {
    res.send('hello world');
  })

app.listen(3000,() => {
    console.log("listening on port 3000");
});