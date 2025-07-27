const cookieParser = (cookie: string | null) => {
  if (!cookie) return {}
  const cookies = cookie.split(';').map((c) => {
    const [key, value] = c.split('=')
    return { key, value }
  })
  return Object.fromEntries(
    cookies.map(({ key, value }) => [key.trim(), value.trim()])
  )
}

export default cookieParser
