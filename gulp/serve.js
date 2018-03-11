const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Export our instance of browserSync to other tasks.
module.exports = browserSync;

/**
 * Development server
 */
gulp.task('serve', ['templates', 'styles', 'scripts'/*, 'icons'*/], () => {
	browserSync.init({
		notify: false,
		port: 9000,
		server: {
			baseDir: ['.tmp', 'app']
		}
	});

	// Reload the server when these files change.
	gulp.watch([
		'app/images/**/*'
	]).on('change', browserSync.reload);

	// Run tasks (that might reload the server) when these files change.
	gulp.watch(['app/*.html', 'app/templates/**/*.{hbs,js,json}'], ['handlebars']);
	// gulp.watch('app/**/*.jade', ['jade']);
	gulp.watch('app/styles/**/*.scss', ['styles']);
	gulp.watch('app/scripts/**/*.js', ['scripts']);
	/*gulp.watch('app/images/icons/*.{svg,png}', ['icons']);*/
});

/**
 * Dist server (test your build)
 */
gulp.task('serve:dist', () => {
	browserSync.init({
		notify: false,
		port: 9000,
		server: {
			baseDir: ['dist']
		}
	});
});

// Alias
gulp.task('s', ['serve']);
