module.exports = {
  app: { //Тут мы укажем куда складывать готовые после сборки файлы
    html: "app/",
    js: "app/js/",
    css: "app/css/",
    img: "app/img/",
    fonts: "app/fonts/",
    svg: "app/svg/"
  },
  src: { //Пути откуда брать исходники
    html: "src/*.html", //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    js: "src/js/main.js",//В стилях и скриптах нам понадобятся только main файлы
    css: "src/css/main.scss",
    img: {
      compress: ["src/img/**/*.*", "!src/img/no-compress/**/*.*"], //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
      noCompress: "src/img/no-compress/**/*.*"
    },
    svg: {
      compress: ["src/svg/**/*.svg", "!src/svg/no-compress/**/*.svg", "!src/svg/extra/**/*.svg"],
      noCompress: "src/svg/no-compress/**/*.svg",
      extra: "src/svg/extra/**/*.svg"
    },
    fonts: "src/fonts/**/*.*",
    lib: {
      js: "src/js/lib/**/*.js",
      css: "src/css/lib/**/*.scss"
    }
  },
  watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    html: "src/**/*.html",
    js: "src/js/**/*.js",
    css: "src/css/**/*.scss",
    img: "src/img/**/*.*",
    svg: "src/svg/**/*.*",
    fonts: "src/fonts/**/*.*"
  },
};