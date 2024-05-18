import { useReducer, useEffect } from 'react'
import { set as setQuery } from './query'
import { logEvent } from './analytics'

const getInitialState = ([ fonts, initialName, initialSize, initialLocked, level ]) => {
  return {
    font: fonts.findExact(initialName),
    name: initialName,
    size: initialSize,
    locked: initialLocked,
    level, fonts
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleLock': {
      return {
        ...state,
        locked: !state.locked
      }
    }
    case 'setName': {
      const font = state.fonts.find(action.payload)
      if (!font) return {
        ...state,
        name: action.payload,
      }
      
      logEvent('Fonts', 'Set Name', font.name)

      return {
        ...state,
        name: action.payload,
        font
      }
    }
    case 'updateFont': {
      return {
        ...state,
        name: state.font.name
      }
    }
    case 'setSize': {
      logEvent('Fonts', 'Set Size', action.payload || 16)

      return {
        ...state,
        size: action.payload || 16
      }
    }
    case 'setFont': {
      return {
        ...state,
        font: action.payload,
        name: action.payload.name
      }
    }
  }
}

export default (fonts, initialName, initialSize, initialLocked, level) => {
  const [ state, dispatch ] = useReducer(reducer, [ fonts, initialName, initialSize, initialLocked, level ], getInitialState)

  useEffect(() => {
    state.font.use(state.level)
    setQuery(`${state.level}Font`, state.font.name)
  }, [ state.font ])
  useEffect(() => {
    document.documentElement.style.setProperty(`--font-size-${state.level}`, `${state.size}px`)
    setQuery(`${state.level}Size`, state.size)
  }, [ state.size ])
  useEffect(() => {
    setQuery(`${state.level}Locked`, state.locked)
  }, [ state.locked ])

  return [ state, dispatch ]
}