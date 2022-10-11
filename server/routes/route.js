const express = require('express');
const router = express.Router();

const createfile = require('../controller/create');
const readfile = require('../controller/read');
const updatefile = require('../controller/update');
const deletefile = require('../controller/delete');

router.get('/read', readfile.readdata);

router.post('/create',createfile.createdata);

router.put('/update/:_id',updatefile.updatedata);

// router.delete('/delete/:name',deletefile.deletedata);
router.delete('/delete/:_id',deletefile.deletedata);


// Added router code here

const services = require("../services/render");

// 
// @description Root Route
// @method GET /
// 
router.get('/', services.homeRoutes);

// 
// @description add student
// @method GET /create
// 
router.get('/create', services.add_student);


// 
// @description for update student
// @method GET /update
// 
router.get('/update',services.update_student);


module.exports = router;

