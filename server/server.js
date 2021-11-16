const server = require('http').createServer()
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

const onConnection = (socket) => {
  console.log('User connected');
  socket.on('message', (message)=> {
    io.emit('message', message)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
}

io.on('connection', onConnection)

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server ready. Port: ${PORT}`)
})