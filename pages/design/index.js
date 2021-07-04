import Image from 'next/image';

const Design = () => {
    return (
        <div className="container">
  
        <main className="landing-main">
          <div className="landing-sidebar">
            <div className="user-header">
                <Image src="/d-pad-logo.png" alt="d-pad logo" width="40" height="40"></Image>
                <h4>_username_</h4>
            </div>

            <Image className="line-26" src='/geometric-card-line-break.png' alt="line" width="40" height="2"/>

            <div className="design-sidebar-buttons">
                <div className="pill">
                    <Image src="/d-pad-logo.png" alt="d-pad logo" width="40" height="40"/>

                    <h4>Overview & Stats</h4>
                </div>

                <div className="pill">
                <Image src="/d-pad-logo.png" alt="d-pad logo" width="40" height="40"/>
                    <h4>Listed Contracts</h4>
                    <div></div>
                </div>

                <div className="pill">
                <Image src="/d-pad-logo.png" alt="d-pad logo" width="40" height="40"/>
                    <h4>Add Contract</h4>
                </div>

                <div className="pill">
                <Image src="/d-pad-logo.png" alt="d-pad logo" width="40" height="40"/>
                    <h4>Log off</h4>
                </div>
            </div>
          </div>

          <div className="landing-content">
            <h2>Design your Token Model</h2>

            <p><b>d-Pad Cafe</b> uses <span className="heavy">Decentralized Oracles</span>, a <b>Constant Flow Agreement</b> (CFA)
            and a <span className="heavy">Quadratic Distribution</span> model that measures the exact interactions that users
            had with your protocol. Reward your community fairly, and boostrap a sustainable, long-term Tokenomics for your protocol!</p>

            <div className="profit-sharing-agreement">
                <h2>Profit-Sharing Agreement</h2>

                <p>This is a module for <span className="heavy">Crypto-Native Business Models</span> - i.e.
                <span className="heavy"> Profit-sharing Marketplace</span> - for any DeFi Protocol to <span className="heavy">automate
                and share their profit with their Community</span> in a fair & transparent fashion.</p>

                <div className="profit-sharing-controls">
                    <div>
                        <h3>Distribution Rate</h3>

                        <p>Tot. Profit to distribute to your Community</p>
                    </div>

                    <div>
                        <h3>Treasury Address</h3>

                        <p>The contract address of your <span className="heavy">Project/Community Treasury.</span> This is where your funds go.</p>
                    </div>
                </div>

                <button className="design-share">Sign & Share!</button>
            </div>

          </div>
        </main>
      </div>
    )
}

export default Design;