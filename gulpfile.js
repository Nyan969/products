const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const prefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const ghPages = require('gulp-gh-pages');

const Data = require('./prepareData');
let dataObj = Data.dataObj;

gulp.task('render', function () {
    gulp.src('src/index.html')
        .pipe(nunjucks.compile({dataObj}))
        .pipe(gulp.dest('dist'));
    gulp.src('src/style/**.css')
        .pipe(prefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/style'));
    gulp.src('src/module/logic.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/module'))
});

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});