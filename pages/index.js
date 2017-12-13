import React from 'react'
import Router from 'next/router'

import Head from '../components/head.js'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Head></Head>
        <h1>Hello World</h1>
      </div>
    )
  }
}
