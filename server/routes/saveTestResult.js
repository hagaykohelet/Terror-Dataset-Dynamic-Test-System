import express from 'express'
import fs from 'fs/promises'
import checkBody from '../middleware/check_post_result.js'
const resultRoute = express()

resultRoute.post('/', checkBody, async (req, res) => {
    try {
        const { score } = req.body
        const data = await fs.readFile('./db/playerScore.json', 'utf-8')
        const response = await JSON.parse(data)
        response[0] = { date: new Date(), score: score }
        await fs.writeFile('./db/playerScore.json', JSON.stringify(response, null, 2))
        return res.status(200).json({ msg: "score saved" })
    } catch (err) {
        return res.json({ error: err })
    }
})


export default resultRoute