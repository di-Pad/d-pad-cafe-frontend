import Image from 'next/image';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { createPartnersAgreement, validateMumbaiNet } from '../../api/contracts';

const Web3Native = () => {
    const [value, onChange] = useState(new Date());
    const [activeProfitButton, setActiveProfitButton] = useState('');
    const [activeDistributionButton, setActiveDistributionButton] = useState('');
    const [activeProximityButton, setActiveProximityButton] = useState('');
    let username = null;
    if (typeof window !== 'undefined' && localStorage.getItem("username") !== "undefined") {
        console.log(localStorage.getItem("username") === "undefined")
        username = localStorage.getItem("username");
    }
    
    
    const buttons = {
        profitPercentage: [
            {name: "10%", value: "10%", id: 1},
            {name: "30%", value: "30%", id: 2},
            {name: "50%", value: "50%", id: 3}
        ],
        distributionFrequency: [
            {name: "Weekly", value: "Weekly", id: 1},            
            {name: "Monthly", value: "Monthly", id: 2},
        ],
        proximity: [
            {name: "Protocol", value: "Only to your Protocol", id: 1, imgSrc: '/network.svg', imgAlt: 'forked network'},
            {name: "Template", value: "To the same template", id: 2, imgSrc: '/network-4.svg', imgAlt: 'four network nodes connected together'},
            {name: "Skillwallet", value: "All SkillWallet holders", id: 3, imgSrc: '/network-globe-outline-badged.svg', imgAlt: 'globe with nodes connected to each other'},
        ]
    };

    const handleButtonClick = e => {
        const name = e.target.name;
        if (['10%', '30%', '50%'].includes(name)) {
            setActiveProfitButton(name);
        } else if (['Weekly', 'Monthly'].includes(name)) {
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
        <div className="container">
  
        <main className="profit-main">
          <div className="profit-sidebar">
            <div className="user-header">
                <Image src="/d-pad-logo.png" alt="d-pad logo" width="55" height="40"></Image>
                <h4>{username ? username : "Please sign in..."}</h4>
            </div>

            <Image className="line-break header-line" src='/geometric-card-line-break.png' alt="line" width="300" height="2"/>

            <div className="profit-sidebar-buttons">
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

          <div className="profit-content">
            <h2 style={{textDecoration: "underline"}}>Native Profit-Sharing (PS) Agreement</h2>

            <p>Profit-sharing <b>is the single, most important step</b> towards <i>Progressive Decentralization and truly autonomous communities</i>. 
            The <b>d-Pad Cafe</b> makes it a 2-step process for you to kick-off an automated, Web3-Native-Profit-Sharing Agreement.
            Measure the exact interaction rate of each user/participant to your protocol, and let our
            <span className="heavy">Quadratic Distribution</span> model ensure a fair reward to anyone. You & your founding team included!</p>

            <div className="profit-sharing-agreement">
                <div className="profit-sharing-controls">
                    <div className="control-section distr">
                        <h3>Distribution Rate</h3>

                        <p>Tot. Profit (%) to share:</p>

                        <div className="bar-chart-first-container">
                        <input className="bar-chart-container" 
                        // value={20}
                        type="range"
                            // name="numberOfActions" onBlur={handleBlur} 
                            // onChange={handleChange} type="range" id="numberOfActions" value={values.numberOfActions} 
                            min="0" max="100"
                            ></input>

                            <div className="bar-chart-metrics">
                                <p>0</p>
                                <p>100</p>
                            </div>
                        </div>

                        <h3 className="frequency-h3">Frequency of Distribution</h3>
                        <p>How often would you like the Profit-Sharing distribution to happen? No worries, we&#39;ll optimize if for you,
                            based on the size & growth rate of your Community :)
                        </p>

                        <div className="distribution-rate-buttons">
                        {
                            buttons.distributionFrequency.map(btn => {
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

                    <div className="control-section proximity-buttons">
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

                <button className="deploy-button">
                    <p>Click to Deploy your Treasury Contract</p>
                    <Image src="/scatter-plot-outline-badged.svg" alt="d-pad logo" width="40" height="40"/>
                </button>                

                <button className="profit-share" onClick={handleProfitSharing}>Start Sharing 🚀</button>
            </div>

          </div>
        </main>
      </div>
    );
}

export default Web3Native;