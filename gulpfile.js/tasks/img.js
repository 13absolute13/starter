// Обработка IMG
const img = () => {
   return $.gulp.src($.path.img.src)
      .pipe($.glp.newer($.path.img.dest))
      .pipe($.glp.webp())
      .pipe($.gulp.dest($.path.img.dest))
      .pipe($.gulp.src($.path.img.src))
      .pipe($.glp.newer($.path.img.dest))
      .pipe($.glp.if($.app.isProd, ($.glp.imagemin($.app.imageMin))))
      .pipe($.gulp.dest($.path.img.dest))
}

module.exports = img;