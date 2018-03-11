/*
	Instead of one giant gulpfile, we have one file per task inside
	the gulp folder.

	All tasks are required automatically here. For instance, when you run
	`gulp` it'll run the task defined in `gulp/default.js`
*/

// Require all tasks in gulp, including subfolders
const requireDir = require('require-dir')
requireDir('./gulp', { recurse: true })
