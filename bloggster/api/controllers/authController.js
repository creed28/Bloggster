import bcrypt from 'bcryptjs';
import { db } from '../db.js'
import jwt from 'jsonwebtoken';

export const register = (req, res) => {

  // Check for existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");

    // Hash password -> create user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Validate input
    if (req.body.username === '' && req.body.email === '' && req.body.password === '') {
      return res.status(400).json("Empty fields!");
    }

    if (req.body.email === '') {
      return res.status(400).json("Empty email field!");
    }
    
    if (req.body.username === '') {
      return res.status(400).json("Empty username field!");
    }
    
    if (req.body.username.length < 4) {
      return res.status(400).json("Username can't be less than 4 characters!");
    }
    
    if (req.body.password === '') {
      return res.status(400).json("Empty password field!");
    }

    if (req.body.password.length > 16) {
      return res.status(400).json("Password can't be more than 16 characters!");
    }

    if(req.body.password.length < 6){
      return res.status(400).json("Password can't be less than 6 characters!");
    }

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created!");
    });
  });
};

export const login = (req, res) => {

  //Check for existing user
  const q = 'SELECT * FROM users WHERE username = ?'

  db.query(q, [req.body.username], (err, data) => {
    if(err) return res.json(err);

    // Validate input
    if(req.body.username === '' && req.body.password === ''){
      return res.status(400).json("Empty fields!");
    }

    if (req.body.username === '') {
      return res.status(400).json("Empty username field!");
    } 

    if(req.body.password === ''){
      return res.status(400).json("Empty password field!");
    }

    if(data.length === 0) return res.status(404).json('User not found!');

    //Check for matching password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

    if(!isPasswordCorrect) return res.status(400).json('Wrong username or password!');

    const token = jwt.sign({id:data[0].id}, "jwtkey");
    const {password, ...other} = data[0];

    res.cookie("access_token", token, {
      httpOnly: true
    }).status(200).json(other);
  });
};

export const logout = (req, res) => {
    res.clearCookie('access_token' , {
      sameSite:'none',
      secure:true
    }).status(200).json("User has logged out!");
};