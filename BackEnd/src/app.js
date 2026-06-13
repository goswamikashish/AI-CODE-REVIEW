const express = require('express')
const aiRoutes=require('./routes/ai.routes')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,resp)=>{
    resp.send('hellooooooooo')
})

app.use('/ai',aiRoutes)
module.exports = app;