import * as React from 'react'
import Link from 'next/link'

class AboutPage extends React.Component {

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      </div>
    )
  }
}

export default AboutPage