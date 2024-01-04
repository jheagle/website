module.exports = {
  // The name to use for the browser-bundled output file (.js will be appended).
  browserName: 'joshuaHome',

  // The output directory for browser-bundled files.
  browserPath: 'browser',

  cssPath: 'browser/css',

  // The paths for directories to delete before build.
  cleanPaths: ['dist', 'browser'],

  // The name of entry the distribution file.
  distMain: 'dist/main',

  // The output directory for the distribution files.
  distPath: 'dist',

  // The search pattern used for retrieving compiled distribution files.
  distSearch: 'dist/**/*.js',

  // 'true' to only generate node environment files.
  nodeOnly: false,

  // The name of the output documentation markdown file.
  readmeFile: 'README.md',

  // The directory to output the readme file in.
  readmePath: './',

  // Options for formatting the output readme.
  readmeOptions: 'utf8',

  // The file which will be pre-fixed to your README.md output.
  readmeTemplate: 'MAIN.md',

  // Location of files to use for compiling documentation into the readme.
  readmeSearch: ['assets/js/**/!(*.test).js'],
  rootPath: './',
  sassPath: 'assets/sass',
  sassSearch: 'assets/sass/**/*.+(scss|sass)',
  srcPath: 'assets/js',
  srcSearch: 'assets/js/**/!(*.test).js',
  testPath: 'assets/js',
  testOptions: { passWithNoTests: true, testPathIgnorePatterns: ['/node_modules', '/projects'] },
  useSass: true,
  watchSearch: 'assets/js/**/*.js',
}
