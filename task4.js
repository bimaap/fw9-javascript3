
const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
    return res.json()
})
.then(data => {
    data.map(e => {
        console.log(e.name)
    })
})
.catch(err => console.log('ERROR'))