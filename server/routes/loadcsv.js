import readCSV from '../utils/readcsv.js'
import express from "express"
const loadCsvRoute = express()

loadCsvRoute.get('/', async (req, res) => {
    try {
        const data = await readCSV('./db/terrorData.csv')
        const terrorDataList = data.slice(0,50)
        res.status(200).json({data:terrorDataList})

    } catch (err) {
        res.status(400).json({ error: err })
    }
})

export default loadCsvRoute


