import React from 'react'
import Router from 'next/router'
import 'isomorphic-unfetch'

import config from '../util/config.js'

import Head from '../components/head.js'

export default class extends React.Component {
  static async getInitialProps() {
    const res = await fetch(config.env.apiPath + '/api/mock_posts')
    const posts = await res.json()
    return { posts: posts[0] }
  }

  render () {
    return (
      <div>
        <Head></Head>
        <h1>Hello World</h1>
        <div>title: {this.props.posts["title"]}</div>
        <div>content: {this.props.posts["content"]}</div>
      </div>
    )
  }
}
