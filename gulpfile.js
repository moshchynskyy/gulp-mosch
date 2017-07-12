"use strict";
var
  gulp = require("gulp"),
  gutil = require("gulp-util"),
  watch = require("gulp-watch"),
  prefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify"),
  sass = require("gulp-sass"),
  sassGlob = require("gulp-sass-glob"),
  sourcemaps = require("gulp-sourcemaps"),
  fileInclude = require("gulp-file-include"),
  cssmin = require("gulp-clean-css"),
  imagemin = require("gulp-imagemin"),
  pngquant = require("imagemin-pngquant"),
  rimraf = require("rimraf"),
  browserSync = require("browser-sync"),
  reload = browserSync.reload,
  svgmin = require("gulp-svgmin"),
  svgstore = require("gulp-svgstore"),
  rsp = require("remove-svg-properties"),
  addSrc = require("gulp-add-src"),
  plumber = require("gulp-plumber"),
  removeHtmlComments = require('gulp-remove-html-comments'),
  connectPHP = require('gulp-connect-php'),
  env = require('gulp-env'),
  rigger = require('gulp-rigger'),
  path = require('./path'),
  config = {
    server: {
      baseDir: "./app/",
    },
      port:8080
  };

gulp.task("html", function () {
  gulp.src(path.src.html) //Выберем файлы по нужному пути
    .pipe(plumber())
    .pipe(fileInclude({prefix: '@@', basepath: '@file'}))
    .pipe(removeHtmlComments())
    .pipe(gulp.dest(path.app.html)) //Выплюнем их в папку build
    .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task("js", function () {
  gulp.src(path.src.js) //Найдем наш main файл
    .pipe(plumber())
    .pipe(rigger())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.app.js));
});

gulp.task("css", function () {
  gulp.src(path.src.css) //Выберем наш main.scss
    .pipe(sourcemaps.init()) //То же самое что и с js
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass()) //Скомпилируем
    .pipe(prefixer({
      // browsers: ['ie 10']
    })) //Добавим вендорные префиксы
    .pipe(cssmin()) //Сожмем
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.app.css)) //И в build
    .pipe(reload({stream: true}));
});

gulp.task("image", function () {
  gulp.src(path.src.img.compress) //Выберем наши картинки
    .pipe(imagemin({ //Сожмем их
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.app.img)) //И бросим в build
    .pipe(reload({stream: true}));

  gulp.src(path.src.img.noCompress) // Выберем картинки которые не надо сжимать
    .pipe(gulp.dest(path.app.img)) //И бросим в build
    .pipe(reload({stream: true}));
});

gulp.task("svg", function () {
  gulp.src(path.src.svg.compress) //Выберем наши картинки
    .pipe(rsp.stream.remove({
      stylesheets: true,
      properties: [rsp.PROPS_FILL, rsp.PROPS_STROKE, "color", "style", "id", rsp.PROPS_FONT],
      namespaces: ["inkscape", "style"]
    }))
    .pipe(svgmin())
    .pipe(addSrc(path.src.svg.noCompress))
    .pipe(svgstore())
    .pipe(gulp.dest(path.app.svg))
    .pipe(reload({stream: true}));

  gulp.src(path.src.svg.extra)
    .pipe(gulp.dest(path.app.svg))
    .pipe(reload({stream: true}));
});

gulp.task("fonts", function () {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.app.fonts))
});

gulp.task("webserver", function () {
  browserSync(config);
});

gulp.task("build", [
  "html",
  "js",
  "css",
  "fonts",
  "image",
  "svg"
]);

gulp.task("watch", function () {
  watch([path.watch.html], function (event, cb) {
    gulp.start("html");
  });
  watch([path.watch.css], function (event, cb) {
    gulp.start("css");
  });
  watch([path.watch.js], function (event, cb) {
    gulp.start("js");
  });
  watch([path.watch.img], function (event, cb) {
    gulp.start("image");
  });
  watch([path.watch.svg], function (event, cb) {
    gulp.start("svg");
  });
  watch([path.watch.fonts], function (event, cb) {
    gulp.start("fonts");
  });
});

gulp.task("default", ["webserver", "build", "watch"]);
