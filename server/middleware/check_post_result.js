export default function checkBody(req,res,next){
    const result = req.body
    if(!result){
        return res.status(400).json({error:"you must send a value"})
    }
    const resultKeys = Object.keys(result)
    if(!(resultKeys.includes("score"))|| resultKeys.length > 1){
        return res.status(400).json({error:"this keys not valid!"})
    }
    next()
}