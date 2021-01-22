var sass = require("gulp-sass");
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync");
const uncss = require("gulp-uncss");

gulp.task("sass", function (cb) {
  return gulp
    .src("./assets/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({ outputStyle: "compressed", sourceMap: true }).on(
        "error",
        sass.logError
      )
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./assets/css"))
    .pipe(browserSync.stream());
});
gulp.task("sass:watch", function (cb) {
  return gulp.watch("./assets/scss/*.scss", gulp.series("sass"));
});

gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    port: 34567,
    ui: {
      port: 34568,
    },
  });
});
gulp.task("reload", function () {
  gulp
    .watch(["./index.html", "./assets/css/*", "./assets/js/*"])
    .on("change", browserSync.reload);
});
exports.default = gulp.parallel("serve", "sass:watch", "reload");
