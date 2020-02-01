const express = require('express')
const app = express()
app.get('/', (request, response) => {
    response.send('welcome to my backend')
})

app.post('/', (request, response) => {
    response.send('welcome to post')
})
app.listen(9898, '0.0.0.0', () => {
    console.log('server started on port 9898')
})