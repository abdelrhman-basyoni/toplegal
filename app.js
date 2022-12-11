
const express = require('serverless-express/express')
const app = express();

app.use(express.json());
const errorHandler = require('./middlewares/errorHandler')

const router = require('./routers/router')

// app.get('/hello-world', (req, res) => {
//   return res.send('Hello-World!');
// });



app.use(router);
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


// custom error handler middleware
app.use(errorHandler);
module.exports = app