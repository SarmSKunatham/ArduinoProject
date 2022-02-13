// IMPORT HERE
// const rest = require("arest")
const express = require('express')
const app = express()
const port = process.env.port || 8000

// MIDDLEWARE HERE



// START SERVER
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))