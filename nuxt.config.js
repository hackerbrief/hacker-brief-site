require('dotenv').config()
import pkg from './package'
import webpack from 'webpack'
import axios from 'axios'

export default {
  mode: 'universal',

  head: {
    title: 'Hacker Brief',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Developer Blog and Resource Directory' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  env: {
    gaId: process.env.ANALYTICS_ID,
    apiUrl: process.env.API_URL,
    configUrl: process.env.CONFIG_ENDPOINT,
    postsUrl: process.env.POSTS_ENDPOINT,
    toolsUrl: process.env.TOOLS_ENDPOINT,
    articleUrl: process.env.ARTICLE_ENDPOINT
  },

  loading: { color: '#22f025' },

  css: [ '~/assets/_app.css' ],

  styleResources: {
    scss: './assets/*.scss'
  },

  plugins: [
    '~/plugins/api.js',
    '~/plugins/seo.js',
    '~/plugins/util.js',
    {
      src: '~/plugins/icons.js',
      ssr: false
    }
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-analytics', {
      id: `${process.env.gaId}`,
      dev: false
    }]
  ],

  generate: {
    routes: function() {
      return axios.get(`${process.env.apiUrl}/${process.env.postsUrl}`)
        .then((res) => {
          return res.data.map((post) => {
            return `/article/${post.slug}`
          })
        })
    }
  },

  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
