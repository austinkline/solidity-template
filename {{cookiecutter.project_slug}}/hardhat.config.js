require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const fs = require('fs');

const config = JSON.parse(fs.readFileSync(".secret.json").toString().trim());

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {
            forking: {
                url: `https://eth-mainnet.alchemyapi.io/v2/${config.alchemy}`,
            }
        },
        rinkeby: {
            url: `https://eth-rinkeby.alchemyapi.io/v2/${config.alchemy}`,
            accounts: [config.rinkeby]
        },
        mainnet: {
            url: `https://eth-mainnet.alchemyapi.io/v2/${config.alchemy}`,
            accounts: [config.mainnet]
        }
    },
    etherscan: {
        apiKey: config.etherscan
    }
};