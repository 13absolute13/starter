// Сервер
const server = () => {
   $.browserSync.init({
      notify: false,
      server: {
         baseDir: $.path.root
      },
   })
}

module.exports = server;