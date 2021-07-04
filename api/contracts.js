import { ethers } from 'ethers'

const { communityABI } = require('../contracts/abi/ICommunity.abi.json');
const { partnersRegistryABI } = require('../contracts/abi/PartnersRegistry.abi.json');

export const validateMumbaiNet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    if (network.name !== 'mumbai') {
      return false;
    }
    return true;
  }

export const createPartnersAgreement = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    if (network.name !== 'mumbai') {
      return false;
    }
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
        '0x68565f98f7d565A3019ED6EB5dA921156Ff7ab10',
        partnersRegistryABI,
        signer,
      );

      const agreementEvent = await contract.create(
        'https://..',
        0,
        2,
        10,
        '0x68565f98f7d565A3019ED6EB5dA921156Ff7ab10',   //? partners contract address?
        5
      );

      return agreementEvent;
}

export const createNewUser = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    if (network.name !== 'mumbai') {
      return false;
    }
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
        '',
        communityABI,
        signer,
      );

      const newUser = await contract.joinNewMember(
        1,
        10,
        0,
        0,
        0,
        0,
        '', //uri... again - leave empty, don't have the textle part
        240
    );

    return newUser;
}