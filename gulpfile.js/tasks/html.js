// Обработка HTML
const html = () => {
   return $.gulp.src($.path.html.src)
      .pipe($.glp.fileInclude())
      .pipe($.glp.webpHtml())
      .pipe($.gulp.dest($.path.html.dest))
      .pipe($.browserSync.stream())
}

module.exports = html;