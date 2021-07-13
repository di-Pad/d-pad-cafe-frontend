import React, { useState, useEffect } from 'react';
import QRModal from '../components/QRModal';
import NewAccountModal from '../components/NewAccountModal';
import { FaPlusCircle } from 'react-icons/fa';
import { getSkillWalletNonce } from '../api/utils';

const ConnectWalletModal = (props) => {
    const [showQRModal, setShowQRModal] = useState(false);
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [nonce, setNonce] = useState();

    const showNewQRModal = () => {
        setShowQRModal(!showQRModal);
    };

    const closeQR = () => {
        setShowQRModal(!showQRModal);
        props.toggleModal();
    }

    useEffect(() => {
        const getNonce = async () => {
            const nonce = await getSkillWalletNonce();
            setNonce(nonce);
        }
        getNonce();
    }, [])

    const modalText = [
        'Scan with your ',
        <a href="" className="underline text-blue-600 hover:text-blue-400 visited:text-purple-400" >SkillWallet App</a>,
        ' to login to your community.'];

    return (
        <div id="topDiv">
            <div id="modalWindow">
                <div className="modal-window-child">
                    <div className="wallet-header">
                        <img src="/wallet.svg"/>
                        <h2>Connect your wallet</h2>
                    </div>

                    <div className="wallet-modal-button">
                        <button
                            onClick={() => showNewQRModal()}>
                            <img src="/qr-code.svg"/>
                            <p>SkillWallet</p>
                        </button>
                    </div>
                </div>
            </div>
            { showQRModal
                ? <QRModal
                    key={'qr'}
                    toggleModal={showNewQRModal}
                    closeOnClick={closeQR}
                    modalText={modalText}
                    qrCodeObj={
                        { nonce }
                    } 
                    />
                : null}
        </div>
    );
}


export default ConnectWalletModal;