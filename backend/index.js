const express = require('express')
const connectDB = require('./database')
connectDB();



const app = express()
const port = 3001

app.use("/api/admin", require("./routes/admin"))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})