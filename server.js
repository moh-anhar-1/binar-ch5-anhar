const express = require('express');
const app = express();
const router = require('./routes')
const path = require('path');
const { get } = require('./routes');

//load css

app.use('/chapter3', express.static(path.join(__dirname, 'chapter-3')))
app.use('/chapter4', express.static(path.join(__dirname, 'chapter-4')))

//prety json
app.set('json spaces',2)

//routing
app.use(router)

//listen req
app.listen(5000, ()=> {
    console.log("online on 5000")
})
