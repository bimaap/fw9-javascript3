
const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
    return res.json()
})
.then(data => {
    data.forEach(e => {
        console.log(data[e.id - 1].name)
    });
})
.catch(err => console.log('ERROR'))