/**
 * MessagesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    enviarMensajeWS: function(req, res) {
        try {
          mensajeWhatsAppService.sendWs("Hola Marvin!")
          console.log("TERMINO Se envio WS");
          return res.ok("TERMINO Se envio WS");
        } catch (err) {
            if (err) {
              return res.serverError(err);
            }
            return res.serverError(sails.__('Error al enviar mensaje de WhatsApp'));
        }
    },
    enviarMensajeWSConImagen: function(req, res) {
      try { 
        var mensaje = 'Hola Marvin, te envio una imagen!'
        var urlImagen = 'https://i.pinimg.com/originals/e2/17/8f/e2178f3f81ea719f5bd8253d4025cd97.jpg';
        mensajeWhatsAppService.sendWsNormalImagen(mensaje,urlImagen)
        console.log("TERMINO Se envio WS con imagen");
        return res.ok("TERMINO Se envio WS con imagen");
      } catch (err) {
          if (err) {
            return res.serverError(err);
          }
          return res.serverError(sails.__('Error al enviar mensaje de WhatsApp'));
      }
    },
    enviarMensajeWSSoloVideo: function(req, res) {
      try {
        var urlVideo = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4';
        mensajeWhatsAppService.sendWsSoloVideo(urlVideo)
        console.log("TERMINO Se envio WS solo video");
        return res.ok("TERMINO Se envio WS solo video");
      } catch (err) {
          if (err) {
            return res.serverError(err);
          }
          return res.serverError(sails.__('Error al enviar mensaje de WhatsApp'));
      }
    },
};

