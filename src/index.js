const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(
    'mongodb+srv://omnistack:omnistack@omnistack-0stko.mongodb.net/volleyball?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }); // conectar mongoose

const app = express()

app.use(cors());
app.use(express.json())
app.use(routes)


app.listen(3333)