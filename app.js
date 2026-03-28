console.log("Hello from Node!")

const os = require('os')

console.log("My name:", os.hostname())
console.log("Free memory:", os.freemem())
console.log("Platform:", os.platform())


const fs = require('fs')

fs.writeFileSync('hello.txt', 'Hello from Node.js!')
console.log("File created!")