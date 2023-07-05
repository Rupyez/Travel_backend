import express from 'express'
import { port, staticFolder } from './config/config.js'
import { connectDb } from './connectDb/db.js'
import bodyParser from 'body-parser'
import aboutRoute from './routes/aboutRoute.js'
import contactRoute from './routes/contactRoute.js'
import activitiesRoute from './routes/activitiesRoute.js'
import ticketingRoute from './routes/ticketingRoute.js'

const app = express()
// app.use(json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : false
}))
app.use(express.static(staticFolder))
connectDb()

app.use("/about/",aboutRoute)
app.use("/contact/",contactRoute)
app.use("/activities/",activitiesRoute)
app.use("/ticketing/",ticketingRoute)
app.get('/', (req,res)=>{
res.send('Homepage')
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})