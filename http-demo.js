var http = require('http')
var PORT = process.env.PORT || 3000

http.createServer((req, res) => {
    if(req.url === '/endpoint')
    res.end('<h1>This is the endpoint</h1>')
    console.log('req.url: ', req.url)
})
.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`)  
})