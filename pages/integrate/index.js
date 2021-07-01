const Integrate = () => {
    return (
    <div className="container">

      <main className="landing-main">
        <div className="landing-sidebar">
          <h2>Welcome to your<span className="heavy"> Partner Agreement!</span></h2>

          <img src="/d-pad-logo.png"></img>

          <p>In just two steps, you will integrate a <b>universal, sybil-resistant login</b>
             for your users - and automate <b>an internal, mathematically-fair Tokenomics</b>
             for your community.
          </p>
        </div>

        <div className="integrate-content">
          <div>
            <h2 className="heavy">Partner's Agreement</h2>
            <h4>Select the template that best represents your project / protocol.</h4>
          </div>

          <div className="integrate-template-content">
            <div className="integrate-project-types">
                <div className='white-card'>
                    <div className="top-card">
                        <img className="image-7" src='opensource-defi-black.png' alt="card-logo"/>

                        <div className="title-white-card raleway-bold-alto-22px">
                            <>
                        Open-Source & DeFi
                            </>
                        </div>
                    </div>

                    <div className="description-white-card raleway-normal-alto-18px">
                        For researchers & web3, open-source teams, that innovate in a liberal fashion - for a more sustainable, meritocratic world.
                    </div>

                    <img className="line-26" src='/geometric-card-line-break.png' alt="line" />
                </div>

                <div className="white-card">
                    <div className="top-card">
                        <img className="image-7" src='opensource-defi-black.png' alt="card-logo"/>

                        <div className="title-white-card raleway-bold-alto-22px">
                            <>
                        Art, Events & NFTs
                            </>
                        </div>
                    </div>

                    <div className="description-white-card raleway-normal-alto-18px">
                    Art movements, writers & creatives of all kind who use Art & provable ownership for purer forms of human interaction.
                    </div>

                    <img className="line-26" src='/geometric-card-line-break.png' alt="line" />
                </div>

                <div className="white-card">
                <div className="top-card">
                    <img className="image-7" src='opensource-defi-black.png' alt="card-logo"/>

                    <div className="title-white-card raleway-bold-alto-22px">
                        <>
                    Local Projects & DAOs
                        </>
                    </div>
                </div>

                <div className="description-white-card raleway-normal-alto-18px">
                From support for people in need, to innovative local hubs to get together & create something greater than oneself.
                </div>

                <img className="line-26" src='/geometric-card-line-break.png' alt="line" />
                </div>
            </div>

            <div className="bootstrap-button">
                <p>Bootstrap your Community Economy</p>
            </div>

            <div className="integrate-button-panel">
                <button>
                Start from Scratch
                </button>

                <button>
                Import your Contract
                </button>
            </div>

            <button className="integrate-deploy">
                Sign & Deploy 🚀
            </button>

          </div>
        </div>
      </main>
    </div>
    )
}

export default Integrate;