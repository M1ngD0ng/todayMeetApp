let currentMessageId = 1;

function createMessage(user, messageText){
    return {
    _id: currentMessageId++,
    text: messageText,
    createdAt: new Date(),
    user: {
      _id: user.userId,
      name: user.userName,
      avatar: "../public/images/bear.jpg",
    }
  };
}

function handleMessage(socket, users) {
    socket.on('message', messageText =>  {
        const user = users[socket.id];
        console.log(user)
        const message = createMessage(user, messageText);
        console.log(message);
        socket.broadcast.emit("message", message);
    });
}

module.exports = { handleMessage };