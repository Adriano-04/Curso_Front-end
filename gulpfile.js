const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const img = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilarSass() {
    return gulp.src('./source/Sass/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/css'))
}

function comprimeImagem() {
    return gulp.src('./source/images/*')
    .pipe(img())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJs() {
    return gulp.src('./source/JS/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/JS'))
}

exports.default = function() {
    gulp.watch('./source/Sass/*.scss', {ignoreInitial: false}, gulp.series(compilarSass));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagem));
    gulp.watch('./source/JS/*.js', {ignoreInitial: false}, gulp.series(comprimeJs));
}