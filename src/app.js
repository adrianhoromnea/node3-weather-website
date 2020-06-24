const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath   = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'It is snowing!',
        location:'Vladeni Botosani'
    })
})

app.listen(port, ()=>{
    console.log('Server is up on port' + port + '.')
})


// test