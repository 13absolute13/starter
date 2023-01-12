const webpackStream = require("webpack-stream");

// Обработка JS
const js = () => {
   return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
      .pipe($.glp.babel())
      .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
      .pipe(webpackStream($.app.webpackStream))
      .pipe($.glp.rename("script.min.js"))
      .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
}

module.exports = js;