import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x5152215b9fde6535AFaC7a7f3b8eaF783286b975"
);

export default instance;
