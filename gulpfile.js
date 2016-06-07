var gulp = require('gulp');
var merge = require ('merge-stream');
var rimraf = require("rimraf");
var gulpRimRaf = require('gulp-rimraf')

var jsPath = './public/js' 
var angularPath = jsPath + '/@angular';
var rxjsPath = jsPath + '/rxjs';
var appjsPath = './public/app/**/*.{js,js.map}';


gulp.task('default', ['copy:libraries']);

gulp.task('copy:libraries', function () {
  var angular = gulp.src('./node_modules/@angular/**/*.js', {base: './node_modules/@angular'})
                .pipe(gulp.dest(angularPath));
  var rxjs = gulp.src('./node_modules/rxjs/**/*.js', {base: './node_modules/rxjs'})
                .pipe(gulp.dest(rxjsPath));
  gulp.src('./node_modules/core-js/client/shim.min.js').pipe(gulp.dest(jsPath + '/core-js/client'))
  gulp.src('./node_modules/zone.js/dist/zone.js').pipe(gulp.dest(jsPath + '/zone.js/dist'))
  gulp.src('./node_modules/reflect-metadata/Reflect.js').pipe(gulp.dest(jsPath + '/reflect-metadata'))
  gulp.src('./node_modules/systemjs/dist/system.src.js').pipe(gulp.dest(jsPath + '/systemjs/dist'))
                
  return merge(angular, rxjs);
});

gulp.task('clean', ['clean:js']);
gulp.task('clean:app', function(){
    return gulp.src(appjsPath, { read:false })
        .pipe(gulpRimRaf());
});
gulp.task('clean:js', ['clean:angular', 'clean:rxjs'])
gulp.task('clean:angular', function (cb) {
   rimraf(angularPath, cb);
});

gulp.task('clean:rxjs', function (cb) {
   rimraf(rxjsPath, cb);
});

