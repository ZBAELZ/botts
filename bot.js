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
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
}, 60000); // Cada 60 segundos

