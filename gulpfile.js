const gulp = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')(require('sass'))
const prefix = require('gulp-autoprefixer')

/**
 * Compile files from _scss into both _site/css (for live injecting) and site
 * (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src('assets/sass/main.sass')
    .pipe(sass({
      includePaths: ['css'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('assets/css'))
})

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task(
  'browser-sync',
  gulp.parallel(['sass'], function () {
    browserSync({
      server: {
        baseDir: '_site'
      },
      notify: false
    })
  })
)

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch('assets/sass/**', ['sass'])
})

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.series(['browser-sync', 'watch']))
