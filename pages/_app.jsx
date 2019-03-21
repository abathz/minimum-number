import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import '../src/assets/index'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Tokopedia Coding Test</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}