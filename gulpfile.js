var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');
var merge = require ('merge-stream');

var libPath= './dist/public/lib' ,
angularPath = libPath + '/@angular',
rxjsPath = libPath + '/rxjs',
appjsPath = './dist/apublic/app/**/*.{js,js.map}';


gulp.task('default', ['build:server','copy:lib','copy:client', 'build:client']);

gulp.task('clean', function(){
    return del('dist')
});

gulp.task('build:server', function () {
	var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
	return gulp.src(path.resolve('./server/**/*.ts'))
		.pipe(ts(tsProject))
		.js
		.pipe(gulp.dest(path.resolve('./dist')))
});

gulp.task('copy:lib', function () {
  var angular = gulp.src('./node_modules/@angular/**/*.js', {base: './node_modules/@angular'})
                .pipe(gulp.dest(angularPath));
  var rxjs = gulp.src('./node_modules/rxjs/**/*.js', {base: './node_modules/rxjs'})
                .pipe(gulp.dest(rxjsPath));
                
  var mongoose = gulp.src('./node_modules/mongoose/**/*.js', {base: './node_modules/@angular'})
                .pipe(gulp.dest(libPath +'/mongoose'));
                
  gulp.src('./node_modules/core-js/client/shim.min.js').pipe(gulp.dest(libPath + '/core-js/client'))
  gulp.src('./node_modules/zone.js/dist/zone.js').pipe(gulp.dest(libPath + '/zone.js/dist'))
  gulp.src('./node_modules/reflect-metadata/Reflect.js').pipe(gulp.dest(libPath + '/reflect-metadata'))
  gulp.src('./node_modules/systemjs/dist/system.src.js').pipe(gulp.dest(libPath + '/systemjs/dist'))
                
  return merge(angular, rxjs);
});

gulp.task('copy:client', function(){
  var content = gulp.src('./client/**/*')
    .pipe(gulp.dest('dist/public'));
});

gulp.task('build:client', function(){
    var tsProject = ts.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist/public'))
});

gulp.task('watch:client', function(){
  gulp.watch('client/**/*', ['copy:client', 'build:client']);
})







