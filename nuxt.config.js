require('dotenv').config()
import pkg from './package'

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
    apiUrl: process.env.API_URL,
    configUrl: process.env.CONFIG_ENDPOINT,
    postsUrl: process.env.POSTS_ENDPOINT,
    toolsUrl: process.env.TOOLS_ENDPOINT,
    articleUrl: process.env.ARTICLE_ENDPOINT
  },

  loading: { color: '#22f025' },

  css: [ '~/assets/app.css' ],

  styleResources: {
    scss: './assets/*.scss'
  },

  plugins: [
    '~/plugins/api.js',
    '~/plugins/util.js'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],

  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
