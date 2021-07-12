const gulp = require('gulp')

module.exports = function font() {
   return gulp.src('./src/font/*.ttf')
      .pipe(gulp.dest('build/src/font'))
}