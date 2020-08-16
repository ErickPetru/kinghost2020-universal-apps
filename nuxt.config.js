const package = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'universal',
  head: {
    title: 'Conexão KingHost 2020 Universal App Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: package.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap' }
    ]
  },
  loading: { color: '#ffb300' },
  pageTransition: 'jump',
  plugins: [
    'plugins/date-filter.js',
    'plugins/truncate-filter.js'
  ],
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:8080/'
  }
}
