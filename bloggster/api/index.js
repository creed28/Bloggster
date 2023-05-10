import express from 'express'
import postRoutes from './routes/postsRoute.js'
import authRoutes from './routes/authRoute.js'
import userRoutes from './routes/usersRoute.js'
import cookieParser from 'cookie-parser'

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Connected on port: ${port}!`);
});