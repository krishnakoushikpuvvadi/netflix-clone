import express from 'express';
import movieRoutes from "./routes/movieRoutes.js";
import { protectRoute } from './middleware/protectRoute.js';
import authRoutes from "./routes/authRoutes.js";
import tvRoutes from "./routes/tvRoutes.js";
import searchRoutes from "./routes/searchRoutes.js"
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from "path";
 


const app = express();




const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());



app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie",protectRoute,movieRoutes);
app.use("/api/v1/tv",protectRoute,tvRoutes);
app.use("/api/v1/search",protectRoute,searchRoutes);


if(ENV_VARS.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));


app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
})
}



app.use(express.json());

app.listen(PORT,()=>{
    console.log("server started at http://localhost:"+PORT);
    connectDB();
});


