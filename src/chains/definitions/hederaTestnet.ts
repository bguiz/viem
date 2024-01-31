import { defineChain } from '../../utils/chain/defineChain.js'

export const hederaTestnet = /*#__PURE__*/ defineChain({
    id: 0x128,
    name: 'Hedera Testnet',
    network: 'hedera-testnet',
    nativeCurrency: {
        symbol: 'ℏ',
        name: 'tHBAR',
        decimals:  18,
    },
    rpcUrls: {
        default: {
            http: ['https://testnet.hashio.io/api'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Hashscan',
            url: 'https://hashscan.io/testnet'
        },
    },
    testnet: true,
})
