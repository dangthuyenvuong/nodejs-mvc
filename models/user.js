module.exports = async function(){
    if(!global.User){
        const user = await require('../core/connect_database')('user');
        global.User = user;
    }
    

    // return {
    //     get: user.find,
    //     insert: user.insertOne,
    //     delete: user.delete
    // }
}

