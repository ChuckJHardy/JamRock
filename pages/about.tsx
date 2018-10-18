import Layout from '../components/Layout';
import { Grid, Page } from 'tabler-react'

export default () => (
  <Layout title="About">
    <Page.Content title="Dashboard">
      <Grid.Row cards={true}>
        <Grid.Col width={6} sm={4} lg={2}>
          <p>This is the about page</p>
        </Grid.Col>
      </Grid.Row>
    </Page.Content>

  </Layout>
)