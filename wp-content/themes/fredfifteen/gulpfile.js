var gulp = require('gulp');
// Load all gulp plugins listed in package.json
var gulpLoadPlugins = require("gulp-load-plugins");
var plugins = gulpLoadPlugins({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});
var dest = 'public/';

gulp.task('js', function() {
 	var jsFiles = ['src/js/*'];
 	gulp.src(plugins.mainBowerFiles().concat(jsFiles))
		.pipe(plugins.filter('*.js'))
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(dest + 'js'));
 });
//
// gulp.task('less', function () {
//   return gulp.src('./less/**/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(gulp.dest('./public/css'));
// });