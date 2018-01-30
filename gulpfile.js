const fs = require('fs');
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const webserver = require('gulp-webserver');

gulp.task('ejs', function() {
  var jsonFile = './src/data/pages.json';
  var tempFile = './src/ejs/template.ejs';
  var json = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  var pages = json.pages;
  var id;

  for (var i = 0; i < pages.length; i++) {
    id = pages[i];

    gulp.src([tempFile, '!./src/ejs/_*.ejs'])
      .pipe(ejs({
          jsonData: pages[i]
      }))
      .pipe(rename(id.id + '.html'))
      .pipe(gulp.dest('./' + id.parentId));
  }
});

gulp.task('sass', function() {
   gulp.src('assets/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      // outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('webserver', function(){
    gulp.src("./") // 公開したい静的ファイルを配置したディレクトリを指定する
        .pipe(webserver({
            host: 'localhost',
            port: 5000,
            livereload: true
        }));
});

gulp.task('watch', function(){
  gulp.watch('./src/ejs/**/*.ejs', ['ejs']);
  gulp.watch("assets/sass/*.scss", ['sass']);
});

gulp.task('default',['watch','webserver','sass']);
