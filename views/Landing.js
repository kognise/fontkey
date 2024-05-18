import Container from '../components/Container'
import Header from '../components/Header'
import Text from '../components/Text'
import Button from '../components/Button'

export default (props) => (
  <div className='background'>
    <Container lg={props.emsmallened}>
      <Header light>Our product is actually really, really, cool.</Header>
      <Text light>
        And here’s some more information about exactly why you should use it.
        We are the leaders of the industry our product is in! Also seriously, we’re really cool.
      </Text>

      <div>
        <Button cta>
          Call to action
        </Button>
      </div>
    </Container>

    <style jsx>{`
      .background {
        background: linear-gradient(90deg, var(--main) 0%, var(--main-light) 100%);

        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)