var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['examples'], function() {

	browserSync({
		server: {
			baseDir: './examples',
    	index: "examples.html",
			routes: {
				"/bower_components": "./bower_components",
			}
    }
  });
});
