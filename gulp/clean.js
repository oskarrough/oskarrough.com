const gulp = require('gulp');
const del = require('del');

gulp.task('clean', () => {
	return del([
		'.tmp',
		'dist'
	]);
});

// If you want to exclude files remember https://github.com/sindresorhus/del#beware
