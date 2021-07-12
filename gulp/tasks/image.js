const gulp = require('gulp');
const imageMin = require('gulp-image');

module.exports = function image() {
  return gulp.src('./src/img/*')
    .pipe(imageMin())
    .pipe(gulp.dest('build/src/img'));
};
