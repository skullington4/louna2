const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken,
  getAllUsers,
  getUser
};

async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    const allButMe = users.filter(user => user.name != req.user.name)
    res.json(allButMe);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getUser(req, res) {
  try{
    const aUser = await User.findById(req.params.id);
    res.json(aUser)
  }  catch(err) {
    res.status(400).json(err);
    } 
}

async function create(req, res) {
  try {
    // Add the user to the db
    console.log(req.body);
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email});

    if(!user) throw new Error();

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json("Bad Credentials");
  }
}

function checkToken(req, res) {
  // Verify middleware is doing its job
  console.log('req.user', req.user);
  res.json(req.exp);
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}