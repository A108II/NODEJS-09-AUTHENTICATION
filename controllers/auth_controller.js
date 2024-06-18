const user_db = {
  users: require('../model/users.json'),
  setUsers: function(data){
    this.users = data;
  }
}

const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
  const {username, password} = req.body;
  if(!username || !password) return res.status(400).json({"Error message": "Please provide both username and password"});
  const userFound = user_db.users.find(item => item.username === username);
  if(!userFound) {
    return res.status(401).json({"Error": "Unauthorized user"});
  }
  const pwd_recognized = await bcrypt.compare(password, userFound.password);
  if(pwd_recognized){
    res.status(200).json({"Successful": `User ${username} logged in successfully`});
  }
  else{
    res.sendStatus(401)
  }
}

module.exports = {handleLogin};

