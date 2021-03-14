const { Client } = require('discord.js')
const config = require('./config.json')

const client = new Client({
    partials: ['GUILD_MEMBER', 'CHANNEL', 'USER', 'REACTION']
})

client.on('ready', () => {
    console.log('Le bot est connecté !')

    client.user.setActivity('faire chier les gens', {
        type: 'STREAMING'
    })

    client.on('message', (message) => {
        if (message.content === 'menfou') {
            message.reply('senfou')
            .catch(console.error)
        }
    })

    client.on('message', message => {
        if (message.content === 'quoi') {  
          message.channel.send('feur');
        }
      }); 

    client.on('message', (message) => {
        if (message.content === 'Quoi') {
            message.reply('feur')
            .catch(console.error)
        }
    })

    client.on('message', (message) => {
        if (message.content === 'QUOI') {
            message.reply('feur')
            .catch(console.error)
        }
    })

    client.on('message', (message) => {
        if (message.content === 'pourquoi') {
            message.reply('feur')
            .catch(console.error)
        }
    })
    
    client.on('message', message => {
        if (message.content === 'ping') {  
          message.channel.send(`🏓La latence est de ${Date.now() - message.createdTimestamp}ms. La latence de l'API est de ${Math.round(client.ws.ping)}ms`);
        }
      });

      client.on('message', message => {
        if (message.content === 'pingue') {  
          message.channel.send('feur');
        }
      }); 
      
      client.on('message', message => {
        if (message.content === 'feur') {  
          message.channel.send('tg')
        }
      });

      client.on('message', message => {
        if (message.content === '!telecharge vincent') {  
          message.channel.send('impossible, fichier trop lourd');
        }
      }); 

      client.on('message', message => {
        if (message.content === '02 existe ?') {  
          message.channel.send('gros puceau');
        }
      }); 

      client.on('message', message => {
        if (message.content === '002 existe') {  
          message.channel.send('pas');
        }
      }); 

      client.on('message', message => {
        if (message.content === 'zero two existe') {  
          message.channel.send('pas');
        }
      }); 
      
      client.on('message', message => {
        if (message.content === 'tg') {  
          message.channel.send('Ton groooos cul laaaaa');
        }
      }); 

      client.on('message', message => {
        if (message.content === 'sexe') {  
          message.channel.send('tes pd ?');
        }
      }); 

      client.on('message', message => {
        if (message.content === 'bbgif') {  
          message.channel.send('gros degeulasse');
        }
      }); 

      client.on('message', message => {
        if (message.content === 'bbhentai') {  
          message.channel.send('Tu te branle sur des meufs qui existent pas mdrrr');
        }
      }); 

      client.on('message', message => {
        if (message.content === 'tu préfères le chocolat ou les noirs ?') {  
          message.channel.send('On peut arreter avec cette question la ? keske cest cette question ??');
        }
      }); 

      client.on('message', message => {
        if (message.content === 'ton fils est chauve') {  
          message.channel.send('Et toi es ce que tu serais pas complétement stupide ? Car moi jai pas de fils ssssprrrrrr');
        }
      }); 

      client.on('message', message => {
        if (message.content === 'gros puceau') {  
          message.channel.send('gros taré hmmmhmhmhmhmhm');
        }
      }); 

      client.on('message', message => {
        if (message.content === 'nouveau teeshirt') {  
          message.channel.send('tiens mes nouveaux tee-shirt Ah batard tu fume ??? dispo direct sur https://www.lacrim.store maggle ');
        }
      }); 

      client.on('message', message => {
        if (message.content === 'bbdick') {  
          message.channel.send('T pd ?');
        }
      }); 

      client.on('message', message => {
        if (message.content === 't pd ?') {  
          message.channel.send('et alors ? tes homophobe ?');
        }
      }); 

      client.on('message', message => {
        if (message.content === 'zero toux') {  
          message.channel.send('PAS MALADE 🤣🤣🤣🤣🤣🤣🤣👌👌👌👌👌👌👌👌👌👌');
        }
      });

        client.on('message', message => {
        // If the message is "what is my avatar"
        if (message.content === 'montre ma grosse tete') {
          // Send the user's avatar URL
          message.reply(message.author.displayAvatarURL());
        }
      });
      
      


    }); 


client.login(config.token)


