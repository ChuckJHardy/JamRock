import React from 'react'
import Layout from '../components/Layout';
import { Grid, Page } from 'tabler-react'

import Stack from '../components/Stack'

export default class extends React.PureComponent {
  componentDidMount () {
    const isProduction = process.env.NODE_ENV === 'production'

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
    const options = (
      <h1 className="page-title">£410,000</h1>
    )

    return (
      <Layout title="Home">
        <Page.Content>
          <Page.Header
            title="Higher Moor"
            subTitle="A great family home situated in a beautiful village renound for it's natural beauty."
            options={options}
          />
          <Grid.Row>
            <Grid.Col>
              <Stack></Stack>
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </Layout>
    )
  }
}
