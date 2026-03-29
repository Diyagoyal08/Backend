/*console.log("Hello from Node!")

const os = require('os')

console.log("My name:", os.hostname())
console.log("Free memory:", os.freemem())
console.log("Platform:", os.platform())


const fs = require('fs')

fs.writeFileSync('hello.txt', 'Hello from Node.js!')
console.log("File created!")
*/


const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url=== "/"){
     
  res.write("Hello from my first server!")
    }
  else if(req.url === "/about") {
    res.write("this is about page")
  }
  else{
    res.write("something")
  }
  res.end()
})

server.listen(3000, () => {
  console.log("Server running on port 3000")
})