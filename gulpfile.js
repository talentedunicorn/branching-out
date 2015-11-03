'use strict';

var gulp = require ('gulp');
var sass = require('gulp-ruby-sass'); 
var connect = require('gulp-connect');

// Sass 
gulp.task('sass', function() {
	var conf = {
		sourcemap: true,
	};
	
	return sass('./sass/*.scss', conf)
		.on('error', sass.logError)
		.pipe(gulp.dest('./css'))
		.pipe(connect.reload());
});

// Connect 
gulp.task('connect', function() {
	connect.server({
		root: './',
		livereload: true,
	});
});

// Server
gulp.task('html', function() {
	gulp.src('./*.html')
		.pipe(connect.reload());
});

// Watch
gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
	gulp.watch(['./*.html'], ['html']);
});

// Default
gulp.task('default', ['connect', 'watch'], function() {
	console.log('Launching noyzine project..');
});
