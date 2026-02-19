import express from 'express';
import cors from 'cors'
import loadCsvRoute from './routes/loadcsv.js';
import resultRoute from './routes/saveTestResult.js';
const app = express()
const PORT = 3000
app.use(express.json())
app.use(cors())
app.use('/loadcsv', loadCsvRoute)
app.use('/result', resultRoute)

app.listen(PORT, () => {
    console.log("server run.....");
})