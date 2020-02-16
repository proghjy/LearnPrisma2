import { observable, action } from 'mobx'

enum Appearance {
  Auth,
  Light,
  Dark
}

class ThemeStore {
  @observable appearance: Appearance = Appearance.Dark

  @action setAppearance(mode: Appearance) {
    this.appearance = mode
  }
}

export default ThemeStore;