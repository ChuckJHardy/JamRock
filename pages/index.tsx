import Link from 'next/link'
import Layout from '../components/Layout';

export default () => (
  <Layout title="Home">
    <h1>Pik Space</h1>
    <p><Link href='/about'><a>About</a></Link></p>
  </Layout>
)
