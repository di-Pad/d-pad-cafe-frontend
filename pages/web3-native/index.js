import Image from 'next/image';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

const Web3Native = () => {
    const [value, onChange] = useState(new Date());


    return (
        <div className="container">
  
        <main className="landing-main">
          <div className="profit-sidebar">
            <div className="user-header">
                <Image src="/d-pad-logo.png" alt="d-pad logo" width="55" height="40"></Image>
                <h4>_username_</h4>
            </div>

            <Image className="line-break" src='/geometric-card-line-break.png' alt="line" width="300" height="2"/>

            <div className="profit-sidebar-buttons">
                <div className="pill">
                    <Image src="/d-pad-logo.png" alt="d-pad logo" width="55" height="40"/>

                    <h4>Overview & Stats</h4>
                </div>

                <div className="pill contracts-pill">
                <Image src="/d-pad-logo.png" alt="d-pad logo" width="55" height="40"/>
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
                <Image src="/d-pad-logo.png" alt="d-pad logo" width="55" height="40"/>
                    <h4>Add Contract</h4>
                </div>

                <div className="pill">
                <Image src="/d-pad-logo.png" alt="d-pad logo" width="55" height="40"/>
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
                    <div className="control-section">
                        <h3>Distribution Rate</h3>

                        <p>Tot. Profit (%) to share:</p>

                        <div className="total-profit-buttons">
                            <button>10%</button>
                            <button>30%</button>
                            <button>50%</button>
                        </div>

                        <h3>Frequency of Distribution</h3>
                        <p>How often would you like the Profit-Sharing distribution to happen? No worries, we&#39;ll optimize if for you,
                            based on the size & growth rate of your Community :)
                        </p>

                        <div className="distribution-rate-buttons">
                            <button>Weekly</button>
                            <button>Monthly</button>
                        </div>
                    </div>

                    <div className="control-section">
                        <h3>Interactions&#39; Proximity Level</h3>

                        <p>Distribute your Token based on the proximity of the interactions to your protocol!</p>

                        <button className="proximity-button">Only to your Protocol</button>

                        <button className="proximity-button">To the same Template</button>

                        <button className="proximity-button">All SkillWallet holders</button>
                    </div>

                    <div className="control-section">
                        <h3>Contract Start Date</h3>

                        <Calendar 
                        onChange={onChange}
                        value={value}/>
                    </div>
                </div>

                <h3 style={{fontStyle: "underline", fontWeight: "bold"}}>Bootstrap your Profit-Sharing Community</h3>

                <button className="deploy-button">Click to Deploy your Treasury Contract</button>

                <button className="profit-share" onClick={() => console.log(value.getMonth())}>Start Sharing 🚀</button>
            </div>

          </div>
        </main>
      </div>
    );
}

export default Web3Native;