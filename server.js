const express = require('express');
const app = express();

const routes = require('./routes/index')
const PORT = process.env.PORT || 5000;

app.use('/', routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});