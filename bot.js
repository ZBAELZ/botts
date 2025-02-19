const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'BELBUB.aternos.me', // Cambia esto por la IP del servidor
    port: 49279, // Puerto del servidor (por defecto 25565)
    username: 'sssssss', // Nombre del bot (cambia según necesites)
    auth: 'offline' // Para servidores cracked
});

bot.on('login', () => {
    console.log(`Bot ${bot.username} conectado`);
});

bot.on('error', (err) => {
    console.log(`Error: ${err}`);
});

bot.on('end', () => {
    console.log('El bot se ha desconectado');
});

setInterval(() => {
    bot.chat('.');  // El bot enviará un punto al chat
}, 60000); // Cada 60 segundos


const axios = require('axios');

const keepServerAlive = () => {
  setInterval(() => {
    axios.get('https://aternos.org/server/#RSP1kHPEEl0qME5J')  // Reemplaza con la URL de tu servidor de Aternos
      .then(response => {
        console.log("Solicitud exitosa, el servidor sigue activo.");
      })
      .catch(error => {
        console.error("Error al mantener el servidor activo:", error);
      });
  }, 5 * 60 * 1000);  // Enviar una solicitud cada 5 minutos
};

keepServerAlive();
