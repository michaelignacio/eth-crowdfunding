import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  0x9eec7d973660a2046577107DaB0E9D8d5BC4621E
);

export default instance;
