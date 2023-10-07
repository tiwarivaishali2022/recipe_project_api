import express from "express";
import cors from "cors";
import mongoose from "mongoose";


import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";





const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

const URL = "mongodb+srv://tiwarivaishali2022:TANEB7kS5L21xeMU@recipes.oymel57.mongodb.net/recipes?retryWrites=true&w=majority";


mongoose.connect(
    URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
).then(() => console.log('mongoDB Connected!'));;


app.listen(3001, () => console.log("Server started"));
