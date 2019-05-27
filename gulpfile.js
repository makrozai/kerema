// Archivo gulpfile.json

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    webserver = require('gulp-webserver'),
    autoprefixer = require('gulp-autoprefixer'),
    fontmin = require('gulp-fontmin');

gulp.task('default', ['uglify', 'scss', 'pug', 'imagemin', 'fontmin', 'webserver', 'watch']);

// compila archivos ES6 en ES5
gulp.task('uglify', function() {
    gulp.src('source/js/*.js')
        .pipe(plumber())
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

// compilar archivos SCSS  en CSS
gulp.task('scss', function() {
    gulp.src('source/scss/*.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({browsers: ['last 3 versions', '> 5%', 'Firefox ESR']}))
        .pipe(gulp.dest('dist/css'));
});

// compila archivos PUG(JADE) en HTML
gulp.task('pug', function() {
    gulp.src('source/templates/*.pug')
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./'));
});

// comprime archivos de imagen(JPG,JPEG, PNG,GIF,SVG)
gulp.task('imagemin', function() {
    gulp.src('source/img/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// genera archivos de fuente compatibles a partir de TTF
gulp.task('fontmin', function() {
    gulp.src('source/fonts/**/*.{ttf,eot,svg,woff}')
    //.pipe(fontmin({text: '天地玄黄 宇宙洪荒'}))
    .pipe(gulp.dest('dist/fonts'));
});

// genera un servidor local
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

// escucha todos los cambios
gulp.task('watch', function() {
    gulp.watch('source/js/**/*.js', ['uglify']);
    gulp.watch('source/scss/**/*.scss', ['scss']);
    gulp.watch('source/templates/**/*.pug', ['pug']);
    gulp.watch('source/fonts/**/*.ttf', ['fontmin']);
    gulp.watch('source/img/*.{jpg,jpeg,png,gif}', ['imagemin']);
});