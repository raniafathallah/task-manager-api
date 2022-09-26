const express=require('express');
const app = express()

app.use(express.json())
const tasks =require('./routes/tasks')
const connectDB = require('./db/connect');

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

require('dotenv').config();
app.use(errorHandlerMiddleware);
app.use('/api/v1/tasks',tasks)
// app.use(notFound);

//app.get('/api.v1.tasks')    get all tasks
//app.post('/api.v1.tasks')    create new task
//app.get('/api.v1.tasks/:id')    get single task
//app.patch('/api.v1.tasks/:id')    update single  task
//app.delete('/api.v1.tasks/:id')    delete single  task

const port = process.env.PORT || 5000;

const start = async () => {
  try { 
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) { 
    console.log(error);
  }
};

start();