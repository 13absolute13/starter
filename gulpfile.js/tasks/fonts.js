// Обработка FONTS
const fonts = () => {
   return $.gulp.src($.path.fonts.src)
      .pipe($.glp.newer($.path.fonts.dest))
      .pipe($.glp.fonter($.app.fonter))
      .pipe($.gulp.dest($.path.fonts.dest))
      .pipe($.glp.ttf2woff2())
      .pipe($.gulp.dest($.path.fonts.dest))
}

module.exports = fonts;