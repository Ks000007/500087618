const express = require('express');
const app = express();
const port = process.env.PORT || 8008;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/numbers', (req, res) => {

});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});