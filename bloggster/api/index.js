import express from 'express'
import postRoutes from './routes/postsRoute.js'
import authRoutes from './routes/authRoute.js'
import userRoutes from './routes/usersRoute.js'
import cookieParser from 'cookie-parser'
import multer from 'multer'

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/uploads');
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({storage});

app.post('/api/upload', upload.single('file'), function (req, res){
    const file = req.file;
    res.status(200).json(file.filename);
})

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Connected on port: ${port}!`);
});