const user = require('./Schema')
const{createToken}=require('./Jwtauth')

const Signup =async (req,res)=>{
    const data = req.body
    console.log(data);
    if (!data || Object.keys(data).length === 0) { // Check if data is empty or has no keys
        return res.status(400).json({ message: 'Please provide necessary data' });
    }
    try {
        const response = await user.create(data)
        return res.status(200).json(response)

    } catch (error) {
        console.log(error);
        return res.status(401).json({message:'internal server error'})
        }
}
const Login =async (req,res)=>{
    const {name,password} = req.body
    try {
        const User = await user.findOne({name})
        if(!User){
            return res.status(401).json({message:'User Not found'})
        }
        const ismatch= User.password===password
        if(!ismatch){
            return res.status(401).json({message:'password is incorrect'})
        }
        const payload = {
            name:User.name,
            email:User.emal
        }

        const token = createToken(payload)

        return res.status(200).json({Token:token})

    } catch (error) {
        return res.status(401).json({message:'internal server error'})
        }
}

const getall = async(req,res)=>{

    const data = await user.find()

    return res.status(200).json(data)
}
module.exports= {Signup,Login,getall}