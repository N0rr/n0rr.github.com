'use strict';

module.exports = {  
  entry: {
    home: './src/home',
    form: './src/form'
  },

  output: {
    path: '/js',
    filename: '[name].js',
    library: 'name'
  },

  resolve: {
    modulesDirectories: ['node_modules', './src']
  }
};
