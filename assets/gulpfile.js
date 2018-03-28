let gulp = require('gulp');
let sass = require('gulp-sass');
let minifyCSS = require('gulp-csso');
let concat = require('gulp-concat');
let sourcemaps = require('gulp-sourcemaps');
let htmlmin = require('gulp-htmlmin');
let watch = require('gulp-watch');

gulp.task('sass', function(){
    return gulp.src('css/sass/styles.scss')
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(gulp.dest('../dist/css/'))
  });
  
gulp.task('js', function(){
return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'js/app.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../dist/js/'))
});

gulp.task('htmlmin', function() {
    return gulp.src('*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('../dist/'));
  });

gulp.task('default', [ 'htmlmin', 'sass', 'js' ]);