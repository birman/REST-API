/** packages */

var cryptoJS = require("crypto-js");
const SECRET_KEY = 'F3VI6oPHvg';

exports.EncryptText = (textPlain) => {
    var textEncrypted = cryptoJS.AES.encrypt(textPlain, SECRET_KEY).toString();
    return textEncrypted;
}

exports.DecryptText = (textEncrypted) => {
    var bytes = cryptoJS.AES.decrypt(textEncrypted, SECRET_KEY);
    originalText = bytes.toString(cryptoJS.enc.Utf8);
    return originalText;
}
