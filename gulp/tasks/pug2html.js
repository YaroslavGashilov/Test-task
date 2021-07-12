const gulp = require('gulp')
const pug = require('gulp-pug')
const htmlMin = require('gulp-html-minifier')

module.exports = function pug2html() {
   return gulp.src('./src/pages/includes/*.pug')
      .pipe(pug())
      .pipe(htmlMin())
      .pipe(gulp.dest('build'))
}