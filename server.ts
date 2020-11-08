const express = require('express')
const app = express();
const path = require('path')

// Serve static react files
app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/api/testapi', (req:any, res:any)=> {
    res.json({message: "successfully connected to the api"})
    console.log('Successful connection to the api')
})

app.get('*', (req:any, res:any)=>{
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

const PORT = process.env.PORT  || 5000

app.listen(PORT)
console.log(`Server listening on PORT ${PORT}`)