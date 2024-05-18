import ReactGA from 'react-ga'
import { useEffect } from 'react'

export const initGA = () => {
  ReactGA.initialize('UA-116663597-7')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '', label) => {
  if (category && action) {
    ReactGA.event({ category, action, label })
  }
}

export const useGA = () => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])
}