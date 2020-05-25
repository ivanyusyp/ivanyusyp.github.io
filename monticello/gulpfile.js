const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const image = require('gulp-image');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('./scss/**/*.+(sass|scss)')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer(['last 10 versions']))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('css-libs', () => {
	return gulp.src('./scss/libs.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css'));
});

gulp.task('script', () => {
	return gulp.src([
		'./libs/jquery/dist/jquery.min.js'
	])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
});

gulp.task('html', () => {
	return gulp.src('index.html')
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', () => {
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false
	});
});

gulp.task('image', async () => {
	gulp.src('./img/**/*')
		.pipe(image({
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: false,
			mozjpeg: true,
			guetzli: false,
			gifsicle: true,
			svgo: true,
			concurrent: 10,
			quiet: true // defaults to false
		}))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('clean', async () => {
	return del.sync('dist');
});

gulp.task('prebuild', async () => {
	gulp.src(['./css/style.css', './css/libs.min.css'])
		.pipe(gulp.dest('dist/css'));
	gulp.src(['./css/font/**/*'])
		.pipe(gulp.dest('dist/css/font'));
	gulp.src('./js/**/*')
		.pipe(gulp.dest('dist/js'));
	gulp.src('*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
	gulp.watch('scss/**/*.+(sass|scss)', gulp.parallel('sass'));
	gulp.watch(['js/index.js', './libs/**/*.js'], gulp.parallel('script'));
	gulp.watch('index.html', gulp.parallel('html'));
});

gulp.task('default', gulp.parallel('css-libs', 'sass', 'browser-sync', 'watch'));
gulp.task('build', gulp.parallel('prebuild', 'clean', 'image', 'sass', 'script'));