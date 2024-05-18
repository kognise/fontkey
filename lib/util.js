import { weights } from './constants'

export const formatVariant = (variant) => {
  if (variant === 'regular') {
    return {
      prettyVariant: weights[400],
      weight: 400,
      italic: false
    }
  } else if (variant === 'italic') {
    return {
      prettyVariant: 'Italic',
      weight: 400,
      italic: true
    }
  } else {
    const split = variant.split('italic')
    const italic = split.length > 1
    const weight = weights[split[0]]
    const prettyVariant = `${weight}${italic ? ' Italic' : ''}`
    return {
      prettyVariant, italic,
      weight: parseInt(split[0])
    }
  }
}