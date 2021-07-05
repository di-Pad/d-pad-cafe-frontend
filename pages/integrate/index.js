import Image from 'next/image';
import { useState } from 'react';
import { createPartnersAgreement, validateMumbaiNet } from '../../api/contracts';
import { openNotification } from "../../utils/common-functions";
import VerifyOwnershipModal from "../../components/VerifyOwnershipModal";

const Integrate = () => {
    const [showModal, setShowModal] = useState(false);
    let userContractAddress = '';

    const toggleModal = (address) => {
        userContractAddress = address;
        setShowModal(!showModal)
    };

    const createAgreement = async () => {
        console.log('creating partners agreement....');
        const isMumbai = await validateMumbaiNet();
        if (!isMumbai) {
          openNotification(
            "Transaction Failed!",
            `Please switch to Mumbai network before proceeding.`,
            false
          );
          return;
        }
        const newAgreement = await createPartnersAgreement(userContractAddress);
        console.log(newAgreement);
        return newAgreement;
    }

    return (
    <div className="container">

      <main className="landing-main">
        <div className="landing-sidebar">
          <h2>Welcome to your<span className="heavy"> Partner Agreement!</span></h2>

          <Image src="/d-pad-logo.png" alt="d-pad logo" width="40" height="40"></Image>

          <p>In just two steps, you will integrate a <b>universal, sybil-resistant login</b>
             for your users - and automate <b>an internal, mathematically-fair Tokenomics</b>
             for your community.
          </p>
        </div>

        <div className="integrate-content">
          <div>
            <h2 className="heavy">Partner&#39;s Agreement</h2>
            <h4>Select the template that best represents your project / protocol.</h4>
          </div>

          <div className="integrate-template-content">
            <div className="integrate-project-types">
                <div className='white-card'>
                    <div className="top-card">
                        <Image className="image-7" src='/opensource-defi-black.png' alt="card-logo" width="40" height="40"/>

                        <div className="title-white-card raleway-bold-alto-22px">
                            <>
                        Open-Source & DeFi
                            </>
                        </div>
                    </div>

                    <div className="description-white-card raleway-normal-alto-18px">
                        For researchers & web3, open-source teams, that innovate in a liberal fashion - for a more sustainable, meritocratic world.
                    </div>

                    <Image className="line-26" src='/geometric-card-line-break.png' alt="line" width="40" height="2"/>
                </div>

                <div className="white-card">
                    <div className="top-card">
                        <Image className="image-7" src='/opensource-defi-black.png' alt="card-logo" width="40" height="40"/>

                        <div className="title-white-card raleway-bold-alto-22px">
                            <>
                        Art, Events & NFTs
                            </>
                        </div>
                    </div>

                    <div className="description-white-card raleway-normal-alto-18px">
                    Art movements, writers & creatives of all kind who use Art & provable ownership for purer forms of human interaction.
                    </div>

                    <Image className="line-26" src='/geometric-card-line-break.png' alt="line" width="40" height="2"/>
                </div>

                <div className="white-card">
                <div className="top-card">
                    <Image className="image-7" src='/opensource-defi-black.png' alt="card-logo" width="40" height="40"/>

                    <div className="title-white-card raleway-bold-alto-22px">
                        <>
                    Local Projects & DAOs
                        </>
                    </div>
                </div>

                <div className="description-white-card raleway-normal-alto-18px">
                From support for people in need, to innovative local hubs to get together & create something greater than oneself.
                </div>

                <Image className="line-26" src='/geometric-card-line-break.png' alt="line" width="40" height="2"/>
                </div>
            </div>

            <div className="bootstrap-button">
                <p>Bootstrap your Community Economy</p>
            </div>

            <div className="integrate-button-panel">
                <button>
                Start from Scratch
                </button>

                <button onClick={toggleModal}>
                Import your Contract
                </button>
            </div>

            <button className="integrate-deploy" 
            // onClick={createAgreement()}
            // 'window' is undefined when I call Mumbai
            >
                Sign & Deploy 🚀
            </button>

          </div>
        </div>
      </main>
      { showModal ? <VerifyOwnershipModal key={'verify'} toggleModal={toggleModal} /> : null}
    </div>
    )
}

export default Integrate;