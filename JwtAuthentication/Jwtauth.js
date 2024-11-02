const jwt= require('jsonwebtoken')

const createToken = (userdata)=>{
    return jwt.sign(userdata,"12345",{expiresIn:300})
}

const verifyToken=(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]
    if(!token)
    {
        res.status(400).json({error:"unauthorized"})
    }
    const decoded = jwt.verify(token,'12345')
   
        req.user = decoded
    
    next()
    } catch (error) {
        res.status(400).json({error:"no token "})
    }
}

module.exports={createToken,verifyToken}