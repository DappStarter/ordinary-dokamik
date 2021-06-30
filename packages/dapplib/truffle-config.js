require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain mistake hidden arena fog story'; 
let testAccounts = [
"0x832565bd4994bb6294344f3f234af37a93eb5de52f9e3e4f9a323c5a16bbc28f",
"0x3e014423d0c9ab713fa9782987e8e6920352de72fca87b0a985fbf6077b745ba",
"0x3200aefc90eace4af1554e4eccf81da0f3b628f55c05904a178a32a511e5b580",
"0x764b03abb92378ccb99a4213cdce896c7e9d909483c8016ab3f31ac4f7dc8d78",
"0xe1368389b79578c6ffc73ade1cb37401b03790b27133648a5c2a1aa70398627a",
"0x668fc0276b5010a1be73440b836d917bf7c2480d123aa3ceebaa5b9643622544",
"0xcd470b5b0c5dc37eeb4580441f382e2967b942a9d96bd76e9f541f876fba6504",
"0x11d458123b5e3e1c856b7c63b99b68a9be7e3cb4b9e453db814636f231f40191",
"0x3c427133b5cc6b3212c52f836cbee33cb90fa502094c6f65f4bf36f795307819",
"0x28678a5a2238db99be49f4c60e98002380d20e9c94ee050044ce7748437ff71b"
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

