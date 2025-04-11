const express = require('express')
const path = require('path')
const app = express()
const port = 2100

app.use(express.json())

app.set('views', path.join(__dirname,'views'));
app.set('view engine','hbs');

const content = [
    {id : 1, quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", auther : 'Albert Einstein'},
    {id : 2, quote : "A room without books is like a body without a soul.", auther : 'Marcus Tullius Cicero'},
    {id : 3, quote : "Be the change that you wish to see in the world.", auther : 'Mahatma Gandhi'}
]

app.get('/', (req,res) => {
    res.render('home',{content})
});


app.listen(port, () => {
    console.log("Server start in port 2100")
});