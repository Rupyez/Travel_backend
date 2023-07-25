import express from 'express'
import { port, staticFolder,apiVersion } from './config/config.js'
import { connectDb } from './connectDb/db.js'
import bodyParser from 'body-parser'
import apiRouter from './routes/index.js';
import cors from 'cors';


const app = express()

//cors to let browser access the hosted backend
app.use(cors({
    origin : '*',
    methods : 'GET, POST, PUT, DELETE',
    credentials : true
}));

// app.use(json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : false
}))
app.use(express.static(staticFolder))
connectDb()

app.use(`${apiVersion}`,apiRouter)

app.get('/', (req,res)=>{
res.send('Homepage')
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
