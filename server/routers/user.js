import express from 'express';
import { updateUser, createUser, deleteUser, getUser } from '../controllers/user.js';
import { UserModel } from '../models/UserModel.js';
 import { jwt } from 'jsonwebtoken';


const router = express.Router();
//http://localhost:5000/user
router.get('/:userid',async (req,res)=>{
    const user = await getUser(req.params.userid)
    res.send(user);
})
router.post('/', async(req,res) =>{
    const user = await createUser(req.body)
    res.send(user);
})
router.put('/', async(req,res) =>{
    const user = await updateUser(req.body)
    res.send(user);
});
router.delete('/:userid',async(req,res)=>{
    const user = await deleteUser(req.params.userid)
    res.send(user);
});
router.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { fullname, usename, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && fullname && usename)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await UserModel.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await UserModel.create({
        fullname,
        usename,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });

export default router;