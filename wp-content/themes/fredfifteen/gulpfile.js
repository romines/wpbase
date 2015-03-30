var gulp = require('gulp');
var plumber = require( 'gulp-plumber' );
// var watch = require( 'gulp-watch' );
var less = require('gulp-less');
// var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
// var utility = require('gulp-util');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

var onError = function( err ) {
  console.log( 'An error occurred:', err.message );
  this.emit( 'end' );
};

var dest = 'public/';


gulp.task('js', function() {
	var themejs = 'src/js/*';
	var bowerjs = bowerMain('js').normal;
 	return gulp.src(bowerjs)
		.pipe( plumber( { errorHandler: onError } ) )
		.pipe(concat(themejs))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(dest + 'js'));
 });

// CSS
gulp.task('css', function () {
	
	return gulp.src('src/css/main.less') //path to your main less file
		.pipe( plumber( { errorHandler: onError } ) )
		.pipe(less())
		// .pipe(minifyCSS())
		.pipe(rename('fredfifteen.css'))
		.pipe(gulp.dest(dest + 'css')); // your output folder
 });

// What does 'gulp' command do?
 
 gulp.task('default', ['js', 'css']);