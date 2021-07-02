import Image from 'next/image';

const Web3Native = () => {

    // the fixed width for the Image tag on line 18 will be a problem......


    return (
        <div className="container">
  
        <main className="landing-main">
          <div className="landing-sidebar">
            <div className="user-header">
                <Image src="/d-pad-logo.png" width="55" height="40"></Image>
                <h4>_username_</h4>
            </div>

            <Image className="line-26" src='/geometric-card-line-break.png' alt="line" width="200" height="2"/>

            <div className="profit-sidebar-buttons">
                <div className="pill">
                    <Image src="/d-pad-logo.png" width="55" height="40"/>

                    <h4>Overview & Stats</h4>
                </div>

                <div className="pill">
                <Image src="/d-pad-logo.png" width="55" height="40"/>
                    <h4>Listed Contracts</h4>
                    <div></div>
                </div>

                <div className="pill">
                <Image src="/d-pad-logo.png" width="55" height="40"/>
                    <h4>Add Contract</h4>
                </div>

                <div className="pill">
                <Image src="/d-pad-logo.png" width="55" height="40"/>
                    <h4>Log off</h4>
                </div>
            </div>
          </div>

          <div className="landing-content">
            <h2>Token Distribution Agreement</h2>

            <p>Profit-sharing <b>is the single, most important step</b> towards <i>Progressive Decentralization and truly autonomous communities</i>. 
            The <b>d-Pad Cafe</b> makes it a 2-step process for you to kick-off an automated, Web3-Native-Profit-Sharing Agreement.
            Measure the exact interaction rate of each user/participant to your protocol, and let our
            <span className="heavy">Quadratic Distribution</span> model ensure a fair reward to anyone. You & your founding team included!</p>

            <div className="profit-sharing-agreement">
                <div className="profit-sharing-controls">
                    <div>
                        <h3>Distribution Rate</h3>

                        <p>Tot. Profit (%) to share:</p>

                        <h3>Frequency of Distribution</h3>
                        <p>How often would you like the Profit-Sharing distribution to happen? No worries, we&#39;ll optimize if for you,
                            based on the size & growth rate of your Community :)
                        </p>
                    </div>

                    <div>
                        <h3>Interactions' Proximity Level</h3>

                        <p>Distribute your Token based on the proximity of the interactions to your protocol!</p>

                        <button>Only to your Protocol</button>

                        <button>To the same Template</button>

                        <button>All SkillWallet holders</button>
                    </div>

                    <div>
                        <h3>Contract Start Date</h3>

                        <div>Calendar here this is a calendar where you will be able to choose dates in a year.</div>
                    </div>
                </div>

                <h3 style={{fontStyle: "underline", fontWeight: "bold"}}>Bootstrap your Profit-Sharing Community</h3>

                <button>Click to Deploy your Treasury Contract</button>

                <button className="profit-share">Start Sharing 🚀</button>
            </div>

          </div>
        </main>
      </div>
    );
}

export default Web3Native;