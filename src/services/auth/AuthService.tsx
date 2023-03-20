import { decodeToken, isExpired } from 'react-jwt'
import { type IAuthService } from './IAuthService'
import { type User } from '../../models/user.model'
import { TokenError } from '../../exceptions/user.exception'

export class AuthService implements IAuthService {
  tokenExpired (token: string): boolean {
    return isExpired(token)
  }

  async login ({ username, password }: User): Promise<User> {
    console.log(password)
    const token = await Promise.resolve('token')
    return { username, token }
  }

  tokenInfo (token: string): User {
    const tokenInfo = decodeToken<User>(token)
    if (tokenInfo === null) {
      throw new TokenError('Error')
    }
    return tokenInfo
  }

  removeToken (): void {
    // TODO Add code for remove token
  }
}
