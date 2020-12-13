const path = require('path');
global.backend_view = path.join(__dirname, 'views');

module.exports = function (app) {
    app.use('/' + process.env.ADMIN_URL, require('./routers/page'));
}