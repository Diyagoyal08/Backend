const express = require ('express')
const app = express()

app.use(express.json())

app.use((req , res , next) =>{
    console.log(req.method, req.url , new Date())
   next()
}) 

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

app.post('/register', (req, res) => {
  console.log(req.body)
  if(!req.body.name || !req.body.email) {
    return res.json({ message: "Name and email are required!" })
  }
  res.json({ message: "User registered!" })
}) 

app.listen(3000, () => {
  console.log("Express server running on port 3000")
})


// node --watch server.js 