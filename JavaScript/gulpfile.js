var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');


gulp.task('sass', function() {
  return gulp.src('assets/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('public/css/'));
});
gulp.task('webserver', function(){
    gulp.src("./") // 公開したい静的ファイルを配置したディレクトリを指定する
        .pipe(webserver({
            host: 'localhost',
            port: 4000,
            livereload: true
        }));
});

// watch
gulp.task('watch',function(){
    gulp.watch("assets/sass/*.scss", ['sass']);
});

gulp.task("default",['watch','webserver']);
