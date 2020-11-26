const socketIO = require('socket.io');

module.exports = function(server){
    console.log('aaaaaaaaaaaa')
    let io = socketIO(server);

    let users = {},
        hosts = {};

    io.sockets.on('connection', function (socket) {
        console.log('a user connected');

        socket.on('init', function (data) {
            console.log('aaaaaaaaaa')
            if (!(data.host in hosts)) {
                hosts[data.host] = {
                    collections: {},
                    users: {},
                }
            }

            if (!(data.uniqueId in users)) {
                users[data.uniqueId] = socket;
                socket.uniqueId = data.uniqueId;
            }
            socket.host = data.host;
            socket.join(data.host);

        })

        socket.on('push', function (data, callback) {

            let database = data.database;
            delete data.database;

            // data._id = Date.now();
            callback && callback(data);



            setTimeout(async () => {
               
                let collection = getModel(database);


                let [res, error] = await collection.insertOrUpdate(data)
                if (error == null) {
                    socket.in(socket.host).emit('child_added_' + database, data);
                    socket.emit('child_added_' + database, data);
                }
            })
        })

        socket.on('get_collection_data', async (data, callback) => {
            let collection = getModel(data.database);
            let [res] = await collection.find();

            callback(res);
        })


        socket.on('disconnect', function (data) {
            console.log('disconnect');

            if (!socket.uniqueId) return;
            delete users[socket.uniqueId];
        });
    });
}