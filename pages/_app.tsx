import React from 'react'
import App, { Container } from 'next/app'
import { current } from '../services/role'

import "tabler-react/dist/Tabler.css"
import "../css/layout.css"

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const globalProps = {
      role: current(ctx.query.role)
    }

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps,
      globalProps
    }
  }

  render () {
    const { Component, pageProps } = this.props

    console.log(this.props)

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}