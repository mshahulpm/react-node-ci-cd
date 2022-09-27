const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors())
app.use(express.static(path.join(__dirname, 'frontend/dist')))



app.get("/who", (req, res) => {
    setTimeout(() => {
        res.json({
            user: "Shahul"
        })
    }, 2000)
})

app.get('*', (req, res) => {
    res.status(404).json({
        message: "not found"
    })
})

app.listen(5000, () => console.log("server is running on port 5000"))
