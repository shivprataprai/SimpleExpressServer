const express = require('express')
const app = express()
app.get('/api/timestamp/:date_string?',(req,res)=>{
    let c = (req.params.date_string)
    let dat
    if(isNaN(c)){
       dat = new Date(c)
    }
    else{
        dat = new Date(parseInt(c)*1000)
    }
    let dic ={}
    dic.unix= dat.getTime()
    dic.utc= dat.toUTCString()
    res.json(dic)
})
app.listen(3333,()=>console.log('server started'))