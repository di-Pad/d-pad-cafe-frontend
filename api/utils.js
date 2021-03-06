import { pushJSONDocument } from '../api/textile.hub';

export const template = {
  'open-source': 1,
  'art': 2,
  'local': 3
}


export const useJoinCommunity = () => {

    async function joinCommunity(community) {
      console.log(localStorage);

      const skillOne = localStorage.getItem('skillOne');
      const skillTwo = localStorage.getItem('skillTwo');
      const skillThree = localStorage.getItem('skillThree');
      const header = localStorage.getItem('header');
      const image = localStorage.getItem('imageUrl');
    //   const skillsJson = JSON.parse(skills);

    //   const username = localStorage.getItem('username');
    //   const skillsFormated = {
    //     skills: [
    //       {
    //         name: skillsJson.skill1.skillName,
    //         value: skillsJson.skill1.level
    //       },
    //       {
    //         name: skillsJson.skill2.skillName,
    //         value: skillsJson.skill2.level
    //       },
    //       {
    //         name: skillsJson.skill3.skillName,
    //         value: skillsJson.skill3.level
    //       }
    //     ]
    //   };
      const metadataJson = {
        // name: `${username}'s SkillWallet`,
        description: "Universal, self-sovereign IDs tied to skills & contributions rather than personal data.",
        image: image,
        // properties: {
        //   username,
        //   skills: skillsFormated.skills
        // },
        properties: header,
        skillOne,
        skillTwo,
        skillThree
      }
      console.log(metadataJson);

      const url = await pushJSONDocument(metadataJson)
      console.log(url);

  
    //   const displayName1 = skillNames.indexOf(skillsFormated.skills[0].name);
    //   const displayName2 = skillNames.indexOf(skillsFormated.skills[1].name);
    //   const displayName3 = skillNames.indexOf(skillsFormated.skills[2].name);
    //   const totalDitos = '2222';
  
    //   console.log('skillsFormated', skillsFormated);
    //   const tokenId = await joinCommunityContract(
    //     community.address,
    //     displayName1,
    //     skillsFormated.skills[0].value,
    //     displayName2,
    //     skillsFormated.skills[1].value,
    //     displayName3,
    //     skillsFormated.skills[2].value,
    //     url,
    //     totalDitos,
    //   );
    //   localStorage.setItem('credits', totalDitos);
    //   localStorage.setItem('tokenId', tokenId);
      
    // return tokenId;
    }
    joinCommunity();
  
    // return useMutation(joinCommunity, { throwOnError: true });
  };

  export const getSkillWalletNonce = async () => {
    const response = await fetch('https://api.skillwallet.id/api/skillwallet/-1/nonces?action=1', {
        method: 'POST'
    })
    const nonce = await response.json();
    return nonce.nonce;
};