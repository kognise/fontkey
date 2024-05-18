import fetch from 'node-fetch'
import { key, sharingApi } from './constants'

export const fetchRawFonts = async () => {
  const res = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${key}`)
  const json = await res.json()
  return json.items
}

export const fetchSharingUrl = async () => {
  const url = new URL(location.href)
  const res = await fetch(sharingApi, {
    method: 'POST',
    body: url.search
  })
  const text = await res.text()
  return text
}