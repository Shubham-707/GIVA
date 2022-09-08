const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

require('./conn');
const router = require('./routes');

app.get('/', (req, res) => {
    res.send('Search "localhost:3000/user" to get the desired content!')
});


app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`server is listening at PORT http://localhost:${PORT}`);
});