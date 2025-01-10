
const express = require('express')
const Todo = require('../models/todoSchema')
const { getAllTodo, addAllTodo, deleteAllTodo, updateAllTodo } = require('../controller/todoController')


const router = express.Router()


router.get('/', getAllTodo)

router.post('/add', addAllTodo)


router.put('/update/:id',updateAllTodo)

router.delete('/delete/:id', deleteAllTodo)


module.exports = router