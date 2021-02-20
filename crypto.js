//Protecting password

const crypto = require('crypto');
const pbkdf2 = require('pbkdf2');
//const pbkdf2 = require('pbkdf2');

const password = 'password1';


//En aplicaciones reales es mejor usar la version asincrona
let variable = hashPassword(password);
console.log('esta es tu variable encriptada', variable)

console.log(comparePassword('holamundo', variable));


function hashPassword(password){
    const salt = crypto.randomBytes(256).toString('hex');
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
    return [salt, hashedPassword].join('$$');
}

function comparePassword(password, originalPassword){
    const salt = originalPassword.split('$$')[0];
    const originalHash = originalPassword.split('$$')[1];

    const hash =  crypto.pbkdf2Sync(password, salt, 10000, 512,'sha512').toString('hex');

    if(hash===originalHash){
        return true;
    }
    else{
        return false;
    }
}