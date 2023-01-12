const sass = require('gulp-sass')(require('sass'));

// Обработка SCSS
const scss = () => {
   return $.gulp.src($.path.scss.src, { sourcemaps: $.app.isDev })
      .pipe($.glp.sassGlob())
      .pipe(sass())
      .pipe($.glp.webpCss())
      .pipe($.glp.autoprefixer())
      .pipe($.glp.shorthand())
      .pipe($.glp.groupCssMediaQueries())
      .pipe($.glp.size({ title: "style.scss" }))
      .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
      .pipe($.glp.rename({ suffix: ".min" }))
      .pipe($.glp.csso())
      .pipe($.glp.size({ title: "style.min.scss" }))
      .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
      .pipe($.browserSync.stream({ match: '**/*.css' }))
}

module.exports = scss;