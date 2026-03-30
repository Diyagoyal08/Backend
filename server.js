const express = require ('express')
const app = express()
const users = require('./routes/users')
const products = require('./routes/products')
app.use(express.json())

app.use((req , res , next) =>{
    console.log(req.method, req.url , new Date())
   next()
}) 
 
app.use('/users', users)
app.use('/products', products)

app.get('/' , (req,res)  =>{
res.send("HEllo from express")
})

app.get('/about' ,  (req , res) =>{
    res.send("hello from about")
})

app.get('/contact' ,  (req , res) =>{
    res.send("hello from contact")
})

app.get('/user' , (req , res ) =>{
    res.json({
        name :"diya",
        age: 20 ,
        city : "jaipur"
    })
})

app.get('/users' , (req , res ) =>{
    res.json(
       [
          { id: 1, name: "ab" },
          { id: 2, name: "cd" }
       ]
    )
})

app.get('/crash' ,  (req , res , next) =>{
     next(new Error("Something broke!"))
})

 
app.post('/register', (req, res) => {
  console.log(req.body)
  if(!req.body.name || !req.body.email) {
    return res.status(400).json({ message: "Name and email are required!" })
  }
  res.status(201).json({ message: "User registered!" })
}) 

  app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message })
})

 app.use((req, res) => {
  res.status(404).json({ error: "Route not found" })
})

 

app.listen(3000, () => {
  console.log("Express server running on port 3000")
})


// node --watch server.js 