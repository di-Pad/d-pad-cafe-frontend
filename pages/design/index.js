<<<<<<< Updated upstream
=======
import Image from 'next/image';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { createPartnersAgreement, validateMumbaiNet } from '../../api/contracts';

>>>>>>> Stashed changes
const Design = () => {
    const [value, onChange] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [activeDistributionButton, setActiveDistributionButton] = useState('');
    const [activeProximityButton, setActiveProximityButton] = useState('');
    let userContractAddress = '';
    
    const toggleModal = (address) => {
        userContractAddress = address;
        setShowModal(!showModal)
    };

    const buttons = {
        distributionPhases: [
            {name: "1", value: "1", id: 1},            
            {name: "2", value: "2", id: 2},
            {name: "3", value: "3", id: 3},
        ],
        proximity: [
            {name: "Protocol", value: "Only to your Protocol", id: 1, imgSrc: '/network.svg', imgAlt: 'forked network'},
            {name: "Template", value: "To the same template", id: 2, imgSrc: '/network-4.svg', imgAlt: 'four network nodes connected together'},
            {name: "Skillwallet", value: "All SkillWallet holders", id: 3, imgSrc: '/network-globe-outline-badged.svg', imgAlt: 'globe with nodes connected to each other'},
        ]
    };

    const handleButtonClick = e => {
        const name = e.target.name;
        if (['1', '2', '3'].includes(name)) {
            setActiveDistributionButton(name);
        } else {
            setActiveProximityButton(name);
        }
    };

    const handleProfitSharing = async () => {
        console.log('profit sharing called!');
        // const isMumbai = await validateMumbaiNet();
        // if (!isMumbai) {
        //   openNotification(
        //     "Transaction Failed!",
        //     `Please switch to Mumbai network before proceeding.`,
        //     false
        //   );
        //   return;
        // }
        const newAgreement = await createPartnersAgreement();
        return newAgreement;
    };

    return (
<<<<<<< Updated upstream
        <div>design</div>
=======
        <div className="container">
  
        <main className="design-main">
          <div className="design-sidebar">
            <div className="user-header">
                <Image src="/d-pad-logo.png" alt="d-pad logo" width="40" height="40"></Image>
                <h4>_username_</h4>
            </div>

            <Image className="line-break" src='/geometric-card-line-break.png' alt="line" width="200" height="2"/>

            <div className="design-sidebar-buttons">
                <div className="pill">
                    <Image src="/overview-stats.svg" alt="d-pad logo" width="40" height="30"/>

                    <h4>Overview & Stats</h4>
                </div>

                <div className="pill contracts-pill">
                <Image src="/listed-contracts.svg" alt="d-pad logo" width="55" height="40"/>
                    <div className="listed-contracts">
                        <h4>Listed Contracts</h4>
                        <form>
                                <input placeholder="0x..." ></input>

                                <input placeholder="0x..." ></input>

                                <input placeholder="0x..." ></input>
                            </form>
                    </div>
                </div>

                <div className="pill">
                <Image src="/add-contract.svg" alt="d-pad logo" width="40" height="30"/>
                    <h4>Add Contract</h4>
                </div>

                <div className="pill">
                <Image src="/log-off.svg" alt="d-pad logo" width="40" height="30"/>
                    <h4>Log off</h4>
                </div>
            </div>
          </div>

          <div className="design-content">
            <h2 style={{textDecoration: "underline"}}>Token Distribution Agreement</h2>

            <p><b>d-Pad Café</b> is the <b>Fair LaunchPad</b> for your <u>Community or Governance Token</u>.  We use a 
            <b>Constant Flow Agreement</b> (CFA) and a <span className="heavy">Quadratic Distribution</span> model to measure 
            the <b>exact interactions that users had with your protocol</b> - so that you can reward your community fairly, 
            & bootstrap a sustainable Tokenomics for your protocol!</p>

            <div className="profit-sharing-agreement">
                <div className="profit-sharing-controls">
                    <div className="control-section">
                        <h3>Distribution Rate</h3>

                        <p>Tot. Tokens to distribute to your Users:</p>


                        <h3>Phases of Distribution</h3>
                        <p>In how many phases would you like to distribute your Token? No worries, we&#39;ll optimize it for
                            you, based on the Growth rate of your Community :)
                        </p>

                        <div className="distribution-rate-buttons">
                        {
                            buttons.distributionPhases.map(btn => {
                                const className= activeDistributionButton === btn.name ? "active" : "";
                                return (
                                    <button
                                    className={`${className}`}
                                    name={btn.name}
                                    value={btn.value}
                                    key={btn.id}
                                    onClick={handleButtonClick}>{btn.name}</button>
                                )
                            })
                        }
                        </div>
                    </div>

                    <div className="control-section">
                        <h3>Interactions&#39; Proximity Level</h3>

                        <p>Distribute your Token based on the proximity of the interactions to your protocol!</p>

                        {
                            buttons.proximity.map(btn => {
                                const className= activeProximityButton === btn.name ? "active" : "";
                                return (
                                    <button
                                    className={`proximity-button ${className}`}
                                    name={btn.name}
                                    value={btn.value}
                                    key={btn.id}
                                    disabled={btn.name === "Template" || btn.name === "Skillwallet" ? true : false}
                                    onClick={handleButtonClick}>
                                        <p>{btn.value}</p>
                                        <Image src={btn.imgSrc} alt={btn.imgAlt} width="20" height="20"/>
                                    </button>
                                )
                            })
                        }
                    </div>

                    <div className="control-section">
                        <h3>Contract Start Date</h3>

                        <Calendar 
                        onChange={onChange}
                        value={value}/>
                    </div>
                </div>

                <h3 style={{fontStyle: "underline", fontWeight: "bold"}}>Bootstrap your Profit-Sharing Community</h3>

                <div className="integrate-button-panel">
                    <button>
                        <p>Start from Scratch</p>
                        <Image  src='/coin-icon-black.svg' alt="white sheet of paper" width="30" height="30"/>
                    </button>

                    <button onClick={toggleModal} className="importYourContract">
                        <p>Import your Contract</p>
                        <Image  src='/coin-icon-white.svg' alt="black sheet of paper" width="30" height="30"/>
                    </button>
                </div>             

                <button className="profit-share" onClick={handleProfitSharing}>Start the Distribution 🚀</button>
            </div>

          </div>
        </main>
      </div>
>>>>>>> Stashed changes
    )
}

export default Design;