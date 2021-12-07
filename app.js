const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.use('/other', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/add', (req, res, next) => {
  res.send("<form action='/other' method='POST'><input type='text' name='title'></input><button type='submit'>Agegar</button></form>");
});

app.use('/', (req, res) => {
  res.send('Hello World!')
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})