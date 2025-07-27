type BackendResponse<T> = {
  success: boolean
  data: T
  message?: string
}

type LoginResponse = BackendResponse<{
  token: string
  user: {
    id: string
    email: string
    name: string
    avatar: string
  }
}>

type RegisterResponse = BackendResponse<unknown>

type ResendEmailResponse = BackendResponse<unknown>

type ConfirmEmailResponse = BackendResponse<unknown>

type LogoutResponse = BackendResponse<unknown>
