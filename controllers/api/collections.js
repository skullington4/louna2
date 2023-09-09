const Collection = require('../../models/collection');


module.exports = {
    create,

  };

//Write a controller that finds all messages from user == req.user and from == user
//Order it by date

async function create(req, res) {
  try{
    console.log(req.body)
    console.log(req.body.title)
    const createdItem = await Collection.create(req.body);
    res.json(createdItem);

  }  catch(err) {
    res.status(400).json(err);
    console.log(err)
    } 
}
