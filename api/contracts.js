import { ethers } from 'ethers'
import { pushJSONDocument }  from '../utils/textile.hub';
import { generatePartnersKey } from './api';

var communityABI = require('../contracts/abi/ICommunity.abi.json').abi;
var partnersRegistryABI = require('../contracts/abi/PartnersRegistry.abi.json').abi;

const metadata = [
  {
    title: 'Open-Source & DeFi',
    description: 'For researchers & web3, open-source teams, that innovate in a liberal fashion - for a more sustainable, meritocratic world.',
    image: 'https://hub.textile.io/ipfs/bafkreiaks3kjggtxqaj3ixk6ce2difaxj5r6lbemx5kcqdkdtub5vwv5mi',
    properties: {
      template: 'Open-Source & DeFi',
    }
  },
  {
    title: 'Art, Events & NFTs',
    description: 'Art movements, writers & creatives of all kind who use Art & provable ownership for purer forms of human interaction.',
    image: 'https://hub.textile.io/ipfs/bafkreigxry2ojoqmfs5wo5ijyzkdsmsyb7yfcjokiegkkhokca2wiltsdu',
    properties: {
      template: 'Art, Events & NFTs',
    }
  },
  {
    title: 'Local Projects & DAOs',
    description: 'From support for people in need, to innovative local hubs to get together & create something greater than oneself.',
    image: 'https://hub.textile.io/ipfs/bafkreibaxbmskevzm6wk7gzmuahvzjghmal2lanlbjabnzn7i5posmehem',
    properties: {
      template: 'Local Projects & DAOs',
    }
  }

]

export const validateMumbaiNet = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const network = await provider.getNetwork();
  if (network.name !== 'mumbai') {
    return false;
  }
  return true;
}

export const createPartnersAgreement = async (template) => {
  console.log('createPartnersAgreement')
  if (!window.ethereum.selectedAddress) {
    await window.ethereum.enable()
  };

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const network = await provider.getNetwork();
  const signer = provider.getSigner();

  console.log(process.env.NEXT_PUBLIC_PARTNERS_REGISTRY_ADDRESS);
  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_PARTNERS_REGISTRY_ADDRESS,
    partnersRegistryABI,
    signer,
  );

  const jsonMetadata = metadata[template];
  jsonMetadata.properties.roles = [
    localStorage.getItem('skillOne'),
    localStorage.getItem('skillTwo'),
    localStorage.getItem('skillThree'),
  ];
  const url = await pushJSONDocument(jsonMetadata);
  console.log(url);

  let rolesCount = 2;
  if(localStorage.getItem('skillThree'))
    rolesCount = 3;

  console.log('calling the SC')
  console.log(url, template, rolesCount, localStorage.getItem('numberOfActions'), localStorage.getItem('contractAddress'))
  const createTx = await contract.create(
    url,
    template,
    rolesCount,
    localStorage.getItem('numberOfActions'), // number of Actions,
    localStorage.getItem('contractAddress'), // contract address
    100 // members,
  );

  console.log(createTx);


  const result = await createTx.wait();
  const { events } = result;
  console.log(events);

  const event = events.find(
    e => e.event === 'PartnersAgreementCreated',
  );

  const partnersAgreementAddress = event.args[0].toString();
  const communityAddress = event.args[1].toString();

  console.log('partnersAgreementAddress', partnersAgreementAddress)
  console.log('communityAddress', communityAddress)
  const key = await generatePartnersKey(communityAddress, partnersAgreementAddress);
  console.log('key', key);
  return key;
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