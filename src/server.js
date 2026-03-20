import express, { json } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';


dotenv.config();

const app = express();

app.use(json());

connectDB();

app.use("/", (req, res)=> {
   res.json({ message: "HOME PAGE" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`🚀 App start at http://localhost:${PORT}`)
})