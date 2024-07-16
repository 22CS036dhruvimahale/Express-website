const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/home', (req, res) => {
//     res.send('Hello home!')
//   })

  app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/view/home.html') //to acess html file
  })

  app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/view/about.html')
  })

  app.get('/contacts', (req, res) => {
    res.sendFile(__dirname+'/view/contacts.html')
  })
  
  
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})