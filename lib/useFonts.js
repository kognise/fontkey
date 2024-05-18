import { useMemo } from 'react'
import { formatVariant } from './util'

class Font {
  constructor(fonts, family, prettyVariant, file, weight, italic) {
    this.fonts = fonts
    this.family = family
    this.name = `${family} ${prettyVariant}`
    this.file = file
    this.weight = weight
    this.italic = italic
  }

  async load() {
    if (this.loaded) return

    const face = new FontFace(this.name, `url(${this.file})`, {
      family: this.name,
      style: this.italic ? 'italic' : 'normal',
      weight: this.weight
    })
    await face.load()
    document.fonts.add(face)

    this.loaded = true
  }

  set(level) {
    document.documentElement.style.setProperty(`--font-${level}`, this.name)
    document.documentElement.style.setProperty(`--font-weight-${level}`, this.weight)
    document.documentElement.style.setProperty(`--font-style-${level}`, this.italic ? 'italic' : 'normal')
  }

  async use(level) {
    await this.load()
    this.set(level)
  }
}

class Fonts {
  constructor(rawFonts) {
    this.items = rawFonts.reduce((array, rawFont) => {
      const thisArray = []
  
      for (let variant of rawFont.variants) {
        const { prettyVariant, weight, italic } = formatVariant(variant)

        const font = new Font(
          this,
          rawFont.family,
          prettyVariant,
          rawFont.files[variant].replace('http://', 'https://'),
          weight, italic
        )
        if (weight === 400 && !italic) {
          thisArray.unshift(font)
        } else {
          thisArray.push(font)
        }
      }
  
      return array.concat(thisArray)
    }, [])
  }

  find(term) {
    return this.items.find((font) => font.name.toLowerCase().replace(/[^\w]+/g, '').includes(
      term.toLowerCase().replace(/[^\w]+/g, '')
    ));
  }

  findExact(term) {
    return this.items.find((font) => font.name === term)
  }

  random() {
    return this.items[Math.floor(Math.random() * this.items.length)]
  }

  simplify(fonts) {
    const collected = fonts.reduce((previous, font) => {
      const thing = font.italic ? `${font.weight}i` : font.weight.toString()
      if (font.family in previous) {
        previous[font.family].add(thing)
      } else {
        previous[font.family] = new Set([ thing ])
      }
      return previous
    }, {})

    return Object.keys(collected).reduce((previous, family) => {
      const set = collected[family]
      previous += `|${family.replace(/\s+/g, '+')}`
      if (!set.has('400') || set.size !== 1) {
        previous += `:${[ ...set.values() ].sort().join(',')}`
      }
      return previous
    }, '').slice(1);
  }
}

export default (rawFonts) => {
  const fonts = useMemo(() => new Fonts(rawFonts), [])
  return fonts
}