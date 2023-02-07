const express = require('express'); 
const app = express();
const port = 5000;
app.use(express.json());    
app.get('/', function (req, res) {
    res.send('GET request to homepage');
})

app.post('/', function (req, res) {
    let body = req.body;
    console.log(body);
    res.status(201).send(body)
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 