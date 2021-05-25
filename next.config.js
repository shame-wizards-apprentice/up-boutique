module.exports = {
    target: 'serverless',
    options: {
      dist: 'out_publish',
    },
    images: {
      domains: ['media.graphcms.com']
    }
  };