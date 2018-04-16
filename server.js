var express = require('express');
var scrypt = require("scrypt");
var nodemailer = require("nodemailer");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');

var path = require('path')

var app = express();

app.use(express.static(path.join(__dirname,'./client/dist')));

app.use(bodyParser.urlencoded({extends: true}));

// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);



// var server = app.listen(8000,function(){
//   console.log("App is running on port 8000!");
// })

var port = 8000;
app.set('port', (process.env.PORT || port));
var server = app.listen(app.get('port'), function () {
    console.log("App is running on port 8000!");
})

var io = require('socket.io').listen(server);

var users = [];
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here
    socket.on('login', function(data){
        var user_not_existed = true;
        var user = {
            info: data.user,
            id: socket.id,
        }
        for(var i=0; i < users.length; i++){
            if(users[i].id == user.id){
                user_not_existed = false;
            }
        }
        if(user_not_existed){
            users.push(user);
        }
        console.log(users)
        io.emit('online', {users:users});
    })

    socket.on('logout', function(data){
        var rest_user = users.filter(function(el){
            return el.info.id != data.user._id;
        })
        users = rest_user;
        io.emit('online',{users:users});
    })

    socket.on('disconnect', function(){
        console.log("dis id is: ", socket.id);
        var rest_user = users.filter(function(el){
            return el.id != socket.id;
        })
        users = rest_user;
        console.log(users.length)
        io.emit('online',{users:users});
    })
    socket.on('updatelike', function (data) { io.emit('updatelike', {}); })
  })