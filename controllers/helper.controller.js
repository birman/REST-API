/** packages */

var cryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const SECRET_KEY = 'F3VI6oPHvg';
const JWT_KEY = 'WinterIsComingGOT2019';

exports.EncryptText = (textPlain) => {
    var textEncrypted = cryptoJS.AES.encrypt(textPlain, SECRET_KEY).toString();
    return textEncrypted;
}

exports.DecryptText = (textEncrypted) => {
    var bytes = cryptoJS.AES.decrypt(textEncrypted, SECRET_KEY);
    originalText = bytes.toString(cryptoJS.enc.Utf8);
    return originalText;
}

exports.GenerateAuthToken = function (payload) {

    const token2 = jwt.sign(payload, JWT_KEY, {
        expiresIn: 1440
    });

    return token2;
}