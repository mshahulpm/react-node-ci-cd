const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.json({
        message: "working fine"
    })
})

app.get('*', (req, res) => {
    res.status(404).json({
        message: "not found"
    })
})

app.listen(3000, () => console.log("server is running on port 3000"))
