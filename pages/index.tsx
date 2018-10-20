import React from 'react'
import Layout from '../components/Layout';
import { Grid, Page } from 'tabler-react'

export default class extends React.PureComponent {
  componentDidMount () {
    const isProduction = process.env.NODE_ENV === 'production'
    console.log(isProduction)
    if (isProduction && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful', registration)
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render () {
    return (
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
  }
}