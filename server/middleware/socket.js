const pool = require('../middleware/pool');
const messageHandler = require("../handlers/message.handler");

<<<<<<< HEAD
<<<<<<< HEAD
let currentUserId = 0;
=======
let currentUserId = 2;
>>>>>>> ad7b7fe7 (take data from db)
=======
let currentUserId = 0;
>>>>>>> 3366c2e7 (little change)
const users = {};

function createUserAvatarUrl() {
    const rand1 = Math.round(Math.random() * 200 + 100);
    const rand2 = Math.round(Math.random() * 200 + 100);
    return `https://placeimg.com/${rand1}/${rand2}/any`;
}
module.exports = (io) => {

    io.on('connection', socket =>  {
        console.log('today connected')
        console.log(socket.id);
        users[socket.id] = { userId: currentUserId++ };
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3366c2e7 (little change)
        socket.on("join", username => { // 회원가입할때 바로 디비에 저장할 예정 여기에선 안해도 됨
            // DB에 user 정보 저장
            users[socket.id].userName = username;
            users[socket.id].userEmail =
            users[socket.id].userAvatar = createUserAvatarUrl();
<<<<<<< HEAD
        })
        messageHandler.handleMessage(socket, users);
        // socket.on("message", message => {
        //     console.log(message)
        // })
=======
        socket.on("join", username => { //chatRoomScreen에서 join 하려고 했을때 (이제 사용 안함) test용
            // DB에서 useremail과 동일한 data를 찾고 username, url을 가져와서 객체에 저장
            users[socket.id].username = username;
            users[socket.id].avatar = createUserAvatarUrl();
            messageHandler.handleMessage(socket, users);
        })
>>>>>>> ad7b7fe7 (take data from db)
=======
        })
        messageHandler.handleMessage(socket, users);
        // socket.on("message", message => {
        //     console.log(message)
        // })
>>>>>>> 3366c2e7 (little change)
        socket.on("action", action => {
            switch(action.type){
                case "server/hello":
                    console.log("Got hello event", action.data);
                    socket.emit("action", {type: "message", data: "Good day!"});
                    break;
                case "server/join": //로그인할때
                    async function join() {
                        try {
<<<<<<< HEAD
<<<<<<< HEAD
                            console.log("Got join event", action.data); // action.data는 이메일
                            const query = `SELECT * FROM user WHERE user_email = "${action.data}"`
                            const result = await pool.queryParam(query);
                            console.log(result);
                            for (let i = 0; i < result.length; i++){
                                if (result[i].user_email === action.data) {
                                    users[socket.id].userId = result[i].user_id;
                                    users[socket.id].name = result[i].user_name;
                                    users[socket.id].userEmail = action.data;
                                    users[socket.id].avatar = createUserAvatarUrl();
                                }
                            }
                            const values = Object.values(users);
                            const onlyWithUsernames = values.filter(u => u.userEmail !== undefined);
=======
                            console.log("Got join event", action.data);
=======
                            console.log("Got join event", action.data); // action.data는 이메일
>>>>>>> 3366c2e7 (little change)
                            const query = `SELECT * FROM user WHERE user_email = "${action.data}"`
                            const result = await pool.queryParam(query);
                            console.log(result);
                            for (let i = 0; i < result.length; i++){
                                if (result[i].user_email === action.data) {
                                    users[socket.id].userId = result[i].user_id;
                                    users[socket.id].name = result[i].user_name;
                                    users[socket.id].userEmail = action.data;
                                    users[socket.id].avatar = createUserAvatarUrl();
                                }
                            }
                            const values = Object.values(users);
<<<<<<< HEAD
                            const onlyWithUsernames = values.filter(u => u.useremail === undefined);
>>>>>>> ad7b7fe7 (take data from db)
=======
                            const onlyWithUsernames = values.filter(u => u.userEmail !== undefined);
>>>>>>> 3366c2e7 (little change)
                            socket.emit("action", {
                                type: "users_online",
                                data: onlyWithUsernames
                            });
                            // break
                        } catch (e) {
                            throw e;
                        }
                    }
<<<<<<< HEAD
<<<<<<< HEAD
                    join()
=======
                    join();
>>>>>>> ad7b7fe7 (take data from db)
=======
                    join()
>>>>>>> 3366c2e7 (little change)
            }
        })
    })
}