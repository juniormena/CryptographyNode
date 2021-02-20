const crypto = require('crypto');

const algorithm = 'aes-256-cbc';

const password = 'asde280499';

const salt = crypto.randomBytes(32);

const key = crypto.scryptSync(password, salt, 32);

const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
const decipher = crypto.createDecipheriv(algorithm, key, iv);

//Data to be encrypted social security number
let ssn = '111-000-0000856';

cipher.update(ssn, 'utf8', 'hex');
encrypted= cipher.final('hex');

decipher.update(encrypted, 'hex', 'utf8');
let decrypted = decipher.final('utf8');

console.log('encrypted data',encrypted);
console.log('decrypted data', decrypted);

