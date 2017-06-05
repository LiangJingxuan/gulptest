/**
 *  less编译
 *
 */

/*
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});

gulp.task('default',['testLess']); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径*/


/**
 *  html 代码压缩
 *
 */

/*var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin');

gulp.task('xswxHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/tpl/commons/!*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/tpl/commons'));
});*/


/**
 *  图片压缩
 *
 */

/*
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('xswxImagemin', function () {
    gulp.src('src/img/!*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});*/


/**
 *  css 代码压缩
 *
 */

/*var gulp = require('gulp'),
    cssmin = require('gulp-minify-css');

gulp.task('xswxCssmin', function () {
    gulp.src('src/css/!*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});*/


/**
 *  js 代码压缩
 *
 */


/*
var gulp = require('gulp'),
    uglify= require('gulp-uglify');

gulp.task('xswxJsmin', function () {
    gulp.src(['src/js/!*.js'])
        .pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true//类型：Boolean 默认：true 是否完全压缩
            // preserveComments: 'all' //保留所有注释
        }))
        .pipe(gulp.dest('dist/js'));
});*/


/**
 *  js 代码合并减少网路请求
 *
 */

/*
 var gulp = require('gulp'),
 concat = require('gulp-concat');

 gulp.task('xswxJsConcat', function () {
 gulp.src('src/js/!*.js')
 .pipe(concat('all.js'))//合并后的文件名
 .pipe(gulp.dest('dist/js'));
 });*/


/**
 *  使用gulp-autoprefixer根据设置浏览器版本自动处理浏览器前缀。
 *  使用她我们可以很潇洒地写代码，不必考虑各浏览器兼容前缀。
 *  【
 *    特别是开发移动端页面时，就能充分体现它的优势。
 *    例如兼容性不太好的flex布局。
 *  】
 *
 */

/*
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('xswxAutoFx', function () {
    gulp.src('src/css/xswx.css')
        .pipe(autoprefixer({
            browsers: [
                'last 2 versions',
                'last 1 Chrome versions',
                'last 2 Explorer versions',
                'last 3 Safari versions',
                'Firefox >= 20',
                'Android >= 4.0',
                'iOS 7',
                'Firefox ESR',
                '> 5%'
            ],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('dist/css'));
});*/


/**
 *  自动刷新
 *
 */

/*var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// 代理

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://192.168.0.133"
    });
});*/

