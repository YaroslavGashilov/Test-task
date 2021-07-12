const gulp = require('gulp')


const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/styles')
const serve = require('./gulp/tasks/serve')
const image = require('./gulp/tasks/image')
const fonts = require('./gulp/tasks/fonts')
const scripts = require('./gulp/tasks/scripts')


module.exports.image = gulp.series(image)
module.exports.start = gulp.series(pug2html)
module.exports.styles = gulp.series(styles)
module.exports.fonts = gulp.series(fonts)
module.exports.scripts = gulp.series(scripts)
module.exports.serve = () => {
   gulp.watch('./src/**/*.scss', './src/**/*.pug', pug2html, styles)
};

const build = gulp.parallel(image, pug2html, styles, fonts, scripts)
const develop = gulp.parallel(build, serve)

module.exports.dev = gulp.series(develop)
module.exports.default = gulp.series(build)