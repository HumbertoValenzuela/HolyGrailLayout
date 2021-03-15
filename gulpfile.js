const gulp = require('gulp');
const { src, series, parallel, dest, watch} = require ('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return src('scss/app.scss')
    // .pipe(autoprefixer({cascade:false}))
    .pipe(autoprefixer({
        overrideBrowserlist:['last 2 versions'],
        cascade: false}))
    .pipe(sass({outputStyle: "expanded"}))//nested,compact,expanded,compressed
    .pipe(gulp.dest("css"));
}

function watchFiles() {
    watch('scss/*.scss', css);
    watch('index.html')    
}

// Tasks
exports.css = css;
exports.watchFiles = watchFiles;
exports.default = parallel(css, watchFiles);
// para llamar en la terminal gulp css
// gulp watchfiles
// para llamar a default se escribe en la terminal: gulp