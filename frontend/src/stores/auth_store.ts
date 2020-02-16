import { computed, observable, action } from 'mobx'

class AuthStore {
  @observable accessToken: string
  @observable refreshToken: string

  @computed
  get isAuthenticated(): boolean {
    return typeof this.accessToken !== 'undefined'
  }
}

export default AuthStore;