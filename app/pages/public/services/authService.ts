import api from '@/utils/api'

const authService = {
  login: (email: string, password: string) => {
    return api.post<LoginResponse>('login', {
      email,
      password,
    })
  },
  register: (email: string, password: string) => {
    return api.post<RegisterResponse>('register', {
      email,
      password,
    })
  },
  resendEmail: (email: string) => {
    return api.post<ResendEmailResponse>('resend-email', {
      email,
    })
  },
  confirmEmail: (token: string) => {
    return api.post<ConfirmEmailResponse>('confirm-email', {
      token,
    })
  },
  logout: () => {
    return api.post<LogoutResponse>('logout', {})
  },
}

export default authService
