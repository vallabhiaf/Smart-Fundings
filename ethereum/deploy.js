
//onlyconsidered about CampaignFactory
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
//call from the directory
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'sphere deny swallow vivid symbol robot pizza remember panel tube mesh cruise',
  'https://rinkeby.infura.io/v3/3b8defe1efdb4d668b2bbb50a9d16807'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    //json is in build
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
