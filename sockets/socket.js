const {io} = require ('../index');


//mensajes io de socket.io
io.on("connection", client => { 
    console.log('Cliente conectado :D'); 
    client.on('disconnect', () => { 
        console.log('Cliente desconectado :(')});
    client.on('message', ( payload ) => {
      console.log('Mensaje', payload);
      io.emit('message', {admin: 'Nuevo Mensaje'});
    });
 });
