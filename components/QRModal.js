import React, {useEffect} from 'react';
import { QRCode } from 'react-qrcode-logo';

const QRModal = (props, {
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

    useEffect(() => {
        // const timeout = setTimeout(() => {
        //    props.closeOnClick();
        //  }, 5000);
       },[]);
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
                <div id="qrBackground">
                <QRCode
                value={JSON.stringify(props.qrCodeObj)}
                logoImage="/dark-dito.svg"
                logoWidth={140}
                logoHeight={140}
                bgColor="#E9F2D5"
                size={420}
                className="qr-code"
                />
                </div>

                <div id="joinModalText">
                    <p>{props.modalText}</p>
                </div>
                
                <div className="m-auto">
                    {/* DELETE THE BUTTON AFTER LONGPOLLING */}
                    <button 
                        className="modal-button"
                        onClick={props.closeOnClick}>Close
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default QRModal;