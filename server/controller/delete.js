const mongodb = require('mongodb');
const dbConnect = require('../database/mongodb');

const deletedata = async(req, res) =>{
    console.log("In the delete function");
    console.log(req)
    let data = await dbConnect();

  
    let id = req.params._id;
    console.log(id);
    console.log(typeof id);

    //Deleting by id  
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params._id)})
    
    if(result.deletedCount === 1){
        console.log("Successfully deleted one document");
        res.send("Deleted successfully");
    }
    else{
        console.log("No documents deleted");
        res.send("Document was not deleted");
    }
    //Deleting by name
    // let name = req.params.name;
    // let result = await data.deleteOne({name:req.params._id})
    console.log(result);
    
    
};

module.exports = {deletedata };