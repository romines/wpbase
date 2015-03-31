var gulp = require('gulp');
var plumber = require( 'gulp-plumber' );
// var watch = require( 'gulp-watch' );
var less = require('gulp-less');
var mainBowerFiles = require('main-bower-files');
// var jshint = require('gulp-jshint');
var filter = require('gulp-filter');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

var onError = function( err ) {
  console.log( 'An error occurred:', err.message );
  this.emit( 'end' );
};

var filterByExtension = function(extension){
    return filter(function(file){
        return file.path.match(new RegExp('.' + extension + '$'));
    });
};

dest = 'public/';

gulp.task('js', function() {
  
  var bowerFiles = mainBowerFiles();

  if(!bowerFiles.length) {
    gutil.log('No bower files found');
    return;
  }

  var jsFilter = filterByExtension('js');

 	gulp.src(bowerFiles)
    .pipe(jsFilter)
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(dest + 'js'))
    .pipe(jsFilter.restore());
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
