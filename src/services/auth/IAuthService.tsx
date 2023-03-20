import { type User } from '../../models/user.model'

export interface IAuthService {
  login: (user: User) => Promise<User>
  tokenInfo: (token: string) => User
  removeToken: () => void
  tokenExpired: (token: string) => boolean
}
