import { useStaticRendering } from 'mobx-react'

import AuthStore from './auth_store'
import ThemeStore from './theme_store'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

let store = null

function initializeStore(initialData = { authStore: {} }) {
  if (isServer) {
    return {
      authStore: AuthStore(initialData.postStore),
      themeStore: ThemeStore()
    }
  }
  
  if (store === null) {
    store = {
      authStore: AuthStore(initialData.postStore),
      themeStore: ThemeStore()
    }
  }

  return store;
}

export default initializeStore;