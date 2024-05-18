import Head from 'next/head'

export default (props) => (
  <div>
    <Head>
      <title>{props.title ? `${props.title} | FontKey` : 'FontKey'}</title>
      <link rel='canonical' href={`https://www.fontkey.design${props.route || '/'}`} />
      <meta property='og:url' content={`https://www.fontkey.design${props.route || '/'}`} />
      <meta property='og:title' content={props.title || 'FontKey'} />
      <meta name='twitter:title' content={props.title ? `${props.title} | FontKey` : 'FontKey'} />
    </Head>

    {props.children}

    <style jsx>{`
      div {
        display: flex;
        height: 100vh;
      }

      @media only screen and (max-width: 780px) {
        div {
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      :root {
        --box-shadow: 0px 7px 30px rgba(73, 80, 87, 0.17);
        
        --dark: #212529;
        --dark-dim: #495057;
        --light: #F8F9FA;
        --light-dim: #F9F9F9;

        --main: #228BE6;
        --main-light: #4DABF7;
        --accent: #F59F00;
        --accent-light: #FFD43B;

        --dim: #ADB5BD;
      }

      body {
        margin: 0;
      }
    `}</style>
  </div>
)