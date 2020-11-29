// const {Worker} = require('worker_threads')
// console.log(Worker)

const fs = require('fs');
var express = require('express');
const path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/:page?', function (req, res, next) {
    
    let page = req.params.page || 'index'

    let pageDir = path.join(__dirname , '../views/page/' + page + '.pug');
    if(fs.existsSync(pageDir)){
        res.render('page/' + page, { title: 'Express' });
    }else{
        next();
    }
    


});

module.exports = router;
