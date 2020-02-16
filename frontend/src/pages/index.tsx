import * as React from 'react';
import { NextPage } from 'next'; 
import { inject, observer } from 'mobx-react';

@inject('themeStore') @observer
const IndexPage: NextPage = () => {

  static async getInitialProps({ mobxStore, query }) {
    return { appearance: mobxStore.themeStore.appearance };
  }

  return (
    <div>
      <h1>{appearance}</h1>
    </div>
  )
}


export default IndexPage;