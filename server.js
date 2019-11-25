const express = require('express')
const app = express()
app.get('/api/timestamp/:date_string?',(req,res)=>{
    let c = (req.params.date_string)
    let dat = new Date(c)
    let dic ={}
    dic.unix= dat.getTime()
    dic.utc= dat.toUTCString()
    res.send(JSON.stringify(dic))
})
app.listen(process.env.PORT,()=>console.log('server started'))