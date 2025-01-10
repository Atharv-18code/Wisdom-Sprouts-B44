const Todo = require('../models/todoSchema')




exports.getAllTodo = async (req,res)=>{
    try{
        const todo = await Todo.find()
        res.status(200).json({message: 'Get todo now '})
    }catch{
        res.status(500).json({message: error})
    }
}

exports.addAllTodo = async (req,res)=>{
    const {task,details} = req.body
    try{
        const todo = await Todo.create({task,details})
        res.status(201).json({message: 'Add todo now '})
    }catch{
        res.status(500).json({message: error})
    }
}

exports.updateAllTodo = async (req,res)=>{
    const {id} = req.params
    const {task,details} = req.body
    try{
        const todo = await Todo.findByIdAndUpdate(id,{task,details})
        res.status(200).json({message: 'update now '})
    }catch{
        res.status(500).json({message: error})
    }
}

exports.deleteAllTodo = async (req,res)=>{
    const {id} = req.params
    const {task,details} = req.body
    try{
        const todo = await Todo.findByIdAndDelete(id,{task,details})
        res.status(200).json({message: 'delete todo now '})
    }catch{
        res.status(500).json({message: error})
    }
}