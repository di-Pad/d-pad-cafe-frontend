export const getSkillWalletNonce = async () => {
    const response = await fetch('https://api.skillwallet.id/api/skillwallet/-1/nonces?action=1', {
        method: 'POST'
    })
    const nonce = await response.json();
    return nonce.nonce;
};