const express = require('express')
const path = require('path')

const app = express()
app.use('/js', express.static(path.resolve(__dirname, 'frontend', 'js')))

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})

app.listen(process.env.PORT || 5050, () => {
    console.log(`Server running...`);
})