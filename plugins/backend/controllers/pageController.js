
const fs = require('fs')
const path = require('path');

module.exports = {
    index: function (req, res, next) {
        let page = req.params.page || 'index';

        let pageDir = path.join(backend_view, '/page/' + page + '.pug');
        console.log(fs.existsSync(pageDir))

        if (fs.existsSync(pageDir)) {
            res.render(pageDir)
        } else {
            next();
        }
    }
}
