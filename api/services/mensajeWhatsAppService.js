require('dotenv').config();
const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const MY_PHONE_NUMBER = process.env.MY_PHONE_NUMBER;
const NUMBER_TWILIO = process.env.NUMBER_TWILIO;
const client = require('twilio')(ACCOUNT_SID,AUTH_TOKEN)
module.exports = {

    sendWsNormal: function(mensaje){
        client.messages
      .create({
         from: 'whatsapp:' + NUMBER_TWILIO,
         body: mensaje,
         to: 'whatsapp:' + MY_PHONE_NUMBER
       })
      .then(message => console.log(message.sid));
    },
    sendWsNormalImagen: function(mensaje,urlImg){
      client.messages
      .create({
        mediaUrl: urlImg,
        from: 'whatsapp:' + NUMBER_TWILIO,
        body: mensaje,
        to: 'whatsapp:' + MY_PHONE_NUMBER
      })
      .then(message => console.log(message.sid));
    },
    sendWsSoloVideo: function(urlVideo){
      client.messages
      .create({
        mediaUrl: urlVideo,
        from: 'whatsapp:' + NUMBER_TWILIO,
        to: 'whatsapp:' + MY_PHONE_NUMBER
      })
      .then(message => console.log(message.sid));
    }
}
