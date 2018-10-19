import React from 'react'
import App, { Container } from 'next/app'

import "tabler-react/dist/Tabler.css"
import "../css/layout.css"

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
