export const set = (key, value) => {
  const url = new URL(location.href)
  url.searchParams.set(key, value)
  history.replaceState(history.state, null, url.toString())
}