import styled from '../styled'
import Link from 'next/link';
import { useStore } from '../stores'

function IndexPage() {
  const store = useStore()
  store.setEnvironments(process.env)

  return (
    <div>
      <p>App Information</p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <ul>
        <li>token: {store.tokens}</li>
        <li>env: {store.environments.get('BACKEND_URL')}</li>
      </ul>
    </div>
  )
}

export default IndexPage;