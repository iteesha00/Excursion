const express = require('express')
const app = express()
const port=2000
console.log(__dirname)
app.use(express.static(__dirname +'/public'))
console.log(express.static(__dirname +'/public'))
app.get('/', (req, res)=>{
  res.sendFile('index.html')
})
app.listen(port,()=>{
    console.log(`Example app listing at port ${port}`)
})

