require('dotenv').load()

var gulp = require('gulp')
var $ = require('gulp-load-plugins')()

//gulp.task('build', [ 'clean' ], function () {
//  gulp.start('deploy')
//})

var paths = {
  css: [ 'public/css/*.less' ],
//  js: [ 'src/**/*.js' ],
//  html: [ 'public/html/**/*.html' ],
//  img: [ 'public/img/**/*.*' ]
}

gulp.task('deploy', [ 'styles' ], function () {
    console.log('consolidated')
})

gulp.task('styles', function () {
  return gulp.src(paths.css)
    .pipe($.less({ relativeUrls: true }))
    .pipe(gulp.dest('public/css/'))
    .pipe($.size())
})