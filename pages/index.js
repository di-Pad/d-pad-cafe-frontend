import { useState } from 'react';
import Head from 'next/head';
import LandingButton from '../components/LandingButton';
import Button from '../components/Button';
import ConnectWallet from '../components/ConnectWalletModal';

export default function Home() {
  const networkIcon = "cluster-data.png";
  const fundsIcon = "funds.png";
  const serverIcon = "database-server.png";
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

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

          <img src="/d-pad-logo.png"></img>

          <p>Automate a <b>fair token launch</b> and/or <b>set a Native 
            Profit-sharing model</b> to split revenues with your protocol's
            participants (you included!)
          </p>
        </div>

        <div className="landing-content">
          <div className="connect-wallet-container">
            <Button onClick={toggleModal} enable={false} className="connect-wallet">
              <a className="flex items-center justify-center space-x-4 text-l">
                <span>Connect Wallet</span>
              </a>
            </Button>
          </div>

          <div className="buttons">

            <div className="buttons-top-row">
              <LandingButton 
                image={networkIcon}
                header="Integrate"
                subHeader="SkillWallet Auth"
                altText="SkillWallet Auth"
                />
              <LandingButton 
                image={fundsIcon}
                header="Design"
                subHeader="Token Agreement"
                altText="Token Agreement"
              />
            </div>
            <div className="buttons-bottom-row">
            <LandingButton
              image={serverIcon}
              header="Web3 Native"
              subHeader="Profit-Sharing Model"
              altText="Profit-Sharing Model"
            />
            </div>
          </div>
          { showModal ? <ConnectWallet key={'connect'} toggleModal={toggleModal} /> : null}
        </div>
      </main>
    </div>
  )
}