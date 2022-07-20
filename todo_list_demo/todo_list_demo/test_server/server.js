// start it with  node server
const express = require('express')

const app = express()

app.use((request, response, next) => {
    console.log(request)
    next()

})

app.get('/students', (request, response) => {
    const students = [
        { id: '001', name: 'tom', age: 18 },
        { id: '002', name: 'tony', age: 18 },
        { id: '003', name: 'jack', age: 18 },
    ]
    response.send(students)
})

app.listen(5000, (err) => {
    if (!err) console.log("server start with 5000~~~~")
})