// Templates with handlebars-layout

const gulp = require('gulp');
const hb = require('gulp-hb');
const layouts = require('handlebars-layouts');
const notify = require('gulp-notify');
const browserSync = require('./serve');

// Connect handlebars-layout with gulp-hb
hb.handlebars.registerHelper(layouts(hb.handlebars));

gulp.task('handlebars', function() {
	return gulp.src('app/*.html')
		.pipe(hb({
			data: 'app/templates/data/**/*.{js,json}',
			helpers: 'app/templates/helpers/*.js',
			partials: 'app/templates/*.hbs',
			bustCache: true
		}))
		.on('error', notify.onError(function (error) {
			console.log('Handlebars error: ' + error);
		}))
		.pipe(gulp.dest('.tmp'))
		.pipe(browserSync.stream());
});
