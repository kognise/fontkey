import { useState, useEffect } from 'react'

import useFont from '../lib/useFont'
import useFonts from '../lib/useFonts'
import { useSpace, useManualSwitch } from '../lib/switchers'
import { set as setQuery } from '../lib/query'
import { fetchRawFonts, fetchSharingUrl } from '../lib/fetch'
import { views } from '../lib/constants'
import { useGA, logEvent } from '../lib/analytics'

import App from '../components/App'
import Left from '../components/Left'
import Right from '../components/Right'
import Header from '../components/Header'
import IconButton, { IconLink } from '../components/IconButton'
import Text from '../components/Text'
import Button from '../components/Button'
import FontField from '../components/FontField'

import RefreshIcon from '../icons/Refresh'
import HourglassIcon from '../icons/Hourglass'
import OpenIcon from '../icons/Open'
import ShareIcon from '../icons/Share'

const Page = (props) => {
  useGA()
  const fonts = useFonts(props.rawFonts)

  const [ view, setView ] = useState(
    props.query.view ? views.find(({ name }) => name === props.query.view) : views[0]
  )
  useEffect(() => {
    setQuery('view', view.name)
  }, [ view ])

  const [ emsmallened, setEmsmallened ] = useState(props.query.emsmallened === 'true')
  useEffect(() => {
    setQuery('emsmallened', emsmallened)
  }, [ emsmallened ])

  const [ sharingUrl, setSharingUrl ] = useState()

  const [
    primaryState,
    primaryDispatch
  ] = useFont(
    fonts,
    props.query.primaryFont || 'Montserrat Bold',
    parseInt(props.query.primarySize) || 46,
    props.query.primaryLocked === 'true',
    'primary'
  )
  const [
    secondaryState,
    secondaryDispatch
  ] = useFont(
    fonts,
    props.query.secondaryFont || 'Montserrat Regular',
    parseInt(props.query.secondarySize) || 20,
    props.query.secondaryLocked === 'true',
    'secondary'
  )
  const [
    tertiaryState,
    tertiaryDispatch
  ] = useFont(
    fonts,
    props.query.tertiaryFont || 'Montserrat Semibold',
    parseInt(props.query.tertiarySize) || 16,
    props.query.tertiaryLocked === 'true',
    'tertiary'
  )

  useSpace([
    [ primaryState, primaryDispatch ],
    [ secondaryState, secondaryDispatch ],
    [ tertiaryState, tertiaryDispatch ]
  ], fonts)
  const manualSwitch = useManualSwitch([
    [ primaryState, primaryDispatch ],
    [ secondaryState, secondaryDispatch ],
    [ tertiaryState, tertiaryDispatch ]
  ], fonts)

  return (
    <App route='/app' title={`${primaryState.name}, ${secondaryState.name}, and ${tertiaryState.name}`}>
      <Left emsmallened={emsmallened}>
        <div className='icons'>
          <IconLink icon={OpenIcon} href={`https://fonts.google.com/?selection.family=${fonts.simplify([
            primaryState.font,
            secondaryState.font,
            tertiaryState.font
          ])}`} onClick={() => logEvent('Sharing', 'Open Google Fonts')} target='_blank' />

          <IconButton icon={ShareIcon} onClick={async () => {
            setSharingUrl('Loading...')
            setSharingUrl(await fetchSharingUrl())
            setEmsmallened(false)
            logEvent('Sharing', 'Generate Link')
          }} />
          
          <IconLink icon={HourglassIcon} href='/auto' />
        </div>

        {!emsmallened && <>
          {sharingUrl && <Text>Your sharing URL is: {sharingUrl}</Text>}

          <Header>
            <IconButton icon={RefreshIcon} onClick={manualSwitch} />
            {' '}FontKey
          </Header>
          <Text>Press space to choose new fonts. Click a lock to prevent that font from changing.</Text>
          
          <form>
            <FontField
              prettyLevel='Primary'
              state={primaryState}
              dispatch={primaryDispatch}
              fonts={fonts}
            />

            <FontField
              prettyLevel='Secondary'
              state={secondaryState}
              dispatch={secondaryDispatch}
              fonts={fonts}
            />

            <FontField
              prettyLevel='Tertiary'
              state={tertiaryState}
              dispatch={tertiaryDispatch}
              fonts={fonts}
            />
          </form>
        </>}

        <div className='buttons'>
          <Button
            cta fullwidth={emsmallened}
            onClick={() => {
              const eventText = emsmallened ? 'Embiggen' : 'Emsmallen'
              setEmsmallened(!emsmallened)
              logEvent('UI', eventText)
            }}
          >
            {emsmallened ? 'Embiggen' : 'Emsmallen'}
          </Button>
          {views.map((view) => (
            <Button
              fullwidth={emsmallened}
              onClick={() => {
                setView(view)
                logEvent('UI', 'Set View', view.name)
              }}
              key={view.name}
            >
              {view.name}
            </Button>
          ))}
        </div>
      </Left>
      <Right>
        <view.component emsmallened={emsmallened} />
      </Right>

      <style jsx>{`
        .icons {
          margin-bottom: 16px;
          font-size: var(--tertiary-size);
        }

        @media only screen and (max-width: 780px) {
          .buttons :global(button) {
            width: auto;
          }
        }  
      `}</style>
    </App>
  )
}

Page.getInitialProps = async ({ query }) => {
  const rawFonts = await fetchRawFonts()
  return { rawFonts, query }
}

export default Page