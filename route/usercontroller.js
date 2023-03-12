const db = require("../model/index");

const User = db.user;

const userRegister = async(req,res)=>{
    const {name, email, phone, password} = req.body
    try {
        if(!(name && email && phone && password)){
            return res.status(401).json("All input are required")
        }
     const userExist = await User.findOne({
        where: {email}
    })
        if(userExist){
            return res.status(409).json({message: "user already exist"})
        }
        const newUser = await User.create({name, email, phone, password})
        return res.status(201).json (newUser)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
    }
}

//Get all user 
const getAll = async(req,res)=>{
    try {
        const users = await User.findAll()
    return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

//find one by email

const userEmail = async(req, res) =>{
    const {email }= req.body;
    try {
        const userE= await User.findOne({
            where:{
                email:email
            },
            
        });
        return res.status(200).json(userE)
    } catch (error) {
        return res.status(500).json({message:error.message})  
    }
}

// Delete a user by id
const deleteUserById = async (req,res) => {
   const {id} = req.params;
    try {
        const userExistInDB = await User.findOne({
            where:{
                id:id
            }
        })
        if (!userExistInDB) {
            return res.status(404).json({
                error:"User not found"
            })
        }
        const user = await User.destroy({
            where:{
                id:id
            }
        })
        return res.status(200).json({
            message: "User deleted successfully"
        })
    } catch (error) {
     return res.status(500).json({message:error.message})   
    }
}

module.exports = {userRegister, getAll, userEmail, deleteUserById}