import cookieParser from '@/utils/cookiesParser'
import Cookies from 'js-cookie'

export function isAuthenticated(request?: Request): boolean {
  if (request) {
    const session = cookieParser(request.headers.get('cookie'))
    return !!session.session
  }
  return !!Cookies.get('session')
}
