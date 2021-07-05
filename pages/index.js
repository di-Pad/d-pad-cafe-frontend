import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import LandingButton from '../components/LandingButton'; //TODO: swap Links with LandingButton and solve <a> reference inheritance problem
import Button from '../components/Button';
import ConnectWallet from '../components/ConnectWalletModal';
import QRModalWithRouting from '../components/QRModalWithRouting';
import Link from 'next/link';

export default function Home() {
  const networkIcon = "/cluster-data.png";
  const fundsIcon = "/funds.png";
  const serverIcon = "/database-server.png";
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [showQRModal, setShowQRModal] = useState(false);
  const showNewQRModal = () => {
    setShowQRModal(!showQRModal);
};

const closeQR = () => {
  setShowQRModal(!showQRModal);
  toggleModal();
}

const modalText = [
  'Scan with your ',
  <a href="" key={1} className="underline text-blue-600 hover:text-blue-400 visited:text-purple-400" >SkillWallet App</a>,
  ' to login to your community.'];

  return (
    <div className="container">
      <Head>
        <title>d-Pad Cafe</title>
        <link rel="icon" href="/d-pad-logo.png" />
      </Head>

      <main className="landing-main">
        <div className="landing-sidebar">
          <p><b>d-Pad Café</b> lets you boostrap a free, self-governed community - 
            with native <span className="heavy">Self-Sovereign ID</span> (SSID) and a <span className="heavy">truly fair
            tokenomics for your protocol</span>
          </p>

          <Image src="/d-pad-logo.png" alt="d-pad logo" width="40" height="40"></Image>

          <p>Automate a <b>fair token launch</b> and/or <b>set a Native 
            Profit-sharing model</b> to split revenues with your protocol&#39;s
            participants (you included!)
          </p>
        </div>

        <div className="landing-content">
          <div className="connect-wallet-container">
            <Button onClick={toggleModal} enable="true" className="connect-wallet">
              <a className="flex items-center justify-center space-x-4 text-l">
                <span>Connect Wallet</span>
              </a>
            </Button>
          </div>

          <div className="buttons">
            <div className="buttons-top-row">
              <Link href='/integrate' passHref>
                <div className="landing-button-container">
                  <a>
                  <div className="landing-button-text">
                      <h2 className="heavy">Integrate</h2>
                      <p>SkillWallet Auth</p>
                  </div>
                  <Image src={networkIcon} alt="SkillWallet Auth" width="40" height="40"/>
                  </a> 
                </div>
              </Link>
              <Link href='design' passHref>
                <div className="landing-button-container">
                  <a>
                  <div className="landing-button-text">
                      <h2 className="heavy">Design</h2>
                      <p>Token Agreement</p>
                  </div>
                  <Image src={fundsIcon} alt="Token Agreement" width="40" height="40"/>
                  </a> 
                </div>
              </Link>
            </div>
            
            <div className="buttons-bottom-row">
              {/* <Link href='/web3-native' passHref> */}
                <div className="landing-button-container" onClick={() => showNewQRModal()}>
                  <a>
                  <div className="landing-button-text">
                      <h2 className="heavy">Web3 Native</h2>
                      <p>Profit-Sharing Model</p>
                  </div>
                  <Image src={serverIcon} alt="Profit-Sharing Model" width="40" height="40"/>
                  </a> 
                </div>
              {/* </Link> */}
            </div>
          </div>
          { showModal ? <ConnectWallet key={'connect'} toggleModal={toggleModal} /> : null}
        </div>
      </main>
      { showQRModal
            ? <QRModalWithRouting
                key={'qr'}
                closeOnClick={closeQR}
                modalText={modalText}
                // qrCodeObj={
                //     { nonce }
                // } 
                />
            : null}
    </div>
  )
}