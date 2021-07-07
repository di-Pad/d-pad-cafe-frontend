import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPartnersAgreement, validateMumbaiNet } from '../../api/contracts';
import { openNotification } from "../../utils/common-functions";
import VerifyOwnershipModal from "../../components/VerifyOwnershipModal";
import PartnersAgreementTemplateOptions from '../../components/PartnersAgreementTemplateOptions';

const Integrate = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [templateOptions, setTemplateOptions] = useState(null);
    let userContractAddress = '';

    const toggleModal = (address) => {
        userContractAddress = address;
        setShowModal(!showModal)
    };

    const createAgreement = async () => {
        // console.log('creating partners agreement....');
        // const isMumbai = await validateMumbaiNet();
        // if (!isMumbai) {
        //   openNotification(
        //     "Transaction Failed!",
        //     `Please switch to Mumbai network before proceeding.`,
        //     false
        //   );
        //   return;
        // }
        // const newAgreement = await createPartnersAgreement(userContractAddress);
        // console.log(newAgreement);
        // return newAgreement;
        const el = document.getElementById('integrate-deploy');
        el.style={backgroundColor: "black", color: "white"};
    }

    useEffect(() => {
        const openSource = {
            imageSrc: '/opensource-defi-white.png',
            header: 'Open-Source & DeFi',
            description: 'For researchers & web3, open-source teams, that innovate in a liberal fashion - for a more sustainable, meritocratic world.'}
        const art = {
            imageSrc: '/opensource-defi-white.png',
            header: 'Art, Events & NFTs',
            description: 'Art movements, writers & creatives of all kind who use Art & provable ownership for purer forms of human interaction.'}
        const local = {
            imageSrc: '/opensource-defi-white.png',
            header: 'Local Projects & DAOs',
            description: 'From support for people in need, to innovative local hubs to get together & create something greater than oneself.'}

        if (selectedTemplate === 'open-source') {
            setTemplateOptions(openSource);
        } else if (selectedTemplate === 'art') {
            setTemplateOptions(art);
        } else if (selectedTemplate === 'local') {
            setTemplateOptions(local);
        }
    }, [selectedTemplate]);

    return (
    <div className="container">

      <main className="integrate-main">
        <div className="integrate-sidebar">
          <h2>Welcome to your <br></br><span className="heavy"> Partner Agreement!</span></h2>

          <Image src="/d-pad-logo.png" alt="d-pad logo" width="100" height="100"></Image>

          <p>In just two steps, you will integrate a <b>universal, sybil-resistant login </b>
             for your users - and automate <b>an internal, mathematically-fair Tokenomics </b>
             for your community.
          </p>
        </div>

        <div className="integrate-content">
          <div className="integrate-header">
            <h2 className="heavy">Partner&#39;s Agreement</h2>
            <h4>Select the template that best represents your project / protocol.</h4>
          </div>

          <div className="integrate-template-content">
            {templateOptions === null ? 
            <div className="integrate-project-types">
                <div className='template-card card-white' onClick={() => setSelectedTemplate('open-source')}>
                    <div className="top-card">
                        <Image className="image-7" src='/opensource-defi-black.png' alt="card-logo" width="40" height="40"/>

                        <div className="title-white-card raleway-bold-alto-22px">
                            <h3>Open-Source & DeFi</h3>
                        </div>
                    </div>

                    <div className="description-white-card raleway-normal-alto-18px">
                        For researchers & web3, open-source teams, that innovate in a liberal fashion - for a more sustainable, meritocratic world.
                    </div>

                    <Image className="line-26" src='/geometric-card-line-break.png' alt="line" width="40" height="2"/>
                </div>

                <div className="template-card card-white" onClick={() => setSelectedTemplate('art')}>
                    <div className="top-card">
                        <Image className="image-7" src='/opensource-defi-black.png' alt="card-logo" width="40" height="40"/>

                        <div className="title-white-card raleway-bold-alto-22px">
                            <h3>Art, Events & NFTs</h3>
                        </div>
                    </div>

                    <div className="description-white-card raleway-normal-alto-18px">
                    Art movements, writers & creatives of all kind who use Art & provable ownership for purer forms of human interaction.
                    </div>

                    <Image className="line-26" src='/geometric-card-line-break.png' alt="line" width="40" height="2"/>
                </div>

                <div className="template-card card-white" onClick={() => setSelectedTemplate('local')}>
                    <div className="top-card">
                        <Image className="image-7" src='/opensource-defi-black.png' alt="card-logo" width="40" height="40"/>

                        <div className="title-white-card raleway-bold-alto-22px">
                            <h3>Local Projects & DAOs</h3>
                        </div>
                    </div>

                    <div className="description-white-card raleway-normal-alto-18px">
                    From support for people in need, to innovative local hubs to get together & create something greater than oneself.
                    </div>

                    <Image className="line-26" src='/geometric-card-line-break.png' alt="line" width="40" height="2"/>
                </div>
            </div> :

            <PartnersAgreementTemplateOptions 
                headerImage= {templateOptions.imageSrc}
                header= {templateOptions.header}
                description={templateOptions.description}
            /> 
        }
            <div className="bootstrap-button">
                <p>Bootstrap your Community Economy</p>
            </div>

            <div className="integrate-button-panel">
                <button>
                Start from Scratch
                </button>

                <button onClick={toggleModal} className="importYourContract">
                Import your Contract
                </button>
            </div>

            <button className="integrate-deploy" id="integrate-deploy"
            onClick={createAgreement}
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