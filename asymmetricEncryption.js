const crypto = require('crypto');

const sally = crypto.createDiffieHellman(2048);

const sallyKeys = sally.generateKeys();

const bob =  crypto.createDiffieHellman(sally.getPrime(), sally.getGenerator());

const bobKey = bob.generateKeys();

const sallySecret = sally.computeSecret(bobKey);

const bobSecret = bob.computeSecret(sallyKeys);



