import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xcF987Bf7FAcdc11d3BECa2f3b830C65F02FE62b0'
);

export default instance;
