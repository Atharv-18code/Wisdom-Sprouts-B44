const express = require('express')
const  mongoose  = require('mongoose')
const app = express()

require('dotenv').config()

const port = process.env.port || 4000

app.use(express.json())


// connection of database

mongoose.connect('mongodb://localhost:27017/atharv')
.then(()=>{console.log('database connected')})
.catch((err)=>{console.log(err)})



//creating a schema

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    age:{type:String,required:true},
    Position:{type:String,required:true}
})

const User = mongoose.model('User',userSchema)





app.get('/',async(req,res)=>{
    try {

        const user = await User.find() //mongoose

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})


app.post('/add',(req,res)=>{
    const {name,age,Position} = req.body


    try {
        const user = User.create({name,age,Position})

        res.status(201).json({name,age,Position,message:"Data has been created successfully 🤩"})
    } catch (error) {
        res.status(500).json(error)
    }
})



app.put('/update/:id',async(req,res)=>{
    const {name,age,Position} = req.body
    const {id} = req.params
    try {
        const user = await User.findByIdAndUpdate(id,{name,age,Position})

        res.status(200).json({message:"Update Successfull"})
    } catch (error) {
        res.status(500).json(error)
    }
})



app.delete('/delete/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const user = await User.findByIdAndDelete(id)
        res.status(200).json({message:"Delete"})
    } catch (error) {
        res.status(500).json(error)
    }
})

app.listen(port,()=>{
    console.log(`we are running our server at ${port}`)
})