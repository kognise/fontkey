import useFont from '../lib/useFont'
import useFonts from '../lib/useFonts'
import { useTimer } from '../lib/switchers'
import { fetchRawFonts } from '../lib/fetch'
import { views } from '../lib/constants'
import { useGA } from '../lib/analytics'

import App from '../components/App'

const View = views[0].component

const Page = (props) => {
  useGA()
  const fonts = useFonts(props.rawFonts)

  const [
    primaryState,
    primaryDispatch
  ] = useFont(fonts, 'Montserrat Bold', 46, false, 'primary')
  const [
    secondaryState,
    secondaryDispatch
  ] = useFont(fonts, 'Montserrat Regular', 20, false, 'secondary')
  const [
    tertiaryState,
    tertiaryDispatch
  ] = useFont(fonts, 'Montserrat Semibold', 16, false, 'tertiary')

  useTimer([
    [ primaryState, primaryDispatch ],
    [ secondaryState, secondaryDispatch ],
    [ tertiaryState, tertiaryDispatch ]
  ], fonts, 5000)

  return (
    <App route='/auto' title='Auto Mode'>
      <View emsmallened={true} />
    </App>
  )
}

Page.getInitialProps = async ({ query }) => {
  const rawFonts = await fetchRawFonts()
  return { rawFonts, query }
}

export default Page