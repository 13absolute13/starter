global.$ = {

   // Пакеты
   gulp: require("gulp"),
   glp: require("gulp-load-plugins")(),
   browserSync: require("browser-sync").create(),

   // Конфигурация
   path: require("./config/path.js"),
   app: require("./config/app.js"),
}

// Задачи
const requireDir = require("require-dir");
const tasks = requireDir("./tasks", { recurse: true });

// Наблюдатель
const watcher = () => {
   $.gulp.watch($.path.html.watch, tasks.html);
   $.gulp.watch($.path.scss.watch, tasks.scss);
   $.gulp.watch($.path.js.watch, tasks.js);
   $.gulp.watch($.path.img.watch, tasks.img);
   $.gulp.watch($.path.fonts.watch, tasks.fonts);
}

const build = $.gulp.series(tasks.clear, $.gulp.parallel(tasks.html, tasks.scss, tasks.js, tasks.img, tasks.fonts));
const dev = $.gulp.series(build, $.gulp.parallel(watcher, tasks.server));

// Задачи
exports.html = tasks.html;
exports.scss = tasks.scss;
exports.js = tasks.js;
exports.img = tasks.img;
exports.fonts = tasks.fonts;

// Сборка
exports.default = $.app.isProd ? build : dev;