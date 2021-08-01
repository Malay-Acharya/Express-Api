const express = require('express');
require("./db/conn");
const Student = require("./models/students")
const studentRouter = require("./routers/student")

const app = express();
app.use(express.json());

const port = process.env.PORT||8000;

app.use(studentRouter);

app.listen(port, ()=> console.log(`Listening on port ${port}...`));
