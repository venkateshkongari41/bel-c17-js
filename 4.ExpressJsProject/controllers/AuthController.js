const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

async function register(req, res) {

    const {username, password, email, age, gender} = req.body;


    // create a user model object 
    const userObject = UserModel({
        username,
        password: encryptPassword(password) ,
        email,
        age,
        gender
    })


    // talking to DB 

    try {
        const response = await userObject.save();
        res.status(201).json({
            message: "user created successfully",
            response
        })
    } catch(error) {
        res.status(500).json({
            message: "something went wrong",
            error
        })
    }


}


async function encryptPassword(plainTextPassword) {
    const saltRounds = await bcrypt.genSalt(10);
    const encryptedPassword = bcrypt.hashSync(plainTextPassword, saltRounds);
    return encryptedPassword
}

async function login(req, res) {

    const {username, password} = req.body;

    const user = await findUserByUserName(username);

    if(!user[0]) {
        res.status(400).json({
            message: "No user like this"
        })
    } else {
        // check for the password 
        const hashedPasword = user[0].password;
        const result = bcrypt.compareSync(password, hashedPasword);
        res.status(200).json({
            message: result,
        })
    }




    
    
}

async function findUserByUserName(username) {
    return await UserModel.find({ username: username })
}


module.exports = {
    register,
    login
}