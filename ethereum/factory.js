import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xf2Af215663E8335d6D606b8D1298765118060638'
);

export default instance;
