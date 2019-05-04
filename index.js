const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '41043bbb',
  apiSecret: 'ZpmZMYYBA7WbI1ln'
});


nexmo.message.sendSms(
  '18062055196', '16502839153', 'yo',
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
 );