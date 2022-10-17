const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello GhostRoot !!!')
})

app.post('/posts', (req, res) => {
  res.send(...req.body)
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example router listening at http://localhost:${port}`)
})
