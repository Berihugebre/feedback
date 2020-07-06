const mongoose = require('mongoose');

const uri = `mongodb+srv://berihu:0Xo2qsmDpxHcJ6a9@cluster0.layeu.mongodb.net/feedback?retryWrites=true&w=majority`;


const db = mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db Connected and ready'))
    .catch(err => console.log(err));
