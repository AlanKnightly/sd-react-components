var gulpLess = require('gulp-less');
var gulpAutoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var { src, dest, series } = require('gulp');

function less () {
  return src('src/components/**/*.less')
    .pipe(gulpLess())
    .pipe(gulpAutoprefixer())
    .pipe(dest('dist/components/'))
    .pipe(concat('index.css'))
    .pipe(dest('dist/'));

};

exports.default = series(less);

