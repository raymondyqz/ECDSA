const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');

const Address = {}
const PrivateK = {}
const balance = {}
for (let i=0; i<3; i++){
const ec = new EC('secp256k1');
const key = ec.genKeyPair();

const publicKey = key.getPublic().encode('hex');
Address[i] = String(SHA256(JSON.stringify(publicKey))).slice(-40);
PrivateK[i] = key.getPrivate().toString(16);
balance[Address[i]] = 100;
}

console.log('Address:\n')
for (let key in Address) {
console.log('(%d) %s (%d eth)', key, Address[key], balance[Address[key]])
}
console.log('\n\nPrivate Keys:\n')
for (let key in PrivateK) {
  console.log('(%d) %s', key, PrivateK[key])
}

