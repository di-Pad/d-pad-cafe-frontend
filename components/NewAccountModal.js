import React from 'react';
import Image from 'next/image';
import { FaPlusCircle } from 'react-icons/fa';
import { createNewUser } from '../api/contracts';
import { openNotification } from "../utils/common-functions";

const NewAccountModal = (props, {
    display = 'block',
    position = 'fixed',
    zIndex = 2,
    left = 0,
    top = 0,
    width = '100%',
    height = '100%',
    overflow = 'auto',
    backgroundColor = 'rgba(0,0,0,0.8)'
}) => {
    
    const createNewUser = async () => {
        console.log('calling contract....');
        const isMumbai = await validateMumbaiNet();
        if (!isMumbai) {
          openNotification(
            "Transaction Failed!",
            `Please switch to Mumbai network before proceeding.`,
            false
          );
          return;
        }
        const newUser = await createNewUser();
    }

    const callContractFromMetamask = () => {
        console.log('calling from metamask....');
    }

    return (
    <div style={{ display, position, zIndex, left, top, width, height, overflow, backgroundColor}}>
        <div style={{
              backgroundColor: 'rgba(105,105,105, 0.85)',
              margin: '5% auto',
              padding:'20px',
              border: '1px solid #888',
              width: '50%',
              borderRadius: '25px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
        >
            {/* <span className="close">&times;</span> */}
            <div id="qrContainer">
                <div id="qrBackgroundNewUser">

                    <div className="wallet-modal-button new-account-button">
                        <button
                            onClick={() => callContractFromMetamask()}>
                            <Image src="/metamask.svg" alt="Metamask logo of a smiling fox" width="100" height="100"/>
                            <p>Inject from Metamask</p>
                        </button>
                        <button
                            onClick={() => createNewUser()}>
                            <Image src="/torus-new-user.svg" alt="Blue rectangle with a white letter-T" width="100" height="100"/>
                            <p>Create New Account</p>
                        </button>
                    </div>
                
                {/* <div className="m-auto">
                    // DELETE THE BUTTON AFTER LONGPOLLING 
                    <button 
                        className="modal-button"
                        onClick={props.closeOnClick}>Close
                    </button>
                </div> */}
            </div>
        </div>
    </div>
    </div>
    )
}

export default NewAccountModal;