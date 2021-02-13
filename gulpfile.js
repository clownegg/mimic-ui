/* eslint-disable @typescript-eslint/no-var-requires */
const sass = require('gulp-dart-sass');
const { src, dest, series } = require('gulp');

const compile = () => {
  return src('src/**/*.scss')
    .pipe(sass.sync({ outputStyle: 'compressed' }))
    .pipe(dest('dist'));
};

exports.build = series(compile);
