const gulp = require('gulp');

module.exports = function script() {
   return gulp.src('./src/scripts/*.js')
      .pipe(gulp.dest('build/src/scripts'))
}