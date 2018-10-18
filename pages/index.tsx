import Layout from '../components/Layout';
import { Grid, Page } from 'tabler-react'

export default () => (
  <Layout title="Home">
    <Page.Content title="Dashboard">
      <Grid.Row cards={true}>
        <Grid.Col width={6} sm={4} lg={2}>
          <p>This is the homepage</p>
        </Grid.Col>
      </Grid.Row>
    </Page.Content>
  </Layout>
)