import React from 'react'
import Layout from '../components/Layout';
import { Grid, Page } from 'tabler-react'

import Stack from '../components/Stack'
import StatsCard from '../components/StatsCard'

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
            subTitle="A great family home situated in a beautiful village renowned for its natural beauty."
            options={options}
          />
          <Grid.Row>
            <Grid.Col>
              <Stack></Stack>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col>
              <div>&nbsp;</div>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row cards={true}>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                total="43"
                label="Crime"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                total="32Mbs"
                label="Broadband"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                total="4G"
                label="Mobile"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                total="Low"
                label="Noise"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                total="Soft"
                label="Water"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <StatsCard
                total="Clean"
                label="Air"
              />
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </Layout>
    )
  }
}
