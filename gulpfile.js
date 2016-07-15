// var gulp = require('gulp');
// var rename = require('gulp-rename');
// var sass = require('gulp-sass');
// // var uglifycss = require("gulp-uglifycss");
//
// // Compiles unminified css.
// gulp.task('sass', function () {
//     return gulp.src('./phoenix_ui_integration/scss/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./phoenix_ui_integration/css/'));
// });
//
// // Makes use of gulp-rename and compiles the minified css file.
// // Putting ['sass'] tells gulp to not run sass-min until sass has finished.
// gulp.task('sass-min', ['sass'], function () {
//     return gulp.src('./phoenix_ui_integration/css/styles.css')
//         // .pipe(uglifycss({
//         //     "uglyComments": true
//         // }))
//         .pipe(rename('styles.min.css'))
//         .pipe(gulp.dest('./phoenix_ui_integration/css/'));
// });
//
// /* The chained build task. As sass-min depends on there being present the unminified css file in the build folder,
// * it has a requirement in it's definition above to not run until 'sass' task has finished.
// * To run this task, just type 'gulp'. This runs the task labelled as 'default' if one exists.
// */
// gulp.task('default',['sass-min', 'sass-min'], function(){
// });
//
//
// //
//
// var gulp = require('gulp');
// var gulpTsConfig = require('gulp-tsconfig');
//
//
//
// gulp.task('default', function() {
//
//     var tsConfig = gulpTsConfig({
//         tsOrder: [
//             '**/app.module.ts',
//             '**/*.module.ts',
//             '**/*.ts'],
//         tsConfig: {
//             "compilerOptions": {
//                 "target": "ES6",
//                 "removeComments": true,
//                 "sourceMap": true,
//                 "noImplicitAny": true,
//                 "out": "./dist/app.js"
//             }
//         }
//     });
//
//     return
//     gulp.src(["./**/*.ts"])
//         .pipe(tsConfig())
//         .pipe(gulp.dest('./web'));
//
//     // --> result is a tsconfig.json file.
// });
