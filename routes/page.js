// const {Worker} = require('worker_threads')
// console.log(Worker)


const fs = require('fs');
var express = require('express');
const path = require('path');
var router = express.Router();
const pageController = require('./../controllers/PageController');

/* GET users listing. */
router.get('/:page?/:param?', function (req, res, next) {
    
    let page = req.params.page || 'index'

    let pageDir = path.join(__dirname , '../views/page/' + page + '.pug');
    if(fs.existsSync(pageDir)){
        
        let data = {};

        if(page in pageController){
            data = pageController[page](req, res) || {}
        }

        !data.title && (data.title = 'Page Title')
        res.render('page/' + page, data);
    }else{
        next();
    }

});

module.exports = router;
