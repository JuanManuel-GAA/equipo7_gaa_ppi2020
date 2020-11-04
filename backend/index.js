const express = require ('express');
const app = express();

app.use(express.json());

const routes = require ('./src/routes/routes.js')

app.use('/api',routes);
app.use(express.urlencoded({extended: false}));

app.listen(3000,()=>{
  console.log('server started')
});