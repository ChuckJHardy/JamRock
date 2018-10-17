import Link from 'next/link'
import Layout from '../components/Layout';

export default () => (
  <Layout title="About">
    <p>This is the about page</p>
    <p><Link href='/'><a>Home</a></Link></p>
  </Layout>
)