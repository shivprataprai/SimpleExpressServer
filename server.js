const express = require('express')
const app = express()
app.get('/hellowWorld',(req,res)=>{
    res.send('hellowworld')
})
app.listen(process.env.PORT,()=>console.log('server started'))