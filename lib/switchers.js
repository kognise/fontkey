import { useEffect, useMemo } from 'react'
import { logEvent } from '../lib/analytics'

export const useSpace = (levels, fonts) => {
  useEffect(() => {
    const handler = async (event) => {
      if (event.target.tabIndex >= 0) return
      if (event.keyCode === 32) {
        const font = fonts.random()

        for (let [ state, dispatch ] of levels) {
          if (state.locked) continue
          dispatch({
            type: 'setFont',
            payload: font
          })
        }

        logEvent('Fonts', 'Random Switch', 'Space')
      }
    }
    document.addEventListener('keypress', handler)
    return () => document.removeEventListener('keypress', handler)
  }, levels.map(([ state ]) => state.locked))
}

export const useTimer = (levels, fonts, ms) => {
  useEffect(() => {
    const interval = setInterval(async () => {
      const font = fonts.random()

      for (let [ state, dispatch ] of levels) {
        if (state.locked) continue
        dispatch({
          type: 'setFont',
          payload: font
        })
      }
    }, ms)
    return () => clearInterval(interval)
  }, levels.map(([ state ]) => state.locked))
}

const getManualSwitch = (levels, fonts) => {
  return () => {
    const font = fonts.random()

    for (let [ state, dispatch ] of levels) {
      if (state.locked) continue
      dispatch({
        type: 'setFont',
        payload: font
      })
    }

    logEvent('Fonts', 'Random Switch', 'Button')
  }
}

export const useManualSwitch = (levels, fonts) => {
  return useMemo(() => getManualSwitch(levels, fonts), [ levels, fonts ])
}