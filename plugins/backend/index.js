


module.exports = function(app){
    app.use('/' + process.env.ADMIN_URL, require('./routers/page'));
}