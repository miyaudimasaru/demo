var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    uglify = require("gulp-uglify"),
    less = require('gulp-less'),
    cleancss = require('gulp-clean-css');
    browserify = require('browserify'),
    babelify = require('babelify'),
    babel = require('gulp-babel');
    plumber = require('gulp-plumber');
    sourcemaps = require("gulp-sourcemaps"); /* ソースマップを出力させる場合 */
    source = require('vinyl-source-stream');

gulp.task('less', function() {
  return gulp.src('less/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('css'));
});

// cssファイル圧縮
gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(plumber())
        .pipe(cleancss())
        .pipe(gulp.dest('css'));
});
//es2015
// jsファイル圧縮
gulp.task('minify-js', function() {
      return gulp.src('./js/*.js')
        .pipe(plumber())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('js/min/'));
});
// トランスパイル
gulp.task('browserify', function() {
    browserify('./common/js/jsx/app.jsx')
        .transform(babelify, { presets: ['es2015', 'react'] })
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./common/js/'))
        .on('end',function(){
            gulp.src(["./common/js/bundle.js"])
                .pipe(plumber())
                .pipe(uglify({mangle: false}))
                .pipe(gulp.dest("./common/js/min"))
        })
});

// watch
gulp.task('watch',function(){
    gulp.watch('./common/js/jsx/*.jsx', ['browserify']);
    gulp.watch("less/*.less", ['less']);
    gulp.watch("css/*.css", ['minify-css']);
    gulp.watch("js/*.js", ['minify-js']);
});

gulp.task("default",['watch']);
