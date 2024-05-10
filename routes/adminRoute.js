const express = require("express");
const user = express();
const{getUser}=require('../controllers/getController');

const path = require('path');
const bodyParser = require('body-parser');

user.use(bodyParser.urlencoded({ extended:true }));
user.use(express.static(path.resolve(__dirname,'public')));

const multer = require('multer');

var uploader = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 500000 }
});

const adminController = require('../controllers/adminController');

user.post('/upload-file', uploader.single("file"), adminController.uploadFile);
user.get('/',getUser);
module.exports = user;