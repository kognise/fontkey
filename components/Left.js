import Container from './Container'

export default (props) => (
  <main>
    <Container>
      {props.children}
    </Container>

    <style jsx>{`
      main {
        background: var(--light);
        height: 100%;
        flex: 1;
      }

      @media only screen and (max-width: 780px) {
        main {
          max-width: none !important;
          height: auto;
          flex: 0;
        }
      }
    `}</style>
    <style jsx>{`
      main {
        max-width: ${props.emsmallened ? '200px' : 'auto'};
      }
    `}</style>
  </main>
)