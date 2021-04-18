"use strict";

// before srart install npm install webp-converter@2.2.3 --save-dev

let projectFolder = require("path").basename(__dirname);
let sourceFolder = "#src";

let fs = require("fs");

//! Прописанные пути
const path = {
  build: {
    html: projectFolder + "/",
    css: projectFolder + "/css/",
    js: projectFolder + "/js/",
    img: projectFolder + "/img/",
    icons: projectFolder + "/icons/",
    fonts: projectFolder + "/fonts/",
  },
  src: {
    html: [sourceFolder + "/*.html", "!" + sourceFolder + "/_*.html"],
    css: sourceFolder + "/scss/style.scss",
    js: sourceFolder + "/js/main.js",
    img: sourceFolder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    icons: sourceFolder + "/icons/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: sourceFolder + "/fonts/**/*.{eot,ttf,woff,woff2,svg}",
  },
  watch: {
    html: sourceFolder + "/**/*.html",
    css: sourceFolder + "/scss/**/*.scss",
    js: sourceFolder + "/js/**/*.js",
    img: sourceFolder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    icons: sourceFolder + "/icons/**/*.{jpg,png,svg,gif,ico,webp}",
  },
  clean: "./" + projectFolder + "/"
};



const {
  src,
  dest
} = require("gulp"),
  gulp = require("gulp"),
  browsersync = require("browser-sync").create(),
  fileinclude = require("gulp-file-include"),
  del = require("del"),
  scss = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  groupMedia = require("gulp-group-css-media-queries"),
  cleanCss = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  imagemin = require("gulp-imagemin"),
  webp = require("gulp-webp"),
  webphtml = require("gulp-webp-html"),
  webpcss = require("gulp-webpcss"),
  ttf2woff = require("gulp-ttf2woff"),
  ttf2woff2 = require("gulp-ttf2woff2"),
  fonter = require("gulp-fonter"),
  htmlmin = require("gulp-htmlmin"),
  webpack = require("webpack-stream");


//! Обновления браузера
function browserSync() {
  browsersync.init({
    server: {
      baseDir: "./" + projectFolder + "/"
    },
    port: 3000,
    notify: false
  });
}


//! Работа с HTML
function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(webphtml())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}


//! Работы с CSS
function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "expanded"
      })
    )
    .pipe(
      groupMedia()
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        cascade: true
      })
    )
    .pipe(webpcss())
    .pipe(dest(path.build.css))
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}


//! Подключение шрифтов
function fontsStyle() {
  const fileDest = '/scss/utils/fonts.scss';
  let file_content = fs.readFileSync(sourceFolder + fileDest);
  if (file_content == '') {
    fs.writeFile(sourceFolder + fileDest, '', cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(sourceFolder + fileDest, '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    });
  }
}

function cb() {}

//! Работа с JS
function js() {
  return src(path.src.js)
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'main.js'
      },
      watch: false,
      devtool: "source-map",
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage"
                }]
              ]
            }
          }
        }]
      }
    }))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

//! Обработка картинок
function images() {
  return src(path.src.img)
    .pipe(
      webp({
        quality: 70
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
      imagemin({
        progressive: true,
        svgoPluggins: [{
          removeViewBox: false
        }],
        interlaced: true,
        optimizaionLevel: 3,
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.icons))
    .pipe(
      webp({
        quality: 70
      })
    )
    .pipe(dest(path.build.icons))
    .pipe(src(path.src.icons))
    .pipe(
      imagemin({
        progressive: true,
        svgoPluggins: [{
          removeViewBox: false
        }],
        interlaced: true,
        optimizaionLevel: 3,
      })
    )
    .pipe(dest(path.build.icons))
    .pipe(browsersync.stream());
}

//!  Работа со шрифтами
function fonts() {
  src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts));
  src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts));
}

//! Удаление папки dist
function clean() {
  return del(path.clean);
}

//! Слежка за файлами для обновления
function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

let build = gulp.series(clean, gulp.parallel(css, html, js, images, fonts), fontsStyle);
let watch = gulp.parallel(browserSync, build, watchFiles);

//! Дружим gulp с функциями путем их экспорта
exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.html = html;
exports.css = css;
exports.js = js;
exports.watch = watch;
exports.default = watch;

//! Созданная задача для конвертации otf шрифтов в ttf
gulp.task("otf2ttf", function () {
  return src(sourceFolder + "/fonts/*.otf")
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(dest(sourceFolder + "/fonts/"));
});