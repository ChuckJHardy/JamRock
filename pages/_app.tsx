import React from 'react'
import App, { Container } from 'next/app'
import NextSeo from 'next-seo'
import { current } from '../services/role'

import SEO from '../next-seo.config'

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

    return (
      <Container>
        <NextSeo config={SEO} />
        <Component {...pageProps} />
      </Container>
    )
  }
}