const express = require('express')
const app = express()

// const port = 4000 


require ('dotenv').config()

const port =  process.env.port

app.get('/',(req,res)=>{
        res.send(`<h1>Atharv</h1>`)
})

app.post('/post',(req,res)=>{
    res.send(`<h1>Kaise hoo</h1>`)
})


app.put('/update',(req,res)=>{
    res.status(200).json({message:"We are Updating here"})
})

app.delete('/delete',(req,res)=>{
    res.status(200).json({message:"We are Deleting here"})
})

app.listen(port,()=>{
    console.log(`we are listeng to server${port}`)
})