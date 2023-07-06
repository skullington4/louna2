const Item = require('../../models/item');


module.exports = {
    create,

  };

//Write a controller that finds all messages from user == req.user and from == user
//Order it by date

async function create(req, res) {
  try{
    const createdItem = await Item.create(req.body);
    res.json(createdItem);
  }  catch(err) {
    res.status(400).json(err);
    } 
}
