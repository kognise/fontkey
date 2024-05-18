import Container from '../components/Container'
import Header from '../components/Header'
import Text from '../components/Text'
import Field from '../components/Field'
import Button from '../components/Button'

const noSubmit = (event) => event.preventDefault()

export default (props) => (
  <Container lg={props.emsmallened}>
    <Header>Create an account</Header>
    <Text>Use whatever email address you normally use</Text>

    <form onSubmit={noSubmit}>
      <Field
        type='email'
        id='email'
        label='Email'
        placeholder='name@provider.com'
      />

      <Field
        type='password'
        id='password'
        label='Password'
        placeholder={'\u2022'.repeat(16)}
      />

      <Button>Submit</Button>
    </form>
  </Container>
)