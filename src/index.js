const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use('/static', express.static('src/public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.get('/', (req, res)=> {
    res.send('atualizou')
})
app.listen(3000)