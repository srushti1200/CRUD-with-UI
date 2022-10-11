const dbConnect = require('../database/mongodb');
const mongodb =  require('mongodb');

const updatedata = async(req, res) => {
    console.log("in the update function");
    let data = await dbConnect();
    let id = req.params._id;
    console.log("Params.id", req.params._id);
    console.log("Body", req.body, "type: ", typeof(req.body));

    if(!req.body || Object.keys(req.body).length === 0){
        return res
          .status(400)
          .send({message:"Data to update cannot be empty"})
    }
    
    let result = await data.findOneAndUpdate(
        {name:req.body.name},
        {$set:req.body}
    );

    res.send("Result Update Successfuly");
};
module.exports = { updatedata };