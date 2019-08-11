var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs');
    del         = require('del');

gulp.task('browser-sync', function() {
    browserSync({ 
        server: { 
            baseDir: 'app'
        },
        notify: false 
    });
});

gulp.task('scripts', function() {
    return gulp.src(['app/js/**/*.js', 'app/libs/**/*.js'])
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/tablesorter/jquery.tablesorter.min.js' 
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify()) 
        .pipe(gulp.dest('app/js'));
});

gulp.task('code', function() {
    return gulp.src(['app/*.html','app/html/**/*.html'])
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('style', function() {
    return gulp.src('app/css/**/*.css')
    .pipe(browserSync.reload({ stream: true}))
})

gulp.task('prebuild', async function() {

    var buildCss = gulp.src(
        'app/css/**/*')
    .pipe(gulp.dest('dist/css'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

    var buildOtherHtml = gulp.src('app/html/**/*')
    .pipe(gulp.dest('dist/html'))

    var buildImg = gulp.src('app/img/**/*')
    .pipe(gulp.dest('dist/img'))

});

gulp.task('watch', function() {
    gulp.watch('app/css/**/*.css', gulp.parallel('style'));
    gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch(['app/js/**/*.js', 'app/libs/**/*.js'], gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel( 'browser-sync', 'watch'));

gulp.task('build', gulp.parallel('prebuild', 'scripts'));