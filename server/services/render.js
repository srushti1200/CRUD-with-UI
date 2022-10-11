const axios = require("axios");
const { response } = require("express");

exports.homeRoutes =(req, res)=>{   
    // Make a get request to read
    // res.render("index",{students:"response data"});

    axios.get('http://localhost:5000/read')
        .then(function(response){
            //console.log(response)
            res.render("index",{students:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
   
}


//create route
exports.add_student = (req,res) => {
    res.render('add_student');
}


//update route
exports.update_student = (req, res) => {
    res.render('update_student');
}
