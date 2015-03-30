var gulp = require('gulp');
var plumber = require( 'gulp-plumber' );
var watch = require( 'gulp-watch' );
var less = require('gulp-less');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var utility = require('gulp-util');
var bowerMain = require('bower-main');
var uglify = require('gulp-uglify');

var onError = function( err ) {
  console.log( 'An error occurred:', err.message );
  this.emit( 'end' );
}

// var bower_dir = 'src/vendor/'

var dest = 'public/';


gulp.task('js', function() {
	var themejs = 'src/js/*';
	var bowerjs = bowerMain('js', 'min.js');
 	return gulp.src(bowerjs.normal)
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(dest + 'js'));
 });

// Compile LESS
 gulp.task('less', function () {
   gulp.src('src/css/main.less') //path to your main less file
	 .pipe( plumber( { errorHandler: onError } ) )
     .pipe(less())
	 .pipe(rename('fredfifteen.css'))
     .pipe(gulp.dest('./public/css')); // your output folder
 });
