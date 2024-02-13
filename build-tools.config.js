module.exports = {
  browser: {
    enabled: true,
    name: 'joshuaHome',
  },
  dist: {
    main: 'dist/main',
    from: 'assets/js/**/!(*.test).js',
    to: 'dist',
  },
  images: {
    enabled: true,
    from: 'assets/img/*',
    to: 'browser/img',
  },
  readme: {
    from: ['assets/js/**/!(*.test).js'],
  },
  sass: {
    enabled: true,
    from: 'assets/sass/**/*.+(scss|sass)',
    path: 'assets/sass',
    to: 'browser/css',
  },
  srcPath: 'src',
  test: {
    options: { passWithNoTests: true, testPathIgnorePatterns: ['/node_modules', '/projects'] },
    path: 'assets/js',
    watch: 'assets/js/**/*.js'
  }
}
