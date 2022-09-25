const express=require('express');
const app = express()
const port =5000

app.use(express.json())

const tasks =require('./routes/tasks')

app.use('/api/v1/tasks',tasks)
// app.get("/",(req,res)=>{
//     res.end("home")
// })

//app.get('/api.v1.tasks')    get all tasks
//app.post('/api.v1.tasks')    create new task
//app.get('/api.v1.tasks/:id')    get single task
//app.patch('/api.v1.tasks/:id')    update single  task
//app.delete('/api.v1.tasks/:id')    delete single  task





app.listen(5000,console.log('app listening on port 5000'))
