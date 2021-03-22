import { apolloClient } from './apollo'
import auth, { authData, TOKEN_KEY } from './auth'

jest.mock('./apollo', () => ({
  apolloClient: {
    mutate: jest.fn(),
    resetStore: jest.fn()
  }
}))

describe('auth provider', () => {
  it('initializes an empty auth store', () => {
    expect(authData.user).toBeDefined()
    expect(authData.ministry).toBeDefined()
    expect(authData.isAdmin).toBe(false)
    expect(authData.isLoggedIn).toBe(false)
  })

  it('exposes a public api to interact with the auth state', async () => {
    expect(auth.init).toBeDefined()
    expect(await auth.init()).toBe(false)
  })

  it('handles expired or invalid auth tokens', async () => {
    auth.token = 'invalid'
    localStorage.setItem(TOKEN_KEY, auth.token)
    apolloClient.mutate.mockRejectedValueOnce()

    expect(await auth.init()).toBe(false)
    expect(auth.token).toBe('')
  })

  it('allows for specifying a custom avatar size', async () => {
    expect(authData.avatar).toBeDefined()
    expect(authData.avatar(250)).toContain('&s=250')
    expect(authData.avatar()).not.toContain('&s=')
  })
})
