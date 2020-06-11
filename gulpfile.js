"use strict";

var gulp = require("gulp");
var stylus = require("gulp-stylus");

gulp.task("stylus-ui", function () {
  return gulp.src("./styl/ui.styl").pipe(stylus()).pipe(gulp.dest("./css"));
});

gulp.task("stylus-style", function () {
    return gulp.src("./styl/style.styl").pipe(stylus()).pipe(gulp.dest("./css"));
  });

gulp.task("stylus:watch", function () {
    gulp.watch("./styl/*.styl", gulp.series("stylus-ui", "stylus-style"));
  });

exports.default = gulp.series("stylus-ui", "stylus-style", "stylus:watch");
