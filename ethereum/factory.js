import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(campaignFactory.interface),
	'0x9430a2779417def70530E5965cE9AfeEEA1FfD22'
);

export default instance;
