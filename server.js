const express = require('express');
const cors = require('cors')
// import the model and db;

const Comment = require('./model')
const Db = require('./db');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.get('/', (req, res) => {
    try {
        res.status(200).json({
            message: 'server is up and running'
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
})

// if I want to see all the feedbacks


app.get('/feedback', async (req, res) => {
    try {
        const comments = await Comment.find({})
        res.status(200).json(comments)
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
})

app.post('/feedback', async (req, res) => {
    console.log(req.body)
    const feedback = req.body.feedback;
    const comment = new Comment({feedback })
    try {
        const newComment = await comment.save()
        res.status(201).json(newComment)
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
})

app.listen(PORT,()=>{
    console.log(`server is running on port${PORT} `)
})