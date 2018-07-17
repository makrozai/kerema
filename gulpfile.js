// Archivo gulpfile.json

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin'),
    webserver = require('gulp-webserver');

gulp.task('default', ['uglify', 'scss', 'pug', 'imagemin', 'webserver', 'watch']);

gulp.task('uglify', function() {
    gulp.src('source/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scss', function() {
    gulp.src('source/scss/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('pug', function() {
    gulp.src('source/templates/*.pug')
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./'));
});

gulp.task('imagemin', function() {
    gulp.src('source/img/*.{jpg,jpeg,png,gif}')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('watch', function() {
    gulp.watch('source/js/*.js', ['uglify']);
    gulp.watch('source/scss/*.scss', ['scss']);
    gulp.watch('source/templates/*.pug', ['pug']);
    gulp.watch('source/img/*.{jpg,jpeg,png,gif}', ['imagemin']);
});