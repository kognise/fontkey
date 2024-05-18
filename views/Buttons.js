import Container from '../components/Container'
import Header from '../components/Header'
import Button from '../components/Button'

export default (props) => (
  <Container lg={props.emsmallened}>
    <Header>Just another title</Header>
    
    {new Array(4).fill(0).map((_, i) => (
      <Button fullwidth key={i}>Button {i + 1}</Button>
    ))}
  </Container>
)