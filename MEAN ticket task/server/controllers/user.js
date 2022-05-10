import bcrypt from 'bcryptjs';
import  jwt  from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async(req, res) => {

    const { password } = req.body;
    const user=req.body.username;
    console.log(user)
    try {
        
        const existingUser = await User.findOne({username:user});
        console.log(existingUser)

        if(!existingUser) return res.status(404).json({message: "User doesn't exist."});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials."});

        const token = jwt.sign({usrname: existingUser.username, id: existingUser._id}, 'test', {expiresIn: '1h'});
 
        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(500).json({message: "Something went wrong!"});
    }
    
}

export const signup = async(req, res) => {
    

    try {
        console.log(req.body)
    
        const { firstName, lastName, username, password } = req.body;
        console.log(username)
        // const existingUser = await User.findOne({ username });
     
        // if(existingUser) return res.status(400).json({ message: "User Already Exists." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({username:username, password: hashedPassword, firstName: firstName, lastName: lastName});

        const token = jwt.sign({username: result.username, id: result._id}, 'test', {expiresIn: '1h'});

        res.status(200).json({result, token});
    } catch (error) {
            console.log(error)
        res.status(500).json({message: "Something went wrong!"})
        
    }
}
