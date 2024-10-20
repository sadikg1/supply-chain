const express = require('express');
const app = express();
const port = 4000;

const sequelize = require('./database/db.js'); 
const routes = require('./routes/routes.js');

app.use(express.json()); 
app.use('/', routes);

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
