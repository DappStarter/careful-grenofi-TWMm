require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth oven erosion hover kite olympic giggle'; 
let testAccounts = [
"0x82541a36fe29096bab0b59d268c3901b7c2a2d75b443bbd4c18d45b7794e8fe2",
"0xd1a0ff0a49c40e992cffe5f8785d868a1f82e3f808c23c6de7fb8ca4f1283e04",
"0x2d83e8bef665fa3433a5b7fb397ba6db567e2e3fafbbbbf2fc65fe58bd2512c9",
"0x2a95eb4229c66ec363375781139326eec5a785aa8e295b22e0c11e7af109ab6c",
"0xeabecc59092e3ae26d1dfaa377a5692fa431030589b3d4bd5fd575d65ff32ea8",
"0x8c5f114ca92ae420050990986fc14258804831f60c7b7b1c579310ffa1f1e3f3",
"0x65b455a80c8006d4eb251625e2cc6be61ac7a318895d42e821722aff791a6d04",
"0x2963c180c3c8b6e9197f6108e7dcaaf9c5dceba7236f89fee56c357edf24d049",
"0x40ce23e8966a664cef64ee65822ab658a8943e42f823d9e4e15f3fda1f37e65b",
"0xdbfde2a99848d4f80467a676fb099e078fa4279ddfc8e1d192ab65f8be2def9b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

