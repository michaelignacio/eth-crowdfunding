import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x67A2BA390eAA778e8b4FA5A8A0c66E3Cacd6b180'
);

export default instance;
