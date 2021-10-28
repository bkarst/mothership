import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mothership</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={{margin: 20}}>
          <img src="/logo.png" alt="Mothership" width="200" />
        </div>
        <h1 className="title">
          Welcome aboard. 
        </h1>
        <div>
          Mothership is the first user-owned social network. 
        </div>
        <div className="grid">
          <a href="/whitepaper.pdf" className="card">
            <h3> White Paper &rarr;</h3>
            <p>Mothership: A Model of a User Owned and Moderated Social Network</p>
          </a>
          <a className="card">
            <h3>Stay in Touch &rarr;</h3>
            <p>Join our email list to stay updated on our ICO, exclusive NFT airdrops, and more. </p>
          </a>
          {/* <a href="https://nextjs.org/docs" className="card">
            <h3>Roadmap &rarr;</h3>
            <p>A Model of a User Owned and Moderated Social Network</p>
          </a> */}
          
          <div>
            <table className="roadmap">
              <tr>
                <th>
                  Roadmap
                </th>
              </tr>
              <tr>
                <td>
                Home Page Build Out with email list sign up and Road Map. 
                </td>
              </tr>
              <tr>
                <td>
                Release MothershipCoin to Investors.
                </td>
              </tr>
              <tr>
                <td>
                  Connect Wallet on user signup, Connect MCoin to actions: Liking, Following, and Flagging, Verify Email.
                </td>
              </tr>
              <tr>
                <td>
                  Build out Commenting workflow. 
                </td>
              </tr>
              <tr>
                <td>
                  Build out Decentralised Moderation Flow and Messaging. 
                </td>
              </tr>
              <tr>
                <td>
                  Migrate in-app currency to XRP side chain. 
                </td>
              </tr>
              <tr>
                <td>
                Release 5,000 NFTs in a OG Mothership Collection and Investors. Send app invites to NFT holders. 
                </td>
              </tr>
              <tr>
                <td>
                Release 5,000 NFTs in a OG Mothership Collection and Investors. Send app invites to NFT holders. 
                </td>
              </tr>              
              <tr>
                <td>
                Release update to connect to ERC20 Wallet. 
                </td>
              </tr>              
              <tr>
                <td>
                Expand the release to general public. 
                </td>
              </tr>              
              <tr>
                <td>
                Enable the deposit of MCoin to Airdrop pool. 
                </td>
              </tr>              
              <tr>
                <td>
                First Airdrop MothershipCoin airdrop to users. 
                </td>
              </tr>              
              <tr>
                <td>
                  Begin development App to Release to App Store and Google Play Store. 
                </td>
              </tr>              
              <tr>
                <td>
                  Release Google Play Version and Android Version of Mothership to the general public. 
                </td>
              </tr>              

              
            </table>
            </div>
          
        </div>
      </main>

      <footer>
        
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
