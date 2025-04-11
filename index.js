const express = require('express')
const path = require('path')
const app = express();
const port = 2000;

app.use(express.json());

app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')

const std = [

    {rollNumber : 1, name : 'Amal Paul', email : 'amal@gmail.com', phone : '9447333224'},
    {rollNumber : 2, name : 'Anto Sunny', email : 'anto@gmail.com', phone : '8877333224'},
    {rollNumber : 3, name : 'Joseh Devassy', email : 'joseph@gmail.com', phone : '7777333224'},
    {rollNumber : 4, name : 'Anand Anoop', email : 'anand@gmail.com', phone : '9997333224'},
]
    
app.get('/', (req,res) => {
    res.render("action");
})

app.get('/info', (req,res) => {
    res.render('home', {std})
})




app.listen(port, () => {
    console.log("Server running in port 2000")
});