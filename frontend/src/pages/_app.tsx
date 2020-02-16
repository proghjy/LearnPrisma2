import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'mobx-react';

import initializeStore from '../stores/index'

class CoolDay extends App {

  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext)
    const mobxStore = await initializeStore()
    appContext.ctx.mobxStore = mobxStore;
    return {
      ...appProps,
      initialMobxState: mobxStore,
    }
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider {...this.mobxStore}>
        <Container>
          <Component {...pageProps}/>
        </Container>
      </Provider>
    )
  }
}

export default CoolDay;