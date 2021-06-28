import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>d-Pad Cafe</title>
        <link rel="icon" href="/d-pad-logo.png" />
      </Head>

      <main>
        <div>
          <p>d-Pad Cafe lets you boostrap a free, self-governed community - 
            with native <span>Self-Sovereign ID</span> (SSID) and a <span>truly fair
            tokenomics for your protocol</span>
          </p>

          <img src="/d-pad-logo.png"></img>

          <p>Automate a <span>fair token launch</span> and/or <span>set a Native 
            Profit-sharing model</span> to split revenues with your protocol's
            participants (you included!)
          </p>
        </div>

        <div></div>
      </main>
    </div>
  )
}