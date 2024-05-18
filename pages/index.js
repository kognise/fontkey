import router from 'next/router'

import { useGA } from '../lib/analytics'

import App from '../components/App'
import Header from '../components/Header'
import PH from '../components/PH'
import Subheader from '../components/Subheader'
import Text from '../components/Text'
import Button from '../components/Button'
import Container from '../components/Container'
import Promo from '../components/Promo'
import Footer from '../components/Footer'

const go = () => router.push('/app')

export default () => {
  useGA()
  return (
    <App>
      <div className='parts'>
        <div className='background'>
          <Container lg>
            <Header light>FontKey</Header>
            <Text light>Stop reusing Roboto and spice things up.</Text>
            <Promo className='promo' />
            <div>
              <Button cta onClick={go}>Let's do this</Button>
            </div>
          </Container>
        </div>

        <Container lg className='container'>
          <PH />

          <Subheader>Iterate</Subheader>
          <Text>
            Press space to pick new fonts randomly. Lock a font in place if you like it.
          </Text>

          <Subheader>Preview</Subheader>
          <Text>
            Preview your font selection in realistic layouts including landing and sign up pages.
          </Text>

          <Subheader>Export</Subheader>
          <Text>
            In a single click, get HTML and CSS that you can put on your website.
          </Text>

          <Subheader>Share</Subheader>
          <Text>
            Easily share a link to coworkers and friends to collaborate.
          </Text>
        </Container>

        <div className='last'>
          <Container lg>
            <Subheader>Go and create</Subheader>
            <Text>What are you waiting for? There's no sign up process.</Text>
            <div>
              <Button onClick={go}>Get started</Button>
            </div>
          </Container>
        </div>

        <Footer />
      </div>

      <style jsx>{`
        .background {
          background: linear-gradient(90deg, var(--main) 0%, var(--main-light) 100%);
          position: relative;
          
          width: 100%;
          padding-top: 80px;
          margin-bottom: 20%;
        }

        .background:after {
          content: '';
          background: inherit;

          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;

          transform: skewY(-8deg);
          transform-origin: 100%;
          z-index: -1;
        }

        .parts {
          width: 100%;
        }

        .parts :global(.container) {
          height: auto;
        }

        .last {
          background: var(--light-dim);

          position: relative;
          margin-top: 14%;
          padding-bottom: 40px;
        }

        .last:before {
          content: '';
          background: inherit;

          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;

          transform: skewY(-8deg);
          transform-origin: 0%;
          z-index: -1;
        }

        @media only screen and (max-height: 600px) {
          .background :global(.promo) {
            display: none;
          }
        }
      `}</style>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap');

        :root {
          --font-primary: 'Montserrat';
          --font-size-primary: 48px;
          --font-weight-primary: 700;

          --font-secondary: 'Montserrat';
          --font-size-secondary: 20px;
          --font-weight-secondary: 400;

          --font-tertiary: 'Montserrat';
          --font-size-tertiary: 16px;
          --font-weight-tertiary: 600;
        }
      `}</style>
    </App>
  )
}