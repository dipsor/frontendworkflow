/**
 * plugins
 */
var gulp 		= require('gulp'),
	gutil 		= require('gulp-util'),
	compass 	= require('gulp-compass'),
	browserify 	= require('gulp-browserify'),
	debug 		= require('gulp-debug'),
	browserSync = require('browser-sync'),
	reload 		= browserSync.reload,
	concat 		= require('gulp-concat'),
	gulpif 		= require('gulp-if'),
	gulpify 	= require('gulp-uglify');

var env = 'dev';
// env = 'prod';

var sources = 'sources/';
var outputDir = 'assets/';


/**
 * config object
 * @type {Object}
 */
var config = {	
	url : 'http://localhost:8888/portfolio/alfatisk/',

	sassSources: [sources+'sass/styles.scss'],
	sassStyle : ( env === 'prod' ) ? 'compressed' : 'expanded',
	sassInputDir : sources+'sass/', 
	sassOutputDir : outputDir+'css/',

	jsSources : sources+'/js/**/*.js',
	jsOutputDir : outputDir+'js/',

	bSFiles : [
		'**/*.php',
		'**/*.js',
		'**/*.{png,jpg,gif,svg}'
	]
}

gulp.task( 'sass', function() {
	gulp.src( config.sassSources )
		.pipe( compass({
			sass : config.sassInputDir,
			style : config.sassStyle
		}))
		.on( 'error', gutil.log )
		.pipe( gulp.dest( config.sassOutputDir ) )
});

gulp.task( 'js', function() {
	gulp.src( config.jsSources )
		.pipe( concat( 'script.js' ) )
		.pipe( browserify() )
		.pipe( gulpif( env == 'prod', gulpify() ) )
		.on( 'error', gutil.log )
		.pipe( gulp.dest( config.jsOutputDir ) )
});

gulp.task( 'browser-sync', function() {
	browserSync.init( config.bSFiles, {
		proxy : config.url,
		injectChanges : true
	});
});

gulp.task( 'watch', function() {
	gulp.watch( sources+'sass/**/*.scss', ['sass'] ).on("change", reload);
	gulp.watch( sources+'js/**/*.js', ['js'] );
});

gulp.task( 'default', [ 'sass', 'js', 'watch', 'browser-sync' ],  function() {
	gutil.log('Jedeeeeem !!!!');
});