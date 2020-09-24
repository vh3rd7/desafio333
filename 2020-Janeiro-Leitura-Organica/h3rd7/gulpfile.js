const gulp = require('gulp'),
pug        = require('gulp-pug'),
postcss    = require('gulp-postcss'),
stylus     = require('gulp-stylus'),
browserSync = require('browser-sync').create()

const html = function() {
    return (
      gulp.src('src/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('public'))
    )
}

const css = function () {
  return gulp.src('src/styles/*.styl')
    .pipe(stylus({ compress: false }))
    .pipe(postcss([
      require('tailwindcss'),
      require('autoprefixer'),]))
    .pipe(gulp.dest('public/css'))
}

const serve = gulp.series(css, function() {
    
  browserSync.init({
      server: 'public'
  })

  gulp.watch('src', gulp.parallel(html))
  gulp.watch('src/styles', gulp.parallel(css))
  gulp.watch('public/*.html').on('change', browserSync.reload)
})

gulp.task('default', gulp.series(html, serve))
