const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())


app.get('/', (req, res) => {
    res.json({
        message: "working fine"
    })
})

app.get("/who", (req, res) => {
    setTimeout(() => {
        res.json({
            user: "Mohammed Shahul"
        })
    }, 2000)
})

app.get('*', (req, res) => {
    res.status(404).json({
        message: "not found"
    })
})

app.listen(5000, () => console.log("server is running on port 5000"))
