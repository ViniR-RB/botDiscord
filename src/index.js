const { Client, GatewayIntentBits } = require ('discord.js');
const { config } = require ('dotenv');


config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const TOKEN  = process.env.TOKEN

client.on('ready', () => {
	console.log(`${client.user.tag} logou`)
})

client.on('messageCreate', (message) => {
	if(message.content === 'Teste'){
		message.reply('Eae Eliás');
	}
})
client.login(TOKEN);
