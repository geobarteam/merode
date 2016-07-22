var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');
var merge = require('merge-stream');

var libPath = './dist/public/lib',
  angularPath = libPath + '/@angular',
  rxjsPath = libPath + '/rxjs',
  appjsPath = './dist/apublic/app/**/*.{js,js.map}',
  cssPath = './dist/public/css',
  testPath = './dist/public/test';


gulp.task('default', ['build:server',
  'copy:lib',
  'copy:bootstrap',
  'build:client',
  'copy:client']);

gulp.task('clean', function () {
  return del('dist')
});

gulp.task('clean:client', function () {
  return del('./client/app/**/*.{js,js.map}')
});
gulp.task('clean:server', function () {
  return del('./server/**/*.{js,js.map}')
});

gulp.task('build:client', function () {
  var tsProject = ts.createProject('client/tsconfig.json');
  var tsResult = gulp.src('client/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/public'))
});

gulp.task('build:server', function () {
  var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
  var tsResult = gulp.src('./server/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
});

gulp.task('copy:lib', function () {

  var angular = gulp.src('./node_modules/@angular/**/*.js', { base: './node_modules/@angular' })
    .pipe(gulp.dest(angularPath));
  var formsUmd = gulp.src('./node_modules/@angular/forms/bundles/forms.umd.js')
    .pipe(gulp.dest(angularPath + '/forms'));
  var rxjs = gulp.src('./node_modules/rxjs/**/*.js', { base: './node_modules/rxjs' })
    .pipe(gulp.dest(rxjsPath));

  var mongoose = gulp.src('./node_modules/mongoose/**/*.js', { base: './node_modules/mongoose' })
    .pipe(gulp.dest(libPath + '/mongoose'));

  gulp.src('./node_modules/core-js/client/shim.min.js').pipe(gulp.dest(libPath + '/core-js/client'))
  gulp.src('./node_modules/zone.js/dist/zone.js').pipe(gulp.dest(libPath + '/zone.js/dist'))
  gulp.src('./node_modules/reflect-metadata/Reflect.js').pipe(gulp.dest(libPath + '/reflect-metadata'))
  gulp.src('./node_modules/systemjs/dist/system.src.js').pipe(gulp.dest(libPath + '/systemjs/dist'))
  gulp.src('./node_modules/jquery/dist/jquery.min.js').pipe(gulp.dest(libPath + '/jquery'));
  gulp.src('./node_modules/jquery/dist/jquery.min.map').pipe(gulp.dest(libPath + '/jquery'));

  gulp.src('./node_modules/jasmine-core/lib/jasmine-core/**/*').pipe(gulp.dest(libPath + '/jasmine-core'));


  return merge(angular, rxjs);
});

gulp.task('copy:bootstrap', function () {
  var bootstrap = './node_modules/bootstrap/dist';
  gulp.src(bootstrap + '/css/bootstrap.min.css').pipe(gulp.dest(cssPath));
  gulp.src(bootstrap + '/js/bootstrap.min.js').pipe(gulp.dest(libPath + '/bootstrap'));

});

gulp.task('copy:client', function () {
  var content = gulp.src('./client/**/*')
    .pipe(gulp.dest('dist/public'));
});

gulp.task('watch', ['watch:client']);

gulp.task('watch:client', function () {
  gulp.watch('client/**/*', ['copy:client', 'build:client']);
});









