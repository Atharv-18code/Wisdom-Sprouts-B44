const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/todo')
        console.log('Database connected');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
}

module.exports = connect;
