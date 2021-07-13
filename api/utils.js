export const getSkillWalletNonce = async () => {
    const response = await fetch('https://api.skillwallet.id/api/skillwallet/-1/nonces', {
        method: 'POST'
    })
    const nonce = await response.json();
    console.log(nonce);
    return nonce;
};