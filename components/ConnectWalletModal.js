import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import QRModal from '../components/QRModal';
import NewAccountModal from '../components/NewAccountModal';
import { getSkillWalletNonce } from '../api/utils';

const ConnectWalletModal = (props) => {
    const [showQRModal, setShowQRModal] = useState(false);
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [nonce, setNonce] = useState();

    const showNewQRModal = () => {
        setShowQRModal(!showQRModal);
    };

    const showNewAccountModal = () => {
        setShowAccountModal(!showAccountModal);
    }

    const closeQR = () => {
        if (showQRModal) {
            setShowQRModal(!showQRModal);
        } else if (showAccountModal) {
            setShowAccountModal(!showAccountModal);
        }
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
        <a href="" key={1} className="underline text-blue-600 hover:text-blue-400 visited:text-purple-400" >SkillWallet App</a>,
        ' to login to your community.'];

    return (
        <div id="topDiv">
            <div id="modalWindow">
                <div className="modal-window-child">
                    <div className="wallet-header">
                        <Image src="/wallet-white.svg" alt="wallet icon" width="40" height="40"/>
                        <h2>Login with</h2>
                    </div>

                    <div className="wallet-modal-button">
                        <button
                            onClick={() => showNewQRModal()}>
                            <Image src="/sw-logo.svg" alt="a scan-able QR code" width="100" height="100"/>
                            <p>SkillWallet</p>
                        </button>
                        <button
                            onClick={() => showNewAccountModal()}>
                            <Image src="/plus-button-white.svg" alt="addition sign in a white circle" width="100" height="100"/>
                            <p>New User</p>
                        </button>
                    </div>
                </div>
            </div>
            { showQRModal
                ? <QRModal
                    key={'qr'}
                    closeOnClick={closeQR}
                    modalText={modalText}
                    qrCodeObj={
                        { nonce }
                    } 
                    />
                : null}
            { showAccountModal
                ? <NewAccountModal
                    key={'newAccount'}
                    closeOnClick={closeQR}
                    modalText={modalText}
                    />
                : null}
            {/* { showAccountModal
                ? <NewAccountModal
                    key={'newAccount'}
                    closeOnClick={closeQR}
                    modalText={modalText}
                    />
                : null} */}
        </div>
    );
}


export default ConnectWalletModal;