const dbConnect = require('../database/mongodb');

const createdata = async(req, res) =>{
    console.log("in the createdata method");
    let data = await dbConnect();

        console.log(req.body);
        let student = {
            name: req.body.name,
            dept : req.body.dept
        };
        console.log("Student data:::")
        console.log(student);
        console.log(req.body.name);
        let result  = await data.insertOne(req.body);
        
        res.redirect("/create");
    
    
};

module.exports = { createdata };
