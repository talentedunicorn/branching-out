'use strict';

var gulp = require ('gulp');
var sass = require('gulp-ruby-sass'); 

// Sass 
gulp.task('sass', function() {
	var conf = {
		sourcemap: true,
	};
	
	return sass('./sass/*.scss', conf)
		.on('error', sass.logError)
		.pipe(gulp.dest('./css'));
});

// Watch
gulp.task('sass:watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

// Default
gulp.task('default', function() {
});