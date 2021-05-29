const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  withSass({
    target: 'serverless',
  })], {
  images: {
    loader: 'imgix',
    path: '',
    domains: ['*'],
  },
});
