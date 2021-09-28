import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import user from './routers/user.js';
import mongoose from 'mongoose';


const app = express();
const PORT =  process.env.prort || 5000;
const URI=
 'mongodb+srv://admin:minhchien123@cluster0.byj5q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
 


// app.use(bodyParser.json({limit:'30mp'}));
// app.use(bodyParser.urlencoded({extended:true, limit:'30mp'}));
app.use(bodyParser.json())
app.use(cors(
      
));
app.use('/posts', posts);
app.use('/user', user);


mongoose
    .connect(URI, { useNewUrlParser:true, useUnifiedTopology:true })
    .then(()=>{
        console.log('connect to db');
        app.listen(PORT, ()=>{
            console.log(`Sever is running on port ${PORT}`);
        });
})
.catch((err) => {   
    console.log('err', err);
});

     