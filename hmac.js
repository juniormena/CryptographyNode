const crypto = require('crypto');

//HMAC

const hmac = crypto.createHmac('sha256', 'a secret');
hmac.update('some data to hash');

console.log(hmac.digest('hex'));

//speakeasy, qrcode librerias para hacer two factor authentication
