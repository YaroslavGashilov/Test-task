const gulp = require('gulp')

const pug2html = require('./pug2html')
const styles = require('./styles')

const server = require('browser-sync').create()

function reload() {
   server.reload()
}

module.exports =  function serve(cb) {
   server.init({
      server: 'build',
      notify:false,
      open: true,
      cors: true,
   })

   gulp.watch('src/pages/**/*.pug', gulp.series(pug2html, cb => 
      gulp.src('build').pipe(server.stream().on('end'), cb)))
   gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => 
      gulp.src('build/css').pipe(server.stream()).on('end', cb)))
   gulp.watch('build/*.html').on('change', reload)

   return cb()
}