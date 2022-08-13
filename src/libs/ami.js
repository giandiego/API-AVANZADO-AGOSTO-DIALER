import config from '../config';
import AsteriskManager from 'asterisk-manager';

const AMI = new AsteriskManager(config.amiPort,config.amiHost,config.amiUser,config.amiPass,true);
AMI.keepConnected();

//console.log(AMI);

export default AMI;